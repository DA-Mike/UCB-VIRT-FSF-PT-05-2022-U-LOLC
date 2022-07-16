// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectModalEl = $('#project-modal');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = $('#project-type-input');
var hourlyRateInputEl = $('#hourly-rate-input');
var dueDateInputEl = $('#due-date-input');

setInterval(function() {
    var currentTime = moment().format("hh:mm:ss MMM Do, YYYY");
    timeDisplayEl.text(currentTime);
}, 1000);

$( function() {
    $( "#due-date-input" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
  } );

function dueDate() {
    var daysVar = moment(dueDateInputEl, "MM/DD/YYYY").fromNow();
}

function earnedWages() {
    var wages = (hourlyRageInputEl * 8) * dueDate();
}

function captureInfo() {
    $("<td>").tx
}