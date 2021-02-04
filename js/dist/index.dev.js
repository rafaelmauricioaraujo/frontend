"use strict";

var text = ['cyb', 'rafa', 'dev'];
var speed = 300;
var sentence = document.getElementById('sentence');
var eraser = sentence.innerHTML.length;
var writer = 0;
var item = 0;

function typeWriter() {
  if (writer == text[item].length) {
    writer = 0; // item++

    if (item == text.length - 1) {
      item = 0;
    } else {
      item++;
    }
  }

  if (writer < text[item].length) {
    sentence.innerHTML += text[item].charAt(writer);
    writer++;
    eraser = sentence.innerHTML.length;
    setTimeout(typeWriter, speed);
  }

  if (eraser == text[item].length) {
    for (var i = eraser; i > 0; i--) {
      sentence.innerHTML = sentence.innerHTML.substring(0, i - 1);
    }

    setTimeout(typeWriter, speed);
  }
}