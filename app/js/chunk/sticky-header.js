/**
 * AMD Module + commonjs dependency management
 *
 */

define(function(require) {
	/**
	 * static inclues
	 *
	 */
    var $ = require('jquery');

	

	var elSelector		= '.header',
		elClassHidden	= 'header--hidden',
		elClassNarrow	= 'header--narrow',
		elNarrowOffset	= 50,
		throttleTimeout	= 200,
		$element		= $( elSelector );

	if( !$element.length ) return true;

	var $window			= $( window ),
		wHeight			= 0,
		wScrollCurrent	= 0,
		wScrollBefore	= 0,
		wScrollDiff		= 0,
		$document		= $( document ),
		dHeight			= 0,

		throttle = function( delay, fn )
		{
			var last, deferTimer;
			return function()
			{
				var context = this, args = arguments, now = +new Date;
				if( last && now < last + delay )
				{
					clearTimeout( deferTimer );
					deferTimer = setTimeout( function(){ last = now; fn.apply( context, args ); }, delay );
				}
				else
				{
					last = now;
					fn.apply( context, args );
				}
			};
		};

	$window.on( 'scroll', throttle( throttleTimeout, function()
	{
		dHeight			= $document.height();
		wHeight			= $window.height();
		wScrollCurrent	= $window.scrollTop();
		wScrollDiff		= wScrollBefore - wScrollCurrent;

		$element.toggleClass( elClassNarrow, wScrollCurrent > elNarrowOffset ); // toggles "narrow" classname

		if( wScrollCurrent <= 0 ) // scrolled to the very top; element sticks to the top
			$element.removeClass( elClassHidden );

		else if( wScrollDiff > 0 && $element.hasClass( elClassHidden ) ) // scrolled up; element slides in
			$element.removeClass( elClassHidden );

		else if( wScrollDiff < 0 ) // scrolled down
		{
			if( wScrollCurrent + wHeight >= dHeight && $element.hasClass( elClassHidden ) ) // scrolled to the very bottom; element slides in
				$element.removeClass( elClassHidden );

			else // scrolled down; element slides out
				$element.addClass( elClassHidden );
		}

		wScrollBefore = wScrollCurrent;
	}));





});










