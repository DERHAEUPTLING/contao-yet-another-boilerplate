<?php

/**
 * Contao Open Source CMS
 *
 * @copyright  Andreas Isaak 2013
 * @package    contao-boilerplate
 * @license    GNU/LGPL
 * @filesource
 *
 * @thanks     Tristan Lins <tristan.lins@bit3.de>
 *
 */

// Database settings
$GLOBALS['TL_CONFIG']['dbPconnect']                 = true;
$GLOBALS['TL_CONFIG']['dbCharset']                  = 'UTF8';

// Localisation settings
$GLOBALS['TL_CONFIG']['dateFormat']                 = 'd.m.Y';
$GLOBALS['TL_CONFIG']['datimFormat']                = 'd.m.Y H:i';
$GLOBALS['TL_CONFIG']['timeZone']                   = 'Europe/Berlin';

// URL settings
$GLOBALS['TL_CONFIG']['rewriteURL']                 = true;
$GLOBALS['TL_CONFIG']['urlSuffix']                  = '';
$GLOBALS['TL_CONFIG']['folderAlias']                = true;
$GLOBALS['TL_CONFIG']['folderUrl']                  = true;
$GLOBALS['TL_CONFIG']['languageAlias']              = 'none';
$GLOBALS['TL_CONFIG']['templateFiles']              = 'tpl,html5,xhtml,mobile';

// Upload settings
$GLOBALS['TL_CONFIG']['maxFileSize']                = 204800000;
$GLOBALS['TL_CONFIG']['imageWidth']                 = 4000;
$GLOBALS['TL_CONFIG']['imageHeight']                = 4000;

// Image processing settings
$GLOBALS['TL_CONFIG']['gdMaxImgWidth']              = PHP_INT_MAX;
$GLOBALS['TL_CONFIG']['gdMaxImgHeight']             = PHP_INT_MAX;
$GLOBALS['TL_CONFIG']['jpgQuality']                 = 90;

$GLOBALS['TL_CONFIG']['repository_unsafe_catalog']  = true;
$GLOBALS['TL_CONFIG']['minifyMarkup']               = true;
$GLOBALS['TL_CONFIG']['gzipScripts']                = true;
$GLOBALS['TL_CONFIG']['bypassCache']                = true;
$GLOBALS['TL_CONFIG']['doNotCollapse']              = true;
