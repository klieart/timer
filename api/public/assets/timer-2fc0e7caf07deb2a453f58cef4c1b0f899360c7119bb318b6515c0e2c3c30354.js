
class Timer {
  constructor( duration ){
    this.duration = duration;
  }
  get minutes(){
    return ('0' + Math.floor( (this.duration/1000) % 60 ) ).slice(-2)
  }
  get seconds(){
    return ('0' + Math.floor( (this.duration/1000/60) % 60 ) ).slice(-2)
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function getTimeRemaining( duration ) {
  var t = duration;
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  return {
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, duration) {
  var timer = new Timer(duration);
  var clock = document.getElementById(id);
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = timer.time();
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    if (t.total <= 0) { clearInterval(timeinterval); }
  }
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

// Store timer data in cookie
  //$.cookie("timer-data", JSON.stringify($("#ArticlesHolder").data()));
// Get timer data from cookie
  //JSON.parse($.cookie("timer-data"));

$(document).ready(function(){
  var duration = 300000;
  // Get from API if available
  // Get from cookie if available
  initializeClock('clockdiv', duration);

  $(".app-btn-toggle").click(function(){
    $(this).find('span').toggleClass('hidden');
  });
});
