/* Contao Open Source CMS, (C) 2005-2013 Leo Feyer, LGPL license */
var tmo=86400;
setTimeout(function(){
    window.jQuery?jQuery.ajax("system/cron/cron.txt",
        {complete:function(e){var t=e.responseText||0;parseInt(t)<Math.round(+(new Date)/1e3)-tmo&&jQuery.ajax("system/cron/cron.php")}}):window.MooTools&&(new Request({url:"system/cron/cron.txt",onComplete:function(e){e||(e=0),parseInt(e)<Math.round(+(new Date)/1e3)-tmo&&(new Request({url:"system/cron/cron.php"})).get()}})).get()},5e3);