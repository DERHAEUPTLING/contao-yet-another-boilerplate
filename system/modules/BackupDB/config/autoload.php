<?php

/**
 * Contao Open Source CMS
 *
 * Copyright (c) 2005-2014 Leo Feyer
 *
 * @package BackupDB
 * @link    https://contao.org
 * @license http://www.gnu.org/licenses/lgpl-3.0.html LGPL
 */


/**
 * Register the classes
 */
ClassLoader::addClasses(array
(
	'BackupDbCommon' => 'system/modules/BackupDB/BackupDbCommon.php',
	'ModuleBackupDB' => 'system/modules/BackupDB/ModuleBackupDB.php',
));


/**
 * Register the templates
 */
TemplateLoader::addFiles(array
(
	'mod_backup_db' => 'system/modules/BackupDB/templates',
));
