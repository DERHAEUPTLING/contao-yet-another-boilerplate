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
 * Front end modules
 */
$GLOBALS['FE_MOD']['miscellaneous']['Merger2'] = 'Bit3\Contao\Merger2\Module\ModuleMerger2';


/**
 * Merger2 functions
 */
$GLOBALS['MERGER2_FUNCTION']['language']      = 'Bit3\Contao\Merger2\StandardFunctions::language';
$GLOBALS['MERGER2_FUNCTION']['page']          = 'Bit3\Contao\Merger2\StandardFunctions::page';
$GLOBALS['MERGER2_FUNCTION']['root']          = 'Bit3\Contao\Merger2\StandardFunctions::root';
$GLOBALS['MERGER2_FUNCTION']['pageInPath']    = 'Bit3\Contao\Merger2\StandardFunctions::pageInPath';
$GLOBALS['MERGER2_FUNCTION']['depth']         = 'Bit3\Contao\Merger2\StandardFunctions::depth';
$GLOBALS['MERGER2_FUNCTION']['articleExists'] = 'Bit3\Contao\Merger2\StandardFunctions::articleExists';
$GLOBALS['MERGER2_FUNCTION']['children']      = 'Bit3\Contao\Merger2\StandardFunctions::children';
$GLOBALS['MERGER2_FUNCTION']['platform']      = 'Bit3\Contao\Merger2\StandardFunctions::platform';


if (version_compare(VERSION, '3', '<')) {
	spl_autoload_unregister('__autoload');
	require_once(TL_ROOT . '/system/modules/merger2/classes/vendor/autoload.php');
	spl_autoload_register('__autoload');

	$classes = array('Bit3\\Contao\\Merger2\\StandardFunctions','Bit3\\Contao\\Merger2\\Module\\ModuleMerger2','Bit3\\Contao\\Merger2\\Constraint\\Parser\\State','Bit3\\Contao\\Merger2\\Constraint\\Parser\\ParserException','Bit3\\Contao\\Merger2\\Constraint\\Parser\\Parser','Bit3\\Contao\\Merger2\\Constraint\\Parser\\InputToken','Bit3\\Contao\\Merger2\\Constraint\\Parser\\InputStreamException','Bit3\\Contao\\Merger2\\Constraint\\Parser\\InputStream','Bit3\\Contao\\Merger2\\Constraint\\Node\\VariableNode','Bit3\\Contao\\Merger2\\Constraint\\Node\\StringNode','Bit3\\Contao\\Merger2\\Constraint\\Node\\OrNode','Bit3\\Contao\\Merger2\\Constraint\\Node\\NotNode','Bit3\\Contao\\Merger2\\Constraint\\Node\\NodeInterface','Bit3\\Contao\\Merger2\\Constraint\\Node\\GroupNode','Bit3\\Contao\\Merger2\\Constraint\\Node\\ConjunctionNode','Bit3\\Contao\\Merger2\\Constraint\\Node\\CallNode','Bit3\\Contao\\Merger2\\Constraint\\Node\\BooleanNode','Bit3\\Contao\\Merger2\\Constraint\\Node\\AndNode');
	$cache = FileCache::getInstance('classes');
	foreach ($classes as $class) {
		if (!$cache->$class) {
			$cache->$class = true;
		}
	}
}
