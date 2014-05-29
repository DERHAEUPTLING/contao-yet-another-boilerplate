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
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['backup_text']         = 'SQL-Backup der Contao-Datenbank als Download';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['button_caption']      = 'SQL-Backup starten';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['button_title']        = 'SQL-Backup der Datenbank starten';

$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_text']    = 'Erstellt ein Website-Template (auch Frontend-Template genannt), das mit<br />dem InstallTool in einer anderen Contao-Installation importiert werden kann.';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_sqltxt']  = '   ';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_caption'] = 'Website-Template erstellen';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_button_title']     = 'Erstellung eines Website-Templates starten';

$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_files']   = 'Neue Dateien:';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_module']  = 'Folgende Module müssen installiert sein:';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_none']    = 'keine';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_inst']    = 'Installation:';

$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl10']   = '1. Standard-Paket Contao in der Domain aufbauen.';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl11']   = '   (z.B. ZIP entpacken und FTP-Upload auf den Webspace)';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl12']   = '   Noch nicht gleich das InstallTool aufrufen, erst als Punkt 5!';

$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl20']   = '2. Installation aller oben gelisteten Extentions.';

$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl30']   = '3. Speichern Sie dieses Website-Template im Pfad /templates/ ab.';

$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl40']   = '4. Speichern Sie alle für das Website-Template notwendige Dateien';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl41']   = '   im Pfad /templates/ und /files/ oder Subdirectories (genau';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl42']   = '   wie bei der Template-Erstellung).';

$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl50']   = '5. Führen Sie jetzt das InstallTool von Contao aus und';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_anl51']   = '   importieren das Website-Template.';

$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_txt1']    = 'Website-Template erstellen';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_txt2']    = 'Erstelle Website-Template ...';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_txt3']    = 'Template fertig erstellt.';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_txt4']    = 'Fenster schließen';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_txt5']    = 'Bitte lesen Sie die Informationen in der TXT-Datei.';

$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_cron1']   = 'AutoBackupDB als Cron-Job eintragen';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_cron2']   = 'AutoBackupDB ist INAKTIV im Cron eingetragen';
$GLOBALS['TL_LANG']['MSC']['tl_backupdb']['ws_template_cron3']   = 'AutoBackupDB ist AKTIV im Cron eingetragen';

?>