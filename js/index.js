const text = ['cyb', 'rafael', 'developer', 'dog lover', 'lotr fan'];
const speed = 120;

let sentence = document.getElementById('sentence');
let writer = 0;
let eraser = sentence.innerHTML.length;
let item = 0;


function typeWriter() {

    if (writer == text[item].length) {
        writer = 0;
        item++
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
