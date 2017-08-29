<?PHP

/**
 * HTML in Überschriften Titeln 
 */
$GLOBALS['TL_DCA']['tl_content']['fields']['headline']['eval']['allowHtml'] = true;
$GLOBALS['TL_DCA']['tl_page']['fields']['title']['eval']['allowHtml'] = true;
$GLOBALS['TL_DCA']['tl_article']['fields']['title']['eval']['allowHtml'] =true;
$GLOBALS['TL_DCA']['tl_content']['fields']['headline']['eval']['allowHtml'] = true;
$GLOBALS['TL_DCA']['tl_news']['fields']['headline']['eval']['allowHtml'] = true;
$GLOBALS['TL_DCA']['tl_calendar_events']['fields']['title']['eval']['allowHtml'] = true;
$GLOBALS['TL_DCA']['tl_calendar']['fields']['title']['eval']['allowHtml'] = true;


/**
 * tinyMCE 
 */
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


/**
 * tinyMCE Newsletter 
 */
// $GLOBALS['TL_DCA']['tl_newsletter']['fields']['content']['eval']['rte'] = 'tinyNews_custom';



/**
 * Narrow headlines 
 */
$GLOBALS['TL_DCA']['tl_content']['fields']['headline']['options'] = array('h1', 'h2','h3');



/**
 * preset image Values 
 */
$GLOBALS['TL_DCA']['tl_content']['fields']['size']['default'] = array(480);
$GLOBALS['TL_DCA']['tl_content']['fields']['floating']['default'] = array('right');

$GLOBALS['TL_DCA']['tl_calendar_events']['fields']['size']['default'] = array(480);
$GLOBALS['TL_DCA']['tl_calendar_events']['fields']['floating']['default'] = array('right');

$GLOBALS['TL_DCA']['tl_news']['fields']['size']['default'] = array(480);
$GLOBALS['TL_DCA']['tl_news']['fields']['floating']['default'] = array('right');


/** 
 *  Remove the space fields
 */
unset($GLOBALS['TL_DCA']['tl_article']['fields']['space']);
unset($GLOBALS['TL_DCA']['tl_content']['fields']['space']);
unset($GLOBALS['TL_DCA']['tl_module'] ['fields']['space']);


/**
 *  Remove the image margin fields
 */
unset($GLOBALS['TL_DCA']['tl_article']['fields']['imagemargin']);
unset($GLOBALS['TL_DCA']['tl_content']['fields']['imagemargin']);
unset($GLOBALS['TL_DCA']['tl_module']['fields']['imagemargin']);
unset($GLOBALS['TL_DCA']['tl_news']['fields']['imagemargin']);
unset($GLOBALS['TL_DCA']['tl_calendar_events']['fields']['imagemargin']);


/**
 *  Sets the default content element 
 */
$GLOBALS['TL_DCA']['tl_content']['fields']['type']['default'] = 'headline';


/**
 *  Sets the default form field
 */
$GLOBALS['TL_DCA']['tl_form_field']['fields']['type']['default'] = 'hidden';




/**
 * Show article id
 */
$GLOBALS['TL_DCA']['tl_article']['list']['label']['fields'][] = 'id';
$GLOBALS['TL_DCA']['tl_article']['list']['label']['format'] = '%s <span style="color: #A3A3A3; padding-left: 3px;">[%s, ID: %s]</span>';






/*
 * remove unwanted CEs
 */


/* texts */
unset($GLOBALS['TL_CTE']['texts']['headline']);
unset($GLOBALS['TL_CTE']['texts']['text']);
unset($GLOBALS['TL_CTE']['texts']['html']);
unset($GLOBALS['TL_CTE']['texts']['list']);
unset($GLOBALS['TL_CTE']['texts']['table']);
unset($GLOBALS['TL_CTE']['texts']['code']);
unset($GLOBALS['TL_CTE']['texts']['markdown']);


/* accordion */
unset($GLOBALS['TL_CTE']['accordion']['accordionSingle']);
unset($GLOBALS['TL_CTE']['accordion']['accordionStart']);
unset($GLOBALS['TL_CTE']['accordion']['accordionStop']);



/* slider */
unset($GLOBALS['TL_CTE']['slider']['sliderStart']);
unset($GLOBALS['TL_CTE']['slider']['sliderStop']);


/* links */
unset($GLOBALS['TL_CTE']['links']['hyperlink']);
unset($GLOBALS['TL_CTE']['links']['toplink']);


/* media */
unset($GLOBALS['TL_CTE']['media']['image']);
unset($GLOBALS['TL_CTE']['media']['gallery']);
unset($GLOBALS['TL_CTE']['media']['youtube']);
unset($GLOBALS['TL_CTE']['media']['player']);


/* files */
unset($GLOBALS['TL_CTE']['files']['download']);
unset($GLOBALS['TL_CTE']['files']['downloads']);


/* includes */
unset($GLOBALS['TL_CTE']['includes']['article']);
unset($GLOBALS['TL_CTE']['includes']['alias']);
unset($GLOBALS['TL_CTE']['includes']['form']);
unset($GLOBALS['TL_CTE']['includes']['module']);
unset($GLOBALS['TL_CTE']['includes']['teaser']);
unset($GLOBALS['TL_CTE']['includes']['comments']);







/**
 *  Article -> show id
 */
$GLOBALS['TL_DCA']['tl_article']['list']['label']['fields'][] = 'id';
$GLOBALS['TL_DCA']['tl_article']['list']['label']['format'] = '%s <span style="color: #A3A3A3; padding-left: 3px;">[%s, ID: %s]</span>';



/**
 *  News list -> show ID
 *
 */
$GLOBALS['TL_DCA']['tl_news']['list']['sorting']['child_record_callback'] = function ($arrRow)
    {
        return '<div class="tl_content_left">'
                .'<span style="color:#b3b3b3;padding-right:3px">[ID: '
                .$arrRow['id']
                .']</span>'
                .$arrRow['headline'] 
                .' <span style="color:#b3b3b3;padding-left:3px">[' 
                .Date::parse(Config::get('datimFormat'), $arrRow['date'])
                .']</span></div>';
    };




/**
 *  News list -> show ID & news_categories category
 *
 */    
$GLOBALS['TL_DCA']['tl_news']['list']['sorting']['child_record_callback'] = function (array $row) {
    $categories = [];

    if (($models = \NewsCategoryModel::findMultipleByIds(deserialize($row['categories'], true), ['order' => 'title'])) !== null) {
        $categories = $models->fetchEach('title');
    }

    return sprintf(
        '<div class="tl_content_left">
            <span style="color:#b3b3b3;padding-right:3px">[ID: %s]</span>
            %s
            <span style="color:#b3b3b3;padding-left:3px">[%s]</span>
            <span style="float:right">%s</span>
            </div>',
        $row['id'],
        $row['headline'],
        \Contao\Date::parse(\Contao\Config::get('datimFormat'), $row['date']),
        (count($categories) > 0) ? ('[' . implode(', ', $categories) . ']') : ''
    );
};



/**
 *  CE -> show ID/CSS
 *
 */
 $callback = $GLOBALS['TL_DCA']['tl_content']['list']['sorting']['child_record_callback'];
 
 if (is_array($callback)) {
     $GLOBALS['TL_DCA']['tl_content']['list']['sorting']['child_record_callback'] = function (array $row) use ($callback) {
         $cssId = deserialize($row['cssID'], true);
         if ($cssId[0] || $cssId[1]) {
             $cssId[0] = $cssId[0] ? ('#' . $cssId[0]) : '';
             $cssId[1] = $cssId[1] ? ('.' . $cssId[1]) : '';
             $replacement = sprintf('<span style="float:right;color:#aaaaaa;padding-left:3px;">[%s]</span>', implode(' ', array_filter($cssId)));
         }
         $buffer = \Contao\System::importStatic($callback[0])->{$callback[1]}($row);
         $buffer = preg_replace('/<\/div>/', $replacement . '</div>', $buffer, 1);
         return $buffer;
     };
 }