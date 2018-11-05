<?php
 
/** Some extra BE CSS and JS */
if(TL_MODE == 'BE')
{
  $GLOBALS['TL_CSS'][]        = 'layout/css/be.css';
  #$GLOBALS['TL_JAVASCRIPT'][] = 'layout/js/be.js';
}