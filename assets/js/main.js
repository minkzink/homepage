(function($) {
    "use strict";
    //when dom is ready
    $(document).ready(function(){

        // on scroll event start
        $(window).on('scroll', function() {
            if($(window).width() > 768){
                if ($(window).scrollTop() > 55) {
                    $('#navbar').addClass('navbar-bg');
                } else {
                    $('#navbar').removeClass('navbar-bg');
                }
            }
        });
        // on scroll event end

        //portfolio masonry start
        $('.portfolio-wrap').isotope({
            itemSelector: '.portfolio-item',
        });
        //portfolio masonry end

        //portfolio lightbox start
        $('.img-lightbox').venobox({
            spinner: 'double-bounce',
        });
        //portfolio lightbox end

        //animated progressbar start
        $('.progress-bar').each(function(){
            var width = $(this).data('percent');
            $(this).css({'transition': 'width 3s'});
            $(this).appear(function() {
                console.log('hello');
                $(this).css('width', width + '%');
            });
        });
        //animated progressbar end

        //testimonial carousel start
        $('.testimonial-carousel').owlCarousel({
            items: 1,
            autoplay: true,
            nav: false,
            loop:true,
            smartSpeed:1000,
            animateOut: 'fadeInDown',
            animateIn: 'fadeOutDown',
        });
        //testimonial carousel end

        // scroller start
        $('a.scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top -72
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
        $('body').scrollspy({ target: '#navbar', offset:72 })
        // scroller end

    });
    //dom ready end
var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);
})(jQuery);

