<?php

//  HTML in Überschriften Titeln
    $GLOBALS['TL_DCA']['tl_content']['fields']['headline']['eval']['allowHtml'] = true;
    $GLOBALS['TL_DCA']['tl_page']['fields']['title']['eval']['allowHtml'] = true;
    $GLOBALS['TL_DCA']['tl_article']['fields']['title']['eval']['allowHtml'] =true;
    $GLOBALS['TL_DCA']['tl_content']['fields']['headline']['eval']['allowHtml'] = true;
    $GLOBALS['TL_DCA']['tl_news']['fields']['headline']['eval']['allowHtml'] = true;
    $GLOBALS['TL_DCA']['tl_calendar_events']['fields']['title']['eval']['allowHtml'] = true;
    $GLOBALS['TL_DCA']['tl_calendar']['fields']['title']['eval']['allowHtml'] = true;



// Narrow headlines
    $GLOBALS['TL_DCA']['tl_content']['fields']['headline']['options'] = array('h2', 'h3','h1');


// preset image Values
// $GLOBALS['TL_DCA']['tl_content']['fields']['size']['default'] = array(480);
// $GLOBALS['TL_DCA']['tl_content']['fields']['floating']['default'] = array('right');

// $GLOBALS['TL_DCA']['tl_calendar_events']['fields']['size']['default'] = array(480);
// $GLOBALS['TL_DCA']['tl_calendar_events']['fields']['floating']['default'] = array('right');

// $GLOBALS['TL_DCA']['tl_news']['fields']['size']['default'] = array(480);
// $GLOBALS['TL_DCA']['tl_news']['fields']['floating']['default'] = array('right');



// Sets the default content element
// $GLOBALS['TL_DCA']['tl_content']['fields']['type']['default'] = 'headline';

// Sets the default form field
// $GLOBALS['TL_DCA']['tl_form_field']['fields']['type']['default'] = 'hidden';





/*
 * remove unwanted CEs
 */


// texts

// unset($GLOBALS['TL_CTE']['texts']['headline']);
// unset($GLOBALS['TL_CTE']['texts']['text']);
// unset($GLOBALS['TL_CTE']['texts']['html']);
// unset($GLOBALS['TL_CTE']['texts']['list']);
// unset($GLOBALS['TL_CTE']['texts']['table']);
// unset($GLOBALS['TL_CTE']['texts']['code']);
// unset($GLOBALS['TL_CTE']['texts']['markdown']);


// accordion

// unset($GLOBALS['TL_CTE']['accordion']['accordionSingle']);
// unset($GLOBALS['TL_CTE']['accordion']['accordionStart']);
// unset($GLOBALS['TL_CTE']['accordion']['accordionStop']);



// slider

// unset($GLOBALS['TL_CTE']['slider']['sliderStart']);
// unset($GLOBALS['TL_CTE']['slider']['sliderStop']);


// links

// unset($GLOBALS['TL_CTE']['links']['hyperlink']);
// unset($GLOBALS['TL_CTE']['links']['toplink']);


// media

// unset($GLOBALS['TL_CTE']['media']['image']);
// unset($GLOBALS['TL_CTE']['media']['gallery']);
// unset($GLOBALS['TL_CTE']['media']['youtube']);
// unset($GLOBALS['TL_CTE']['media']['player']);


// files

// unset($GLOBALS['TL_CTE']['files']['download']);
// unset($GLOBALS['TL_CTE']['files']['downloads']);


// includes

// unset($GLOBALS['TL_CTE']['includes']['article']);
// unset($GLOBALS['TL_CTE']['includes']['alias']);
// unset($GLOBALS['TL_CTE']['includes']['form']);
// unset($GLOBALS['TL_CTE']['includes']['module']);
// unset($GLOBALS['TL_CTE']['includes']['teaser']);
// unset($GLOBALS['TL_CTE']['includes']['comments']);
