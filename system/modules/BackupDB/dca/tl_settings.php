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
 * @copyright  Softleister 2007-2014
 * @author     Softleister <http://www.softleister.de>
 * @package    BackupDB
 * @license    LGPL
 * @filesource
 */

/**
 * System configuration
 */
$GLOBALS['TL_DCA']['tl_settings']['fields']['backupdb_saveddb'] = array
		(
			'label'                   => &$GLOBALS['TL_LANG']['tl_settings']['backupdb_saveddb'],
			'inputType'               => 'text',
			'eval'                    => array('tl_class'=>'w50')
		);

$GLOBALS['TL_DCA']['tl_settings']['fields']['AutoBackupCount'] = array
		(
			'label'                   => &$GLOBALS['TL_LANG']['tl_settings']['AutoBackupCount'],
			'inputType'               => 'text',
			'eval'                    => array('rgxp'=>'digit', 'nospace'=>true, 'tl_class'=>'w50')
		);
		
$GLOBALS['TL_DCA']['tl_settings']['fields']['WsTemplatePath'] = array
		(
			'label'                   => &$GLOBALS['TL_LANG']['tl_settings']['WsTemplatePath'],
			'inputType'               => 'text',
			'eval'                    => array('nospace'=>'true', 'trailingSlash'=>false, 'tl_class'=>'w50')
		);

$GLOBALS['TL_DCA']['tl_settings']['fields']['backupdb_blacklist'] = array
		(
			'label'                   => &$GLOBALS['TL_LANG']['tl_settings']['backupdb_blacklist'],
			'inputType'               => 'text',
			'eval'                    => array('tl_class'=>'long')
		);

$GLOBALS['TL_DCA']['tl_settings']['fields']['backupdb_sendmail'] = array
		(
			'label'                   => &$GLOBALS['TL_LANG']['tl_settings']['backupdb_sendmail'],
			'inputType'               => 'checkbox',
			'eval'                    => array('tl_class'=>'w50 clr')
		);

$GLOBALS['TL_DCA']['tl_settings']['fields']['backupdb_attmail'] = array
		(
			'label'                   => &$GLOBALS['TL_LANG']['tl_settings']['backupdb_attmail'],
			'inputType'               => 'checkbox',
			'eval'                    => array('tl_class'=>'w50')
		);

$GLOBALS['TL_DCA']['tl_settings']['fields']['backupdb_zip'] = array
		(
			'label'                   => &$GLOBALS['TL_LANG']['tl_settings']['backupdb_zip'],
			'inputType'               => 'checkbox',
			'eval'                    => array('tl_class'=>'w50 m12')
		);




$GLOBALS['TL_DCA']['tl_settings']['palettes']['default'] .= ';{backupdb_legend:hide},backupdb_blacklist,backupdb_saveddb,WsTemplatePath,backupdb_zip,AutoBackupCount,backupdb_sendmail,backupdb_attmail';


?>