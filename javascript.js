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


var $win = $(window),
    w = 0,h = 0,
    rgb = [],
    getWidth = function() {
        w = $win.width();
        h = $win.height();
    };

$win.resize(getWidth).mousemove(function(e) {

    rgb = [
        Math.round(e.pageX/w * 255 + 10),
        Math.round(e.pageY/h * 255 + 100),
        250
    ];

    $('h1').css('background','rgb('+rgb.join(',')+')');

}).resize();
