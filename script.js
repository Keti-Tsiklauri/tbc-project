"use strict";

//change navbar opacity while scroll
function scrollFunction() {
  if (document.body.scrollTop > 77 || document.documentElement.scrollTop > 77) {
    document.getElementById("nav_bar").style.opacity = "0.9";
  }
}
window.onscroll = function () {
  scrollFunction();
};

// გაიგე მეტი

const more_button = document.getElementById("more");
const div_for_more_information = document.getElementById("more_information");
const first_div = document.getElementById("first");
const active_link = document.getElementById("active");
more_button.addEventListener("click", function () {
  document.body.appendChild(div_for_more_information);
  div_for_more_information.style.display = "block";
  first_div.remove();
  active_link.classList.remove("active");
});

//slider
//slide change after click on arrows

var slideIndex = 1;
const left_button = document.getElementById("left");
const right_button = document.getElementById("right");
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");

  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex - 1].style.display = "block";
}
function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

showDivs(slideIndex);

left_button.addEventListener("click", () =>
  setTimeout(plusDivs.bind(null, -1), 2000)
);
right_button.addEventListener("click", () =>
  setTimeout(plusDivs.bind(null, 1), 2000)
);
//change slide automatically after 4 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 4000);
}

//change slide when clicking on dots
const dots = document.querySelectorAll(".dot");

dots.forEach(function (element, index) {
  element.addEventListener("click", function (e) {
    var clickedElement = e.target;
    var indexOfClickedElement = Array.from(dots).indexOf(clickedElement);
    setTimeout(currentDiv(indexOfClickedElement + 1), 2000);
    console.log(clickedElement, indexOfClickedElement);
  });
});

// questions
const questions = document.querySelectorAll(".p_for_questions");
const answers = document.querySelectorAll(".hidden");
const icon = document.querySelectorAll(".icon_arrow");

questions.forEach(function (P_element, index) {
  P_element.addEventListener("click", function (event) {
    var clickedPElement = event.currentTarget;

    // Toggle display and icon based on the current state
    if (answers[index].style.display === "none") {
      answers[index].style.display = "inline";
      icon[index].innerHTML = "&#11165;";
    } else {
      answers[index].style.display = "none";
      icon[index].innerHTML = "&#11167;";
    }
  });
});
