"use strict";

var text = ['rafael', 'developer', 'dog lover', 'lotr fan', 'cyberspace'];
var speed = 120;
var sentence = document.getElementById('sentence');
var index = sentence.innerHTML.length;
var indice = 0;

function typeWriter() {
  if (index !== 0) {
    sentence.innerHTML = sentence.innerHTML.substring(0, index);
    index--;
    setTimeout(typeWriter, speed);
  } else {
    if (indice < text[0].length) {
      sentence.innerHTML += text[0].charAt(indice);
      indice++;
      setTimeout(typeWriter, speed);
    }
  }
}