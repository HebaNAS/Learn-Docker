// Import and initialize jquery
import $ from 'jquery';
import whatInput from 'what-input';
window.$ = $;

// Import and initialize foundation
import { Foundation } from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
$(document).foundation();

// Page transitions
import { TweenMax, TimelineMax, Power2, Expo, Circ, Power4 } from 'gsap';
import TweenDeck from './lib/tweendeck';

$.TweenDeck = TweenDeck;

// create a timeline
var tl = new TimelineMax();

// ---------------------------------------
// Add animation for each step
// ---------------------------------------

var i;

// INTRO
var intro = new TimelineMax();
var startButtons = document.getElementsByClassName('start-btn');
for (var i = 0, len = startButtons.length; i < len; i++) {
  startButtons[i].addEventListener('click', function() {
    intro.add(TweenMax.to($('#page-0'), 0, {
      immediateRender:false,
      css: { display: 'block' }
    }));
    intro.add(TweenMax.to($('#page-0'), 0.5, {
      xPercent: -100,
      onComplete: function() {
        $('#page-0').removeClass('is-current is-onTop');
        $('#page-1').addClass('is-current is-onTop');
        $('.breadcrumb-counter-nav-item').removeClass('current');
        $('#goto-1').addClass('current');
      }
    }));
    intro.add(TweenMax.fromTo($('#page-1'), 1, {
      xPercent: 100
    }, {
      xPercent: 0,
      ease: Circ.easeOut
    }));
    intro.add(TweenMax.to($('#page-1'), 1, {
      scale: 10,
      opacity: 0,
      delay: 1.5,
      onComplete: function() {
        $('#page-1').removeClass('is-current is-onTop');
        $('#page-2').addClass('is-current is-onTop');
        $('.breadcrumb-counter-nav-item').removeClass('current');
        $('#goto-2').addClass('current');
      }
    }));
    intro.add(TweenMax.fromTo($('#page-2'), 1, {
      xPercent: 100
    }, {
      xPercent: 0,
      ease: Circ.easeOut,
      onComplete: function() {
        intro.add(TweenMax.to($('#slide3hardware-text'), 2, {
          immediateRender: false,
          opacity: 0
        }, {
          opacity: 100,
          ease: Circ.easeOut
        }));
      }
    }));
  }, false);
}
tl.add(intro);

// Slide Three -> Four
var slideThreeHardware = new TimelineMax();
$('#page-2').on('click', function() {
  slideThreeHardware.add(TweenMax.to($('#slide3hardware'), 1, {
    yPercent: 90,
    ease: Circ.easeOut
  }));
  slideThreeHardware.add(TweenMax.fromTo($('#slide3hardware-text'), 1, {
    immediateRender: false,
    opacity: 100
  }, {
    opacity: 0,
    ease: Circ.easeOut
  }));
});
tl.add(slideThreeHardware);

// send the timeline into TweenDeck - DONE!
var deck = $.TweenDeck(tl);

// $('#btn-prev').on('click',function() {
//   deck.prev();
// });
$('#next').on('click',function() {
  deck.next();
});

// Jump to page
var gotoBtns = document.querySelectorAll('.goto-btn');
for (var i = 0, len = gotoBtns.length; i < len; i++) {
  gotoBtns[i].addEventListener('click', function() {
    if ($(this).attr('id') == 'goto-1') {
      $('.pt-page').removeClass('is-current is-onTop');
      $('#page-1').addClass('is-current is-onTop');
    } else if ($(this).attr('id') == 'goto-2') {
      $('.pt-page').removeClass('is-current is-onTop');
      $('#page-2').addClass('is-current is-onTop');
    }
  });
}

// Breadcrumb navigation functionality
$('.breadcrumb-counter-nav-item').click(function (e) {
  $('.breadcrumb-counter-nav-item').removeClass('current');
  $(this).addClass('current');
});
