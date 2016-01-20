<?php

//  HTML in Überschriften Titeln
    $GLOBALS['TL_DCA']['tl_content']['fields']['headline']['eval']['allowHtml'] = true;
    $GLOBALS['TL_DCA']['tl_page']['fields']['title']['eval']['allowHtml'] = true;
    $GLOBALS['TL_DCA']['tl_article']['fields']['title']['eval']['allowHtml'] =true;
    $GLOBALS['TL_DCA']['tl_content']['fields']['headline']['eval']['allowHtml'] = true;
    $GLOBALS['TL_DCA']['tl_news']['fields']['headline']['eval']['allowHtml'] = true;
    $GLOBALS['TL_DCA']['tl_calendar_events']['fields']['title']['eval']['allowHtml'] = true;
    $GLOBALS['TL_DCA']['tl_calendar']['fields']['title']['eval']['allowHtml'] = true;




// tinyMCE
    $GLOBALS['TL_DCA']['tl_content']['fields']['text']['eval']['rte'] = 'tinyMCE_custom';
    $GLOBALS['TL_DCA']['tl_news']['fields']['teaser']['eval']['rte'] = 'tinyMCE_custom';
    $GLOBALS['TL_DCA']['tl_news']['fields']['text']['eval']['rte'] = 'tinyMCE_custom';
    $GLOBALS['TL_DCA']['tl_calendar_events']['fields']['teaser']['eval']['rte'] = 'tinyMCE_custom';
    $GLOBALS['TL_DCA']['tl_calendar_events']['fields']['details']['eval']['rte'] = 'tinyMCE_custom';
    $GLOBALS['TL_DCA']['tl_newsletter']['fields']['teaser']['eval']['rte'] = 'tinyMCE_custom';
    $GLOBALS['TL_DCA']['tl_newsletter']['fields']['text']['eval']['rte'] = 'tinyMCE_custom';
    $GLOBALS['TL_DCA']['tl_faq']['fields']['answer']['eval']['rte'] = 'tinyMCE_custom';
    $GLOBALS['TL_DCA']['tl_form_field']['fields']['text']['eval']['rte'] = 'tinyMCE_custom';
    $GLOBALS['TL_DCA']['tl_comments']['fields']['comment']['eval']['rte'] = 'tinyMCE_custom';
    $GLOBALS['TL_DCA']['tl_article']['fields']['teaser']['eval']['rte'] = 'tinyMCE_custom';

// tinyMCE Newsletter
// $GLOBALS['TL_DCA']['tl_newsletter']['fields']['content']['eval']['rte'] = 'tinyNews_custom';


// Narrow headlines
    $GLOBALS['TL_DCA']['tl_content']['fields']['headline']['options'] = array('h2', 'h3','h1');


// preset image Values
// $GLOBALS['TL_DCA']['tl_content']['fields']['size']['default'] = array(480);
// $GLOBALS['TL_DCA']['tl_content']['fields']['floating']['default'] = array('right');

// $GLOBALS['TL_DCA']['tl_calendar_events']['fields']['size']['default'] = array(480);
// $GLOBALS['TL_DCA']['tl_calendar_events']['fields']['floating']['default'] = array('right');

// $GLOBALS['TL_DCA']['tl_news']['fields']['size']['default'] = array(480);
// $GLOBALS['TL_DCA']['tl_news']['fields']['floating']['default'] = array('right');


// Remove the space fields
    unset($GLOBALS['TL_DCA']['tl_article']['fields']['space']);
    unset($GLOBALS['TL_DCA']['tl_content']['fields']['space']);
    unset($GLOBALS['TL_DCA']['tl_module'] ['fields']['space']);

// Remove the image margin fields
    unset($GLOBALS['TL_DCA']['tl_article']['fields']['imagemargin']);
    unset($GLOBALS['TL_DCA']['tl_content']['fields']['imagemargin']);
    unset($GLOBALS['TL_DCA']['tl_module']['fields']['imagemargin']);
    unset($GLOBALS['TL_DCA']['tl_news']['fields']['imagemargin']);
    unset($GLOBALS['TL_DCA']['tl_calendar_events']['fields']['imagemargin']);

// Sets the default content element
// $GLOBALS['TL_DCA']['tl_content']['fields']['type']['default'] = 'headline';

// Sets the default form field
// $GLOBALS['TL_DCA']['tl_form_field']['fields']['type']['default'] = 'hidden';
