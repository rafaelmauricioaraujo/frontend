"use strict";

var text = ['cyb', 'rafael', 'developer', 'dog lover', 'lotr fan'];
var speed = 120;
var sentence = document.getElementById('sentence');
var writer = 0;
var eraser = sentence.innerHTML.length;
var item = 0;

function typeWriter() {
  if (writer == text[item].length) {
    writer = 0;
    item++;
  }

  if (writer < text[item].length) {
    sentence.innerHTML += text[item].charAt(writer);
    writer++;
    eraser = sentence.innerHTML.length;
    setTimeout(typeWriter, speed);
  }

  if (eraser == text[item].length) {
    sentence.innerHTML = sentence.innerHTML.substring(0, eraser - 1);
    eraser--;
    setTimeout(typeWriter, speed);
  }
}