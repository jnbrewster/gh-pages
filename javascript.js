$(document).ready(function() {

  animateDiv();
});

function makeNewPosition() {

  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 1;
  var w = $(window).width() - 2;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh,nw];
}

function animateDiv() {

  var newq = makeNewPosition();
  var oldq = $('.bug').offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);

  $('.bug').animate({ top: newq[0], left: newq[1] }, speed, function(){
    animateDiv();
  });
}

function calcSpeed(prev, next) {
var x = Math.abs(prev[1] - next[1]);
var y = Math.abs(prev[0] - next[0]);

var greatest = x > y ? x : y;

var speedModifier = 0.05;

var speed = Math.ceil(greatest/speedModifier);

return speed;
}


// Change colors of h1 div
var $win = $(window),
w = 0,h = 0,
rgb = [],
getWidth = function() {
  w = $win.width();
  h = $win.height();
};

$win.resize(getWidth).mousemove(function(e) {

  rgb = [
    Math.round(e.pageY/h * 127.5 + 97.5),
    Math.round(e.pageY/h * 127.5 + 155.5),
    Math.round(e.pageX/w * 127.5 + 220)
    ];

    $('h1').css('background','rgb('+rgb.join(',')+')');

  }).resize();

  // scrolling
  $('body').scrollspy({
    target: '#mainnav',
    offset: 000
  });
  /* CSS Tricks smooth scrolling : http://css-tricks.com/snippets/jquery/smooth-scrolling/ */
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });








  // $('.awesome-tooltip').tooltip({
  //   placement: 'left'
  // });
  // $('body').scrollspy({
  //   target: '#mainnav',
  //   offset: 000
  // });
  // /* CSS Tricks smooth scrolling : http://css-tricks.com/snippets/jquery/smooth-scrolling/ */
  // $('a[href*=#]:not([href=#])').click(function() {
  //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //     if (target.length) {
  //       $('html, body').animate({
  //         scrollTop: target.offset().top
  //       }, 500);
  //       return false;
  //     }
  //   }
  // });
