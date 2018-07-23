define([], function () {
    /**
     * Initialize
     * @returns {void}
     */
    var init = function () {
        // Load the SDK asynchronously
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s);
          js.id = id;
          js.src = "//connect.facebook.net/de_DE/all.js#xfbml=1&appId=291237180997765";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    };

    return {
        init: init
    };
});
