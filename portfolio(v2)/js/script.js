"use strict"

// baffle.js
const text = baffle(".data");
text.set({
    characters: '>/▒ ░█<▓▒ /▒█▒▒░░▓█▓ ░>▓ ░▓░▒ >█░█░▒ ',
    speed: 120
});
text.start();
text.reveal(3000);

//toggle
$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('.menu').toggleClass('active');
    })
});

// progress bar
$(document).ready(function(){
    $('.dws-progress-bar').circularProgress({
        width: '220px',
        height: '220px',
        line_width: 15,
        color: 'black',
        percent: 0,
    }).circularProgress('animate', 100, 500);
});

// preloader L
$(window).on('load', function(){
        let $preloaderL = $('#preloader_progress');
        $preloaderL.delay(1000).fadeOut('slow');
});

