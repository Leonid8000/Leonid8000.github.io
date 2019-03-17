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

//toggle
$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('.menu').toggleClass('active');
    })
});

//GoogleMap
function initMap() {
    var element = document.getElementById('map');
    var options = {
        zoom: 17,
        center :{lat:47.8182542, lng:35.1645701}
    };
    var myMap = new google.maps.Map(element, options);
    var marker = new google.maps.Marker({
        position: {lat:47.8182542, lng:35.1645701},
        map: myMap

    });
}

// form focus
$('.input').focus(function () {
    $(this).parent().addClass('focus');
}).blur(function () {
    if($(this).val() === ''){
        $(this).parent().removeClass('focus');
    }
});
