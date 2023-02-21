// Skills Section
let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 300) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

// Events Section
let countDownDate = new Date("Dec 31, 2021 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = dateNow - countDownDate;

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
