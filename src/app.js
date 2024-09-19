/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let firstWord = "The ";
  // array of parts of sentence
  let adjective = ["lonely ", "angry ", "slow ", "old ", "two-headed "];
  let noun = ["jogger ", "dog ", "raccoon ", "grandma "];
  let action = [
    "threw my ",
    "burned the ",
    "kicked the ",
    "stole the ",
    "hid my ",
    "destroyed my "
  ];
  let possession = ["luggage ", "biscuits ", "lamps ", "computer ", "phone "];
  let location = [
    "in the restrooom!",
    "at the bar!",
    "in the parking lot!",
    "on the lawn!",
    "at school!"
  ];

  //random selection of elements using Math.floor() and Math.random()
  let random1 = Math.floor(Math.random() * adjective.length);
  let random2 = Math.floor(Math.random() * noun.length);
  let random3 = Math.floor(Math.random() * action.length);
  let random4 = Math.floor(Math.random() * possession.length);
  let random5 = Math.floor(Math.random() * location.length);

  document.querySelector(".excuse").innerHTML =
    firstWord +
    adjective[random1] +
    noun[random2] +
    action[random3] +
    possession[random4] +
    location[random5];
};

// Bonus: create a function that will be called to generate a random number to be used in selction an element in each array
