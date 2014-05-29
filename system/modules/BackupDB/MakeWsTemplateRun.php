<?php
//-------------------------------------------------------------------
// MakeWsTemplateRun.php	WS-Template erstellen
//
// Copyright (c) 2007-2014 by Softleister
//
//-------------------------------------------------------------------
//  Systeminitialisierung
//-------------------------------------------------------------------
define('TL_MODE', 'BE');

// search the initialize.php // Danke an xtra
$dir = dirname( $_SERVER['SCRIPT_FILENAME'] );

while( ($dir != '.') && ($dir != '/') && !is_file($dir . '/system/initialize.php') ) {
    $dir = dirname( $dir );
}

if( !is_file($dir . '/system/initialize.php') ) {
    echo 'Could not find initialize.php, where is Contao?';
    exit;
}

require( $dir . '/system/initialize.php' );

//-------------------------------------------------------------------
//  Backend um die WsTemplate-Funktionen erweitern
//-------------------------------------------------------------------
class BackupWsTemplate extends Backend  // Datenbank ist bereits geöffnet
{
  //-------------------------
  //  Variablen
  //-------------------------
  protected $Exclude = Array (                 // Diese Datenbank-Tabellen gehören
                         "tl_cache",           // nicht in ein WS-Template
                         "tl_cron",
                         "tl_lock",
                         "tl_log",
                         "tl_runonce",
                         "tl_search",
                         "tl_search_index",
                         "tl_session",
                         "tl_undo",
                         "tl_version"
                       );

  //-------------------------
  //  Constructor
  //-------------------------
  public function __construct( )
  {
    $this->import('BackendUser', 'User');	    // User importieren
    parent::__construct(); 			    // Construktor Backend ausführen
    $this->User->authenticate(); 		    // Authentifizierung überprüfen
    $this->loadLanguageFile('default');		    // Sprachenfiles laden
    $this->loadLanguageFile('modules');
    $this->loadLanguageFile('tl_BackupDB'); 
    $this->import('BackupDbCommon');                // Backup-Funktionalität importieren
  }

  //-------------------------
  //  Backup ausführen
  //-------------------------
  public function run( )
  {
    @set_time_limit( 600 );
    echo "<html><head>\n"
        ."<meta charset=\"utf-8\">\n"
        ."<title>".$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_txt1']."</title>\n"
        ."<meta http-equiv=\"cache-control\" content=\"no-cache\">\n"
        ."<meta http-equiv=\"pragma\" content=\"no-cache\">\n"
        ."</head>\n"
        ."<body style=\"font-family:Arial,Helvetica,sans-serif; font-size:12px;\">\n"
        ."".$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_txt2']."<br />&nbsp;<br />\n";

    $headertext  = "#================================================================================\r\n";
    $headertext .= "# Website-Template : ".$this->BackupDbCommon->getWsName( ).".sql\r\n";
    $headertext .= $this->BackupDbCommon->getHeaderInfo( false, 'Saved by User    : '.$this->User->username.' ('.$this->User->name.')' );
    
    //--- Zielverzeichnis für Website-Templates ---  einstellbar 30.9.2009 Softleister, ueber localconfig 07.05.2011
    $zielVerz = 'templates';
    if( isset( $GLOBALS['BACKUPDB']['WsTemplatePath'] ) && is_dir(TL_ROOT.'/'.trim($GLOBALS['BACKUPDB']['WsTemplatePath'], '/')) )
      $zielVerz = trim($GLOBALS['BACKUPDB']['WsTemplatePath'], '/');
    if( isset( $GLOBALS['TL_CONFIG']['WsTemplatePath'] ) && is_dir(TL_ROOT.'/'.trim($GLOBALS['TL_CONFIG']['WsTemplatePath'], '/')) && (trim($GLOBALS['TL_CONFIG']['WsTemplatePath']) != '') )
      $zielVerz = trim($GLOBALS['TL_CONFIG']['WsTemplatePath'], '/');

    // Import Files-Library für FTP-Support, wenn aktiviert
    $this->import( 'Files', 'Files' );
    $tempdir = '/system/tmp/';   	    // geändert in 1.0.1 am 15.12.2008 SL

    $file1 = $this->BackupDbCommon->getWsName( ).".sql";    // Datenbank-Datei
    $file2 = $this->BackupDbCommon->getWsName( ).".txt";    // Info-Datei

    $datei = new File( $tempdir.$file1 );
    $datei->write( $headertext );
    $datei->write( 'SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";' . "\r\n"
                  ."\r\n"
                  ."/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;\r\n"
                  ."/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;\r\n"
                  ."/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;\r\n"
                  ."/*!40101 SET NAMES utf8 */;\r\n" );
    
    $arrSavedDB = array( 'tl_' );           // Default, Verhalten wie in den Vorversionen von BackupDB
    if( isset( $GLOBALS['TL_CONFIG']['backupdb_saveddb'] ) && (trim($GLOBALS['TL_CONFIG']['backupdb_saveddb']) != '') ) {
      $arrSavedDB = trimsplit(',', strtolower($GLOBALS['TL_CONFIG']['backupdb_saveddb']));
    }

    $arrBlacklist = $this->BackupDbCommon->get_blacklist( );
    $sqlarray = $this->BackupDbCommon->getFromDB( );
    
    if( count($sqlarray) == 0 ) $datei->write( "\r\nNo tables found in database." );
    else {
      foreach( array_keys($sqlarray) as $table ) {
        if( in_array( $table, $this->Exclude ) ) continue;                  // Exclude-Tabellen überspringen
        if( in_array( $table, $arrBlacklist ) ) continue;                   // Blacklisten-Tabellen überspringen

        $found = false;
        for( $i=0; $i<count($arrSavedDB); $i++ ) {
          if( (strlen($arrSavedDB[$i]) <= strlen($table)) 
           && ($arrSavedDB[$i] === substr($table, 0, strlen($arrSavedDB[$i]))) ) $found = true;
        }
        if( !$found ) continue;                                             // nur die angegebenen Datentabellen sichern

	$this->BackupDbCommon->get_table_content( $table, $datei, true );   // Dateninhalte in Datei schreiben
      }
    }
    $datei->write( "\r\n# --- End of Backup ---\r\n" );     // Endekennung
    $datei->close();

    $datei = new File( $tempdir.$file2 );                   // Textdatei öffnen
    $datei->write( $headertext );

    //--- Installationsanleitung ---
    $datei->write( "#------------------------------------------\r\n" );
    $datei->write( "# ".$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_inst']."\r\n" );
    $datei->write( "#------------------------------------------\r\n\r\n" );

    $datei->write( " ".$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl10']."\r\n" );
    $datei->write( " ".$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl11']."\r\n" );
    $datei->write( " ".$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl12']."\r\n\r\n" );
    $datei->write( " ".$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl20']."\r\n\r\n" );
    $datei->write( " ".$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl30']."\r\n\r\n" );
    $datei->write( " ".$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl40']."\r\n" );
    $datei->write( " ".$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl41']."\r\n" );
    $datei->write( " ".$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl42']."\r\n\r\n" );
    $datei->write( " ".$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl50']."\r\n" );
    $datei->write( " ".$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl51']."\r\n\r\n" );
    
    $datei->close();

    if( $GLOBALS['TL_CONFIG']['useFTP'] ) {
      if( file_exists(TL_ROOT . '/' . $zielVerz . '/' . $file1) ) $this->Files->delete($zielVerz . '/' . $file1);   // Delete old files if exist
      if( file_exists(TL_ROOT . '/' . $zielVerz . '/' . $file2) ) $this->Files->delete($zielVerz . '/' . $file2);
      $this->Files->rename( substr($tempdir,1).$file1, $zielVerz.'/'.$file1 );
      $this->Files->rename( substr($tempdir,1).$file2, $zielVerz.'/'.$file2 );
    }
    else {
      if( file_exists(TL_ROOT . '/' . $zielVerz . '/' . $file1) ) unlink(TL_ROOT . '/' . $zielVerz . '/' . $file1);   // Delete old files if exist
      if( file_exists(TL_ROOT . '/' . $zielVerz . '/' . $file2) ) unlink(TL_ROOT . '/' . $zielVerz . '/' . $file2);
      rename( TL_ROOT . $tempdir . $file1, TL_ROOT . '/' . $zielVerz . '/' . $file1 );                  // Move new files
      rename( TL_ROOT . $tempdir . $file2, TL_ROOT . '/' . $zielVerz . '/' . $file2 );
    }

    echo "<br />".$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_txt3']."<br />\n<br />\n";
    echo "<b>".$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_files']."</b><br />\n";
    echo "/".$zielVerz."/$file1<br />\n";
    echo "/".$zielVerz."/$file2<br />\n";
    echo "<br />\n";
    echo "".$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_txt5']."<br />\n";
    echo "<br />\n";
    echo "<a href=\"javascript:window.close()\">".$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_txt4']."</a><br />\n";
    echo "</body></html>\n";
  }
  
  //------------------------------------------------
}

//-------------------------------------------------------------------
//  Programmstart
//-------------------------------------------------------------------
$objWsTemplate = new BackupWsTemplate( );
$objWsTemplate->run( );

//-------------------------------------------------------------------
?>