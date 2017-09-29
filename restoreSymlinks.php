<?php

// This file is part of a backup, included in the zip archive.
// Place the restoreSymlinks.php in the web directory of your
// contao 4 and call http://domain.tld/restoreSymlinks.php
// After running script clear symfony-cache, e.g. with Contao Manager

$arrSymlinks = unserialize('a:26:{i:0;a:3:{s:4:"link";s:23:"system/config/tcpdf.php";s:6:"target";s:63:"vendor/contao/core-bundle/src/Resources/contao/config/tcpdf.php";s:5:"depth";i:2;}i:1;a:3:{s:4:"link";s:11:"system/logs";s:6:"target";s:8:"var/logs";s:5:"depth";i:1;}i:2;a:3:{s:4:"link";s:32:"system/modules/m17StickyBEFooter";s:6:"target";s:60:"vendor/jrgregory/m17-sticky-backend-footer/m17StickyBEFooter";s:5:"depth";i:2;}i:3;a:3:{s:4:"link";s:22:"system/themes/flexible";s:6:"target";s:62:"vendor/contao/core-bundle/src/Resources/contao/themes/flexible";s:5:"depth";i:2;}i:4;a:3:{s:4:"link";s:25:"vendor/bin/contao-console";s:6:"target";s:40:"contao/manager-bundle/bin/contao-console";s:5:"depth";i:1;}i:5;a:3:{s:4:"link";s:24:"vendor/bin/doctrine-dbal";s:6:"target";s:31:"doctrine/dbal/bin/doctrine-dbal";s:5:"depth";i:1;}i:6;a:3:{s:4:"link";s:16:"vendor/bin/lessc";s:6:"target";s:27:"oyejorge/less.php/bin/lessc";s:5:"depth";i:1;}i:7;a:3:{s:4:"link";s:20:"vendor/bin/minifycss";s:6:"target";s:35:"matthiasmullie/minify/bin/minifycss";s:5:"depth";i:1;}i:8;a:3:{s:4:"link";s:19:"vendor/bin/minifyjs";s:6:"target";s:34:"matthiasmullie/minify/bin/minifyjs";s:5:"depth";i:1;}i:9;a:3:{s:4:"link";s:16:"vendor/bin/parse";s:6:"target";s:41:"jeremykendall/php-domain-parser/bin/parse";s:5:"depth";i:1;}i:10;a:3:{s:4:"link";s:16:"vendor/bin/pscss";s:6:"target";s:23:"leafo/scssphp/bin/pscss";s:5:"depth";i:1;}i:11;a:3:{s:4:"link";s:27:"vendor/bin/security-checker";s:6:"target";s:44:"sensiolabs/security-checker/security-checker";s:5:"depth";i:1;}i:12;a:3:{s:4:"link";s:19:"vendor/bin/uaparser";s:6:"target";s:30:"ua-parser/uap-php/bin/uaparser";s:5:"depth";i:1;}i:13;a:3:{s:4:"link";s:21:"vendor/bin/update-psl";s:6:"target";s:46:"jeremykendall/php-domain-parser/bin/update-psl";s:5:"depth";i:1;}i:14;a:3:{s:4:"link";s:10:"web/assets";s:6:"target";s:6:"assets";s:5:"depth";i:1;}i:15;a:3:{s:4:"link";s:26:"web/bundles/contaocalendar";s:6:"target";s:50:"vendor/contao/calendar-bundle/src/Resources/public";s:5:"depth";i:2;}i:16;a:3:{s:4:"link";s:26:"web/bundles/contaocomments";s:6:"target";s:50:"vendor/contao/comments-bundle/src/Resources/public";s:5:"depth";i:2;}i:17;a:3:{s:4:"link";s:22:"web/bundles/contaocore";s:6:"target";s:46:"vendor/contao/core-bundle/src/Resources/public";s:5:"depth";i:2;}i:18;a:3:{s:4:"link";s:21:"web/bundles/contaofaq";s:6:"target";s:45:"vendor/contao/faq-bundle/src/Resources/public";s:5:"depth";i:2;}i:19;a:3:{s:4:"link";s:22:"web/bundles/contaonews";s:6:"target";s:46:"vendor/contao/news-bundle/src/Resources/public";s:5:"depth";i:2;}i:20;a:3:{s:4:"link";s:28:"web/bundles/contaonewsletter";s:6:"target";s:52:"vendor/contao/newsletter-bundle/src/Resources/public";s:5:"depth";i:2;}i:21;a:3:{s:4:"link";s:31:"web/bundles/softleisterbackupdb";s:6:"target";s:59:"vendor/do-while/contao-backupdb-bundle/src/Resources/public";s:5:"depth";i:2;}i:22;a:3:{s:4:"link";s:14:"web/files/dist";s:6:"target";s:10:"files/dist";s:5:"depth";i:2;}i:23;a:3:{s:4:"link";s:19:"web/files/publisher";s:6:"target";s:15:"files/publisher";s:5:"depth";i:2;}i:24;a:3:{s:4:"link";s:43:"web/system/modules/m17StickyBEFooter/assets";s:6:"target";s:39:"system/modules/m17StickyBEFooter/assets";s:5:"depth";i:4;}i:25;a:3:{s:4:"link";s:17:"web/system/themes";s:6:"target";s:13:"system/themes";s:5:"depth";i:2;}}');

// Check current position
if( !is_dir( "../web" ) || !file_exists( "./app.php" ) ) {
	die( "The file is not in the correct directory" );
}

// detect OS
$windows = strtoupper(substr(PHP_OS, 0, 3)) === "WIN";      // Windows or not

// get absolute path to contao
$rootpath = getcwd();
$rootpath = substr( $rootpath, 0 , strlen($rootpath) - 3 );

// Restore the symlinks
$errors = 0;
$counter = 0;
foreach( $arrSymlinks as $link ) {
	// get linkpath
	$l = $rootpath . $link["link"];                         // absolute address of symlink
	if( $windows ) $l = str_replace( "/", "\\", $l );       // for windows change slashes

	// get targetpath
	if( $windows ) {
		$t = str_replace( "/", "\\", $rootpath . $link["target"] );
	}
	else {
		$t = $link["target"];
		for( $i = 0; $i < $link["depth"]; $i++ ) {
			$t = "../" . $t;
		}
	}

	// check if link seem to be a directory
	if( file_exists( $l ) && !is_link( $l ) ) {
		rename( $l, $l . ".removed" );                      // rename directory or file
	}

	// no action, if link is a symlink
	if( is_link( $l ) ) continue;

	// set new symlink
	$counter++;
	if( !symlink( $t, $l ) ) {
		echo "Symlink failed: " . $l . "<br>";
		$errors++;
	}
}

echo "Program terminated with " . $errors . " errors, " . $counter . " new symlinks<br><br>PLEASE DELETE THE SCRIPT FROM THE DIRECTORY NOW!<br>CLEAR THE SYMFONY-CACHE, e.g. with Contao Manager<br>";

