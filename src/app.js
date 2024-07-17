/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = function() {
  let myNumbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let myEmojis = ["♠", "♥", "♣", "♦"];

  let myRandomNumber = Math.floor(Math.random() * myNumbers.length);
  let myRandomEmojis = Math.floor(Math.random() * myEmojis.length);

  let selectorNumber = myNumbers[myRandomNumber];
  let selectorEmojis = myEmojis[myRandomEmojis];

  let primerPalo = document.getElementById("palo1");
  primerPalo.innerHTML = selectorEmojis;

  let segundoPalo = document.getElementById("palo2");
  segundoPalo.innerHTML = selectorEmojis;

  let number = document.getElementById("numero");
  number.innerHTML = selectorNumber;
};
