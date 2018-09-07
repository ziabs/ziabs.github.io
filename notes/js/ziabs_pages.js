;(function () {	
    'use strict';
// REDIRECT
var path = window.location.pathname;
var pages=path.split("/pages/");
if(pages.length>1){ 
    var your_note=path.split('/');
    (function() {
        var script = document.createElement('script');
        script.src = 'http://ziabs.com/notes/js/jquery.min.js';
        script.type = 'text/javascript';
        script.onload = function() {
            var $ = window.jQuery;
            $.each(your_note, function( index, value ) {
            if(new RegExp('^\.*html$').test(value)){
                var mypage=value.replace('%2f','');
                window.location.href='http://www.ziabs.com/notes/#'+mypage;
            }
        });
    };
    document.getElementsByTagName("head")[0].appendChild(script);
    })();
}
//# YOUR PAGES GOES HERE
    $( "#how-to-pass-a-variable-by-value-to-async-callbacks-in-javascript" ).load( "pages/how-to-pass-a-variable-by-value-to-async-callbacks-in-javascript.html" );
    $( "#how-to-create-swap-on-centos7" ).load( "pages/how-to-create-swap-on-centos7.html" );
}());    