// Skills Section
let skillsSection = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");

window.addEventListener("scroll", function () {
  if (window.scrollY >= skillsSection.offsetTop - 300) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});

// Events Section

// create a new Date object
let lastDayInYear = new Date();

// set the date to the last day of the current year
lastDayInYear.setMonth(11); // December
lastDayInYear.setDate(31);

// set the time to the last second of the day
lastDayInYear.setHours(23);
lastDayInYear.setMinutes(59);
lastDayInYear.setSeconds(59);

// get the timestamp in milliseconds
let countDownDate = lastDayInYear.getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  // let dateDiff = dateNow - countDownDate;
  let dateDiff = countDownDate - dateNow;

  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) clearInterval(counter);
}, 1000);

// Stats Section
let nums = document.querySelectorAll(".stats .number");
let startSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.addEventListener("scroll", function () {
  if (window.scrollY >= startSection.offsetTop - 300) {
    if (!started) nums.forEach((num) => startCount(num));
    started = true;
  }
});

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent === goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
