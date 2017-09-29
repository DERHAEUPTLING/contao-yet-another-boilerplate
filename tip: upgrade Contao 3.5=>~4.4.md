# Sheat Cheat upgrade Contao 3.5 to Contao 4

## copy files
* `/files`
* `/system/config/dcaconfig.php`
* `/system/config/langconfig.php`
* `/templates`



## after installation
* file manager -> synchronize
* make needed /files/ subfolders public
* fix templates 
  * mod_nav: `<span>` became `<strong>`
  * form submit: `<input>`became `<button>`
  * TinyMCE: `files/tinymce.css` and the folder `files/tiny_templates`. If you want to use the feature, please adjust the TinyMCE config file, which is now a template (e.g. `be_tinyMCE.html5`).
* individual image captions have to be activated again, per image by checkbox
* settings -> Default access rights
* site structure -> page -> caching 
(has been removed form settings) 
* .htaccess
If server is run on Apache the .htaccess file should be updated.
Default contao 4 .htaccess already contains rewrites – do not overwrite them.
consider added further rules like caching, gzip, ...
