<?php

/**
 * Merger² - Module Merger for Contao Open Source CMS
 *
 * @copyright 2013,2014 bit3 UG
 * @author    Tristan Lins <tristan.lins@bit3.de>
 * @link      http://bit3.de
 * @package   bit3/contao-merger2
 * @license   LGPL-3.0+
 */


/**
 * Register the templates
 */
TemplateLoader::addFiles(array
(
	'merger_default' => 'system/modules/merger2/templates',
	'mod_merger2'    => 'system/modules/merger2/templates',
));

require_once(TL_ROOT . '/system/modules/merger2/classes/vendor/autoload.php');
