$(document).ready(function(){


//                                                             input.Placeholder
// -----------------------------------------------------------------------------
    if ($.browser.msie && $.browser.version.substr(0,1)<10)
    {
        $("input, textarea").each(function(){
            if($(this).val()=="" && $(this).attr("placeholder")!=""){
                $(this).val($(this).attr("placeholder"));
                $(this).focus(function(){
                    if($(this).val()==$(this).attr("placeholder")) $(this).val("");
                });
                $(this).blur(function(){
                    if($(this).val()=="") $(this).val($(this).attr("placeholder"));
                });
            }
        });

    }





//                                                             input.Textarea
// -----------------------------------------------------------------------------
   $('textarea').autogrow();

//                                                                    Accordion
// -----------------------------------------------------------------------------
    $( ".accordion" ).accordion({
        autoHeight: false
    });

//                                                         News List Clickable
// -----------------------------------------------------------------------------
    $(".news-list-view .article").click(function () {
        var url = $("h4 a", this).attr("href");
        //console.log(url);
        window.location = url;
    });


//                                                         Slideshow
// -----------------------------------------------------------------------------
    $("#slideshow-source img")
        .each(function()
        {
            //obj = $(this).attr('href');
            //$('#slider-projects')
            //    .append('<li class="panel"><img src="' + obj + '" width="940" height="442"/></li>');
            //console.log(obj);

            obj = $(this);
            $('#slideshow').append(obj);
            console.log(obj);
        });

    $('#slideshow')
        .after('<div id="nav">')
        .cycle({
            fx:     'fade',
            speed:   300,
            timeout: 3000,
            next:   '#slideshow',
            pause:   1,
            pager:  '#nav'
        });

//                                                         Fancybox
// -----------------------------------------------------------------------------
    $('a[rel*="lightbox"]').fancybox({
        wrapCSS    : 'fancybox-custom',
        openEffect : 'elastic', //Animation effect ('elastic', 'fade' or 'none') for each transition type
        openSpeed  : 150,
        closeEffect : 'elastic',
        closeSpeed  : 150,
        closeClick : true,

        //arrows: true,
        nextEffect: 'fade', //Animation effect ('elastic', 'fade' or 'none') for each transition type
        prevEffect: 'fade',

        helpers : {
            title : {
                type : 'inside'
            },
            overlay : {
                css : {
                    'background-color' : '#333'
                }
            }
        }

    });
}); // End: $().ready()



$(window).load(function() {
//                                                     remove preload after load
// -----------------------------------------------------------------------------
    $('body').removeClass('preload');
});