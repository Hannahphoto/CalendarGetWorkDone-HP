// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

var currentDayEl = $('#currentDay');
currentDayEl.append(dayjs().format('dddd, MMMM D, YYYY, HH:mm'));

var hours = dayjs().format("HH");

$(function () {
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  var textArea = document.querySelectorAll("textarea");

  $(".saveBtn").on("click", saveEvent);

  function saveEvent() {
    let eventDescription = $(this).siblings(".description").val();
    let eventTime = $(this).siblings(".hour").text();
    localStorage.setItem(eventTime, eventDescription);
  };
// array of values// all the times up to 5pm
  var keyArray = ["9AM","10AM", "11AM", "12PM","1PM","2PM","3PM","4PM","5pm"];
  for (let index = 0; index < textArea.length; index++) {
    textArea[index].value = localStorage.getItem(keyArray[index]);
  };

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
 

var past = document.querySelector(".past");
var present = document.querySelector(".present");
var future = document.querySelector(".future");

var pastPresentFutureEL = document.querySelector(".row");
var textArea = $("textarea");
for(var i = 0; i < pastPresentFutureEL.length; i++){
  var id = pastPresentFutureEL[i].attr("id");
  var val = id.split("-")[1];
  if(val === hours){
  $(textArea[i].addClass(present));
  }
  else if(pastPresentFutureEL.val < hours);{
  $(textArea[i].addClass(past)); 
  }
  else(pastPresentFutureEL.val > hours);{
  $(textArea[i].addClass(future));
  };
  };

// TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

});
