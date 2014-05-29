<?php
//-------------------------------------------------------------------
// backup.php	Backup Contao-Datenbank
//
// Copyright (c) 2007-2014 by Softleister
//-------------------------------------------------------------------
class BackupDbCommon extends Backend
{
  //-------------------------
  //  Variablen
  //-------------------------
  public $Version = '3.2.0';

  public $extcludeExt = Array (            // Module aus der Standard-Installation < 2.7
                             "backend", "calendar", "comments", "development", "dfGallery",
                             "frontend", "listing", "news", "newsletter", "pun_bridge",
                             "registration", "rss_reader", "tpl_editor", "BackupDB", "faq",
                             "rep_base", "rep_client", "memberlist"
                           );

  public $extcludeExt27 = Array (            // Module aus der Standard-Installation >= 2.7
                             "backend", "calendar", "comments", "dfGallery", "faq", "frontend", 
                             "glossary", "listing", "memberlist", "news", "newsletter", 
                             "registration", "rep_base", "rep_client", "rss_reader", "tpl_editor", 
                             "BackupDB"
                           );

  public $extcludeExt28 = Array (            // Module aus der Standard-Installation >= 2.8 (auch 2.9 und 2.10)
                             "backend", "calendar", "comments", "faq", "frontend", "listing", 
                             "news", "newsletter", "registration", "rep_base", "rep_client", 
                             "rss_reader", "tpl_editor", "BackupDB"
                           );

  public $extcludeExt211 = Array (            // Module aus der Standard-Installation >= 2.11
                             "backend", "calendar", "comments", "faq", "frontend", "listing", 
                             "news", "newsletter", "registration", "rep_base", "rep_client", 
                             "rss_reader", "tasks", "tpl_editor", "BackupDB"
                           );

  public $extcludeExt30 = Array (            // Module aus der Standard-Installation >= 3.0
                             "calendar", "comments", "core", "devtools", "faq", "listing", 
                             "news", "newsletter", "repository", "BackupDB"
                           );

  //---------------------------------------
  // Konstruktor
  //---------------------------------------
  public function __construct()
  {
    $this->import( 'BackendUser', 'User' );	// User importieren
    $this->import( 'Database' );

    $ver = explode( '.', VERSION );             // $ver[0] = Main version, $ver[1] = Sub version
  }

  //------------------------------------------------
  //  Dateifähiger Filename
  //------------------------------------------------
  public function getWsName()
  {
    return str_replace( array( " - ", " ", ".", ",", "\\", "/", ":", "*", "?", "<", ">", "|", "\"" ),
                        array( "_",   "_", "",  "",  "",   "",  "",  "",  "",  "(", ")", "",  "" ),
                        $GLOBALS['TL_CONFIG']['websiteTitle'] );
  }
        
  //---------------------------------------
  // Extension-Versions-Info
  //---------------------------------------
  public function getVersionInfo( $ver )
  {
    $version = floor( $ver / 10000000 ) . '.';            // Hauptversion
    $version .= floor(($ver % 10000000) / 10000) . '.';   // Subversion
    $version .= floor(($ver % 10000) / 10 );              // Sub-Subversion
    switch( $ver % 10 ) {
      case 0:   $version .= ' alpha1';    break;
      case 1:   $version .= ' alpha2';    break;
      case 2:   $version .= ' alpha3';    break;
      case 3:   $version .= ' beta1';     break;
      case 4:   $version .= ' beta2';     break;
      case 5:   $version .= ' beta3';     break;
      case 6:   $version .= ' rc1';       break;
      case 7:   $version .= ' rc2';       break;
      case 8:   $version .= ' rc3';       break;
      case 9:   $version .= ' stable';    break;
    }
    return $version;
  }

  //---------------------------------------
  // Extension-Versions-Info
  //---------------------------------------
  public function getHeaderInfo( $sql_mode, $savedby='Saved by Cron' )
  {
    $result = "#================================================================================\r\n"
             ."# Contao-Website   : ".$GLOBALS['TL_CONFIG']['websiteTitle']."\r\n"
             ."# Contao-Database  : ".$GLOBALS['TL_CONFIG']['dbDatabase']."\r\n"
             ."# " . $savedby . "\r\n"
             ."# Time stamp       : " . date( "Y-m-d" ) . " at " . date( "H:i:s" ) . "\r\n"
             ."#\r\n"
             ."# Contao Extension : BackupDB, Version ".$this->Version."\r\n"
             ."# Copyright        : Softleister (www.softleister.de)\r\n"
             ."# Author           : Hagen Klemp\r\n"
             ."# Licence          : LGPL\r\n"
             ."#\r\n"
             ."# Visit Contao project page http://www.contao.org for more information\r\n"
             ."#\r\n"

    //--- Installierte Module unter /system/modules auflisten ---
             ."#-----------------------------------------------------\r\n"
             ."# Contao Version ".VERSION . "." . BUILD."\r\n"
             ."# ".$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_module']."\r\n"
             ."#-----------------------------------------------------\r\n";

    if( $this->Database->tableExists('tl_repository_installs') ) {
      $sql = "SELECT i.extension, i.version, i.build, f.filename FROM tl_repository_installs as i, tl_repository_instfiles as f WHERE i.id=f.pid AND LEFT(f.filename,15)='system/modules/' GROUP BY i.extension";
      if( version_compare(VERSION, '2.8') >= 0 )
        $objData = $this->Database->executeUncached( $sql );
      else
        $objData = $this->Database->execute( $sql );

      while( $objData->next() ) {
        if( $objData->extension === 'BackupDB' ) continue;   // BackupDB für Restore nicht notwendig
        $result .= '#   - ' . sprintf('%-28s', $objData->extension) . ': Version ' . $this->getVersionInfo( $objData->version ) . ', Build ' . $objData->build . "\r\n";
        $arrfile = explode('/', $objData->filename );
        $instExt[] = strtolower( $arrfile[2] );
      }
    }

    $modullist = "";
    $handle = opendir( ".." );
    while( $file = readdir( $handle ) ) {
      if( substr( $file, 0, 1 ) == "." ) continue;                                // . und .. ausblenden
      if( isset($instExt) && in_array( strtolower($file), $instExt ) ) continue;  // keine Files, die schon im Repository stehen

      if( version_compare(VERSION, '2.7') < 0 ) {
        if( in_array( $file, $this->extcludeExt ) ) continue;      // Standard-Module überspringen
      }
      else if( version_compare(VERSION, '2.8') < 0 ) {
        if( in_array( $file, $this->extcludeExt27 ) ) continue;
      }
      else if( version_compare(VERSION, '2.11') < 0 ) {
        if( in_array( $file, $this->extcludeExt28 ) ) continue;    // gilt 2.8.x ... 2.10.x
      }
      else if( version_compare(VERSION, '3.0') < 0 ) {
        if( in_array( $file, $this->extcludeExt211 ) ) continue;   // gilt 2.11.x ... 2.99.x
      }
      else {
        if( in_array( $file, $this->extcludeExt30 ) ) continue;    // ab 3.0
      }
      $modullist .= "#   - $file\r\n";
    }
    closedir( $handle );
    if( $modullist != "" )      $result .= $modullist;
    else if( !count($instExt) ) $result .= "#   == keine ==\r\n";
    
    $result .= "#\r\n"
              ."#================================================================================\r\n"
              ."\r\n";
    if( $sql_mode ) {
      $result .= 'SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";' . "\r\n"
                .'SET time_zone = "+00:00";' . "\r\n"
                ."\r\n"
                ."/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;\r\n"
                ."/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;\r\n"
                ."/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;\r\n"
                ."/*!40101 SET NAMES utf8 */;\r\n";
    }
    return $result;
  }

  //------------------------------------------------
  //  Erzeugt die Strukturdefinitionen
  //------------------------------------------------
  public function getFromDB()
  {
    $this->import('Database');
    $tables = $this->Database->listTables(null, true);
    if( empty($tables) ) return array();

    $return = array();

    foreach( $tables as $table ) {
      $keys = array();
      $fields = $this->Database->listFields($table, true);

      foreach( $fields as $field ) {
        $name = $field['name'];
    	$field['name'] = '`'.$field['name'].'`';
      	  
      	if( in_array(strtolower($field['type']), array('text', 'tinytext', 'mediumtext', 'longtext')) && isset($fields[$name]) ) {
    	  $keys[$name] = 'FULLTEXT ';
      	}

        //--- Tabellenspalten definieren ---      
        if( $field['type'] != 'index' ) {
       	  unset($field['index']);

      	  // Field type
	  if( $field['length'] != '' ) {
      	    $field['type'] .= '(' . $field['length'] . (($field['precision'] != '') ? ',' . $field['precision'] : '') . ')';
          
      	    unset( $field['length'] );
      	    unset( $field['precision'] );
      	  }

	  // Variant collation
	  if( $field['collation'] != '' && $field['collation'] != $GLOBALS['TL_CONFIG']['dbCollation'] ) {
            $field['collation'] = 'COLLATE ' . $field['collation'];
	  }
	  else {
	    unset($field['collation']);
	  }

          // Default values
	  if( in_array(strtolower($field['type']), array('text', 'tinytext', 'mediumtext', 'longtext', 'blob', 'tinyblob', 'mediumblob', 'longblob')) || stristr($field['extra'], 'auto_increment') || $field['default'] === null || strtolower($field['null']) == 'null' ) {
	    unset($field['default']);
	  }
	  // Date/time constants (see #5089)
	  else if( in_array(strtolower($field['default']), array('current_date', 'current_time', 'current_timestamp')) ) {
	    $field['default'] = "default " . $field['default'];
	  }
	  // Everything else
	  else {
	    $field['default'] = "default '" . $field['default'] . "'";
	  }
      	  $return[$table]['TABLE_FIELDS'][$name] = trim( implode( ' ', $field ) );
      	}
      
      	//--- Index-Einträge ---
	if( isset($field['index']) && !empty($field['index_fields']) ) {
      	  $index_fields = implode( '`, `', $field['index_fields'] );

      	  switch( $field['index'] ) {
      	    case 'UNIQUE':    if( $name == 'PRIMARY' ) $return[$table]['TABLE_CREATE_DEFINITIONS'][$name] = 'PRIMARY KEY  (`'.$index_fields.'`)';
      	                      else  		         $return[$table]['TABLE_CREATE_DEFINITIONS'][$name] = 'UNIQUE KEY `'.$name.'` (`'.$index_fields.'`)';
       		              break;
          
      	    default:          $return[$table]['TABLE_CREATE_DEFINITIONS'][$name] = (isset($keys[$name]) ? $keys[$name] : '') . 'KEY `'.$name.'` (`'.$index_fields.'`)';
      	  	              break;
      	  }
      	  unset( $field['index_fields'] );
      	  unset( $field['index'] );
      	}
      }
    }
    
    // Table status
    $objStatus = $this->Database->prepare( "SHOW TABLE STATUS" )->execute( );
    while( $zeile = $objStatus->fetchAssoc() ) {
      $return[$zeile['Name']]['TABLE_OPTIONS'] = " ENGINE=".$zeile['Engine']." DEFAULT CHARSET=".substr($zeile['Collation'], 0, strpos($zeile['Collation'],"_"))."";
      if( $zeile['Auto_increment'] != "" ) $return[$zeile['Name']]['TABLE_OPTIONS'] .= " AUTO_INCREMENT=".$zeile['Auto_increment']." ";
    }

    return $return;
  }

  //---------------------------------------
  // Erzeut Struktur der Datentabelle
  //---------------------------------------
  public function get_table_structure( $table, $tablespec )
  {
    $result = "\r\n"
             ."#---------------------------------------------------------\r\n"
             ."# Table structure for table '$table'\r\n"
             ."#---------------------------------------------------------\r\n";

    $result .= "CREATE TABLE `" . $table . "` (\n  " . implode(",\n  ", $tablespec['TABLE_FIELDS']) . (count($tablespec['TABLE_CREATE_DEFINITIONS']) ? ',' : '') . "\n";
    
    if( is_array( $tablespec['TABLE_CREATE_DEFINITIONS'] ) )                     // Bugfix 29.3.2009 Softleister
      $result .= "  " . implode(",\n  ", $tablespec['TABLE_CREATE_DEFINITIONS']) . "\n";
    $result .= ")" . $tablespec['TABLE_OPTIONS'] . ";\r\n\r\n";
    
    return $result;
  }

  //------------------------------------------------
  //  Erzeut INSERT-Zeilen mit den Datenbankdaten
  //------------------------------------------------
  public function get_table_content( $table, $datei=NULL, $sitetemplate=false )
  {
    if( version_compare(VERSION, '2.8') >= 0 )
      $objData = $this->Database->executeUncached( "SELECT * FROM $table" );
    else
      $objData = $this->Database->execute( "SELECT * FROM $table" );

    $fields = $this->Database->listFields( $table );		// Liste der Felder lesen
    if( $sitetemplate ) {
      $fieldlist = ' (';
      foreach( $fields as $field ) {
        if( $field['type'] != 'index' ) $fieldlist .= '`' . $field['name'] . '`, ';
      }
      $fieldlist = substr( $fieldlist, 0, -2 ) . ')';             // letztes ", " abschneiden

      echo $table . '<span style="color:#a0a0a0;">, ' . $objData->numRows . " Entries</span><br />\r\n";
    }

    $noentries = $objData->numRows ? '' : ' - no entries';
    if( $datei == NULL ) {
      print "\r\n"
           ."#\r\n"
	   ."# Dumping data for table '$table'" . $noentries . "\r\n"
	   ."#\r\n\r\n";
    }
    else {
      $datei->write( "\r\n"
                    ."#\r\n"
	            ."# Dumping data for table '$table'" . $noentries . "\r\n"
	            ."#\r\n\r\n" );
    }

    while( $row = $objData->fetchRow() ) {
      $insert_data = 'INSERT INTO `' . $table . '`' . $fieldlist . ' VALUES (';
      $i = 0;							// Fields[0]['type']
      foreach( $row as $field_data ) {
	if( !isset( $field_data ) )
	  $insert_data .= " NULL,";
	else if( $field_data != "" ) {
	  switch( strtolower($fields[$i]['type']) ) {
	    case 'blob':
	    case 'binary':
	    case 'varbinary':
	    case 'tinyblob':
	    case 'mediumblob':
	    case 'longblob':	$insert_data .= " 0x";		// Auftackt für HEX-Darstellung
	                        $insert_data .= bin2hex($field_data);
	    			$insert_data .= ",";		// Abschuß
	    			break;
	    
	    case 'smallint':
	    case 'int':		$insert_data .= " $field_data,";
	    			break;
	    
	    case 'text':
	    case 'mediumtext':  if( strpos( $field_data, "'" ) != false ) {  // ist im Text ein Hochkomma vorhanden, wird der Text in HEX-Darstellung gesichert
	        		  $insert_data .= " 0x" . bin2hex($field_data) . ",";
	    			  break;
	    			}
	    			// else: weiter mit default  
	    
	    default:	        $insert_data .= " '".str_replace( array("\\", "'", "\r", "\n"), array("\\\\", "\\'", "\\r", "\\n"), $field_data )."',";
				break;
	  }
	}
	else
	  $insert_data .= " '',";
	$i++;						// Next Field
      }
      $insert_data = trim( $insert_data, ',' );
      $insert_data .= " )";
      if( $datei == NULL )
        print "$insert_data;\r\n";			// Zeile ausgeben
      else
        $datei->write( "$insert_data;\r\n" );
    }
  }
		
  //------------------------------------------------
  //  get_blacklist: Liefert die eingestellte Blacklist zurück
  //------------------------------------------------
  public function get_blacklist( )
  {
    $arrBlacklist = array();                // Default: alle Datentabellen werden gesichert
    if( isset( $GLOBALS['TL_CONFIG']['backupdb_blacklist'] ) && (trim($GLOBALS['TL_CONFIG']['backupdb_blacklist']) != '') ) {
      $arrBlacklist = trimsplit(',', strtolower($GLOBALS['TL_CONFIG']['backupdb_blacklist']));
    }
    return $arrBlacklist;
  }

  //---------------------------------------
}

//-------------------------------------------------------------------

?>