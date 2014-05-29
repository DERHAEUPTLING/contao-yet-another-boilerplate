<?php
//-------------------------------------------------------------------
// AutoBackupDB.php	Backup Contao-Datenbank mit Cron-Job
//
// Copyright (c) 2007-2014 by Softleister
//
// Der Cron-Job nimmt diese Datei als Include-Datei für CronController.php
// aktueller Pfad bei Ausführung: system/modules/cron
//
//-------------------------------------------------------------------
//  Systeminitialisierung, wenn direkt aufgerufen
//-------------------------------------------------------------------
if( !defined('TL_MODE') ) {
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
  define('DIRECT_CALL', 1 );
}

//-------------------------------------------------------------------
//  Backend um die Backup-Funktionen erweitern
//-------------------------------------------------------------------
class AutoBackupDb extends Backend      	    // Datenbank ist bereits geöffnet
{
  //-------------------------
  //  Constructor
  //-------------------------
  public function __construct( )
  {
    parent::__construct(); 			    // Construktor Backend ausführen
    $this->loadLanguageFile('default');		    // Sprachenfiles laden
    $this->loadLanguageFile('modules');
    $this->import('Database');
    $this->import('BackupDbCommon');                // Backup-Funktionalität importieren
  }

  //-------------------------
  //  Backup ausführen
  //-------------------------
  public function run( )
  {
    @set_time_limit( 600 );
    
    $pfad = TL_ROOT . '/'.$GLOBALS['TL_CONFIG']['uploadPath'].'/AutoBackupDB';
    if( !file_exists( $pfad."/.htaccess" ) )
      copy( TL_ROOT . '/system/modules/BackupDB/htacc', $pfad . '/.htaccess' );
      
    //--- Datei-Extension festlegen ---
    $ext = '.sql';
    if( isset( $GLOBALS['TL_CONFIG']['backupdb_zip'] ) && ($GLOBALS['TL_CONFIG']['backupdb_zip'] == true) ) $ext = '.zip';
    
    //--- alte Backups aufrutschen ---  Anzahl einstellbar 29.3.2009 Softleister, ueber localconfig 07.05.2011
    $anzBackup = 3;
    if( isset( $GLOBALS['BACKUPDB']['AutoBackupCount'] ) && is_int($GLOBALS['BACKUPDB']['AutoBackupCount']) )
      $anzBackup = $GLOBALS['BACKUPDB']['AutoBackupCount'];
    if( isset( $GLOBALS['TL_CONFIG']['AutoBackupCount'] ) && is_int($GLOBALS['TL_CONFIG']['AutoBackupCount']) )
      $anzBackup = $GLOBALS['TL_CONFIG']['AutoBackupCount'];
    
    if( file_exists( $pfad."/AutoBackupDB-".$anzBackup.$ext ) )
      unlink( $pfad."/AutoBackupDB-".$anzBackup.$ext );
    for( ; $anzBackup > 1; $anzBackup-- ) {
      if( file_exists( $pfad."/AutoBackupDB-".($anzBackup-1).$ext ) )
        rename( $pfad."/AutoBackupDB-".($anzBackup-1).$ext, $pfad."/AutoBackupDB-".$anzBackup.$ext );
    }

    //--- neue Datei AutoBackupDB-1.sql ---
    if( file_exists( $pfad.'/AutoBackupDB-1.sql' ) ) unlink( $pfad.'/AutoBackupDB-1.sql' );
    $datei = new File( $GLOBALS['TL_CONFIG']['uploadPath'].'/AutoBackupDB/AutoBackupDB-1.sql' );
    $from = defined( 'DIRECT_CALL' ) ? 'Saved            : by direct call from IP ' . $this->Environment->ip : 'Saved by Cron';
    $datei->write( $this->BackupDbCommon->getHeaderInfo( true, $from ) );

    $arrBlacklist = $this->BackupDbCommon->get_blacklist( );
    $sqlarray = $this->BackupDbCommon->getFromDB( );
    
    if( count($sqlarray) == 0 ) print "No tables found in database.";
    else {
      foreach( array_keys($sqlarray) as $table ) {
        $datei->write( $this->BackupDbCommon->get_table_structure( $table, $sqlarray[$table] ) );

        if( in_array( $table, $arrBlacklist ) ) continue;             // Blacklisten-Tabellen speichern nur Struktur, keine Daten -> continue
	$this->BackupDbCommon->get_table_content( $table, $datei );   // Dateninhalte in Datei schreiben
      }
    }
    $datei->write( "\r\n/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;\r\n"
                  ."/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;\r\n"
                  ."/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;\r\n"
                  ."\r\n# --- End of Backup ---\r\n" );           // Endekennung
    $datei->close();

    //--- Wenn Komprimierung gewünscht, ZIP erstellen ---
    if( $ext === '.zip' ) {
      $objZip = new ZipWriter( $GLOBALS['TL_CONFIG']['uploadPath'].'/AutoBackupDB/AutoBackupDB-1.zip' );
      $objZip->addFile( $GLOBALS['TL_CONFIG']['uploadPath'].'/AutoBackupDB/AutoBackupDB-1.sql' );
      $objZip->close();
      unlink( $pfad.'/AutoBackupDB-1.sql' );
    }
  
    //--- Mail-Benachrichtigung ---
    if( isset( $GLOBALS['TL_CONFIG']['backupdb_sendmail'] ) && ($GLOBALS['TL_CONFIG']['backupdb_sendmail'] == true) ) {
      $objEmail = new Email();
      $objEmail->from = $GLOBALS['TL_CONFIG']['adminEmail'];
      $objEmail->subject = "AutoBackupDB " . $this->Environment->host;
      $objEmail->text = $this->BackupDbCommon->getHeaderInfo( false, $from );

      if( isset( $GLOBALS['TL_CONFIG']['backupdb_attmail'] ) && ($GLOBALS['TL_CONFIG']['backupdb_attmail'] == true) )
        $objEmail->attachFile( $pfad . '/AutoBackupDB-1' . $ext, 'application/octet-stream' );

      $objEmail->sendTo( $GLOBALS['TL_CONFIG']['adminEmail'] );
    }
  }

  //------------------------------------------------
}

//-------------------------------------------------------------------
//  Programmstart
//-------------------------------------------------------------------
$objBackupDB = new AutoBackupDB( );
$objBackupDB->run( );

//-------------------------------------------------------------------
?>