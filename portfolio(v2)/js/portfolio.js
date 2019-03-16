/**
 * Created by leonid on 14.03.19.
 */
//preloader
function preloader() {
    $(() => {

        setInterval(() => {

            let p =$('.preloader');

            p.css('opacity', 0);
            $('.preloader').css('z-index', 0);
            $('.preloader').css('height', 0);


        }, 1000);
    });
}
preloader();

// filter
$(document).ready(function(){
    $('.button').click(function () {
        let value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.filter').show('1000');
        }else{
            $('.filter').not('.'+value).hide('1000');
            $('.filter').filter('.'+value).show('1000');
        }
    })
});

//toggle
$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('.menu').toggleClass('active');
    })
});
//add active class
$('ul .button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});
