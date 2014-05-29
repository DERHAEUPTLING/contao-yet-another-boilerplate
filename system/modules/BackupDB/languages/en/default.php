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
 * @copyright  Softleister 2007-2014 <info@softleister.de>
 * @author     Hagen Klemp
 * @package    BackupDB
 * @license    LGPL
 * @filesource
 */


/**
 * Miscellaneous
 */
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['backup_text']         = 'SQL Backup of Contao database as download';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['button_caption']      = 'Start SQL backup';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['button_title']        = 'Starts SQL backup of database';

$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_text']    = 'Created a website template (also known as frontend template) that<br />can be imported with the Contao install tool in another installation.';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_sqltxt']  = '   ';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_caption'] = 'Create website-template';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_button_title']     = 'Start to create website-template';

$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_files']   = 'New files:';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_module']  = 'The following modules must be installed:';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_none']    = 'none';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_inst']    = 'Installation:';

$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl10']   = '1. Install standard paket Contao in your domain.';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl11']   = '   (ex. extract ZIP and FTP upload to your webspace)';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl12']   = '   Don\'t use the InstallTool now, but as point 5!';

$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl20']   = '2. Installation of all listed extentions.';

$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl30']   = '3. Save this website-template in the path /templates/.';

$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl40']   = '4. Save all files needed for the website-template in path';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl41']   = '   /templates/ and /files/ or subdirectories (just like';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl42']   = '   in the template creation).';

$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl50']   = '5. Run the InstallTool of Contao now and import from';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl51']   = '   the website-template.';

$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_txt1']    = 'create website-template';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_txt2']    = 'Website-template creation ...';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_txt3']    = 'Template finished.';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_txt4']    = 'Close window';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_txt5']    = 'Please read the TXT file for informations.';

$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_cron1']   = 'Add AutoBackupDB to cron jobs';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_cron2']   = 'Cron job AutoBackupDB is DISABLED';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_cron3']   = 'Cron job AutoBackupDB ist ACTIVE';

?>