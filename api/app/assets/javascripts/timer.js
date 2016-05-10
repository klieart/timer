
function initializeClock(timer) {
  var duration = timer.getAttribute('duration');
  var minutes = timer.getElementsByClassName('app-minutes')[0];
  var seconds = timer.getElementsByClassName('app-seconds')[0];

  function updateClock() {
    if (duration <= 0) {
      clearInterval(timeinterval);
      duration = 0;
    } else {
      duration-=1000;
    }
    minutes.innerHTML = ('0' + Math.floor( (duration/1000/60) % 60 ) ).slice(-2);
    seconds.innerHTML = ('0' + Math.floor( (duration/1000) % 60 ) ).slice(-2);

  }
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

// Store timer data in cookie
  //$.cookie("timer-data", JSON.stringify($("#ArticlesHolder").data()));
// Get timer data from cookie
  //JSON.parse($.cookie("timer-data"));

$(document).ready(function(){
  var timer = document.getElementsByClassName("app-timer-timer");
  for (var i = timer.length - 1; i >= 0; i--){
    initializeClock(timer[i]);
  }

  $(".app-btn-toggle").click(function(){
    $(this).find('span').toggleClass('hidden');
  });
});
