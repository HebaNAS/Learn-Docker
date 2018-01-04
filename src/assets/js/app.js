// Import and initialize jquery
import $ from 'jquery';
import whatInput from 'what-input';
window.$ = $;

// Import and initialize foundation
import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
$(document).foundation();

// Page transitions
import {TweenMax, Power2, TimelineLite} from 'gsap';

var btns = document.querySelectorAll('.js-btn');
var els = document.querySelectorAll('.js-page');
var duration = 0.8;
var isAnimating = false;
var switchPageEvent = new Event('switch');

addEventListenerList(btns, 'click', function(e) {
  if(!isAnimating) {
    switchPages(e.currentTarget.dataset.out, e.currentTarget.dataset.in);
  }
});

addEventListenerList(els, 'switch', function(e) {
  if(!isAnimating) {
    console.log(e.currentTarget);
    switchPages(e.currentTarget.dataset.out, e.currentTarget.dataset.in);
  }
});


function switchPages(outFn, inFn) {
  isAnimating = true;

  if (outFn == 'moveToRight') {
    window[outFn] = moveToRight;
  } else if (outFn == 'moveFromRight') {
    window[outFn] = moveFromRight;
  }
  
  if (inFn == 'moveToRight') {
    window[inFn] = moveToRight;
  } else if (inFn == 'moveFromRight') {
    window[inFn] = moveFromRight;
  }

  window[outFn](document.querySelector('.is-current'));
  window[inFn](document.querySelector('.js-page:not(.is-current)'));

}

function moveToRight(el) {
  var no = el.dataset.viewport;
  var page1flag = false;

  if (no == 1) {
    page1flag = true;
  }

  addClass(el, ['is-onTop', 'is-current']);
  TweenMax.fromTo(el, duration, {
    xPercent: 0
  }, {
    xPercent: -100,
    clearProps: 'xPercent',
    onComplete: function () {
      removeClass(el, ['is-onTop', 'is-current']);
      $('.breadcrumb-counter-nav-item').removeClass('current');
      addClass($('.breadcrumb-counter-nav-item')[no], 'current');
      isAnimating = false;
    }
  });


  if (page1flag) {
    TweenMax.to(el, 1, {
      scale: 10,
      opacity: 0,
      ease: Back.Power2,
      delay: 4
    }, {
      onComplete: function() {
        console.log('Switch');
        el.dispatchEvent('switch');
      }
    });
  }
}

function moveFromRight(el) {
  var no = el.dataset.viewport;
  var page1flag = false;

  if (no == 1) {
    page1flag = true;
  }
  
  addClass(el, ['is-onTop', 'is-current']);
  TweenMax.fromTo(el, duration, {
    xPercent: 100
  }, {
    xPercent: 0,
    clearProps: 'xPercent',
    onComplete: function () {
      removeClass(el, 'is-onTop');
      $('.breadcrumb-counter-nav-item').removeClass('current');
      addClass($('.breadcrumb-counter-nav-item')[no], 'current');
      isAnimating = false;
    }
  });

  if (page1flag) {
    TweenMax.to(el, 1, {
      scale: 10,
      opacity: 0,
      ease: Back.Power2,
      delay: 4
    }, {
      onComplete: function() {
        console.log('Switch');
        el.dispatchEvent('switch');
      }
    });
  }
}

// utils
function addClass(el, className) {
  [].concat(className).forEach(function (n) {
    el.classList.add(n);
  });
}

function removeClass(el, className) {
  [].concat(className).forEach(function (n) {
    el.classList.remove(n);
  });
}

function addEventListenerList(list, event, fn) {
  for (var i = 0, len = list.length; i < len; i++) {
    list[i].addEventListener(event, fn, false);
  }
}

// Page 1 transitions
function fadeOutPage() {
  if ($('.is-current')[0].dataset.viewport == 1) {
    console.log($('.is-current')[0].dataset.viewport);
    TweenMax.to($('.pt-page-1 .fade-out')[0], 1, {
      x:-100 , opacity:0 , ease:Power1.easeInOut ,repeat:-1 
    });
  }
}

// Breadcrumb navigation functionality
$('.breadcrumb-counter-nav-item').click(function () {
  $('.breadcrumb-counter-nav-item').removeClass('current');
  $(this).addClass('current');
});
