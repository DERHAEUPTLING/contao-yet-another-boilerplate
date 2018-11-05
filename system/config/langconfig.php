<?php if (!defined('TL_ROOT')) die('You can not access this file directly!');

/**
 * Contao Open Source CMS
 * Copyright (C) 2005-2010 Leo Feyer
 *
 * Formerly known as TYPOlight Open Source CMS.
 *
 * This program is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation, either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this program. If not, please visit the Free
 * Software Foundation website at <http://www.gnu.org/licenses/>.
 *
 * PHP version 5
 * @copyright  Leo Feyer 2005-2010
 * @author     Leo Feyer <http://www.contao.org>
 * @package    Config
 * @license    LGPL
 * @filesource
 */

// Entferne das lästige Wort "(Kopie)"
$GLOBALS['TL_LANG']['MSC']['copyOf'] = '%s';



if ($GLOBALS['TL_LANGUAGE'] == 'de')
{
    // Ein Beispiel wie man einen Core-Sprachtext überschreibt
    $GLOBALS['TL_LANG']['MSC']['more'] = 'Weiter lesen';

    // So definiert man eigene Sprachtexte die man überall verwenden kann
    #GLOBALS['TL_LANG']['tl_custom']['example'] = 'Ein eigener Sprachtext';
    #$GLOBALS['TL_LANG']['custom']['pagination'] = "%s - %s von %s Rezepten";
    #$GLOBALS['TL_LANG']['tl_member']['company']['0'] = "Redaktion";
}
elseif ($GLOBALS['TL_LANGUAGE'] == 'en')
{

}

?>
