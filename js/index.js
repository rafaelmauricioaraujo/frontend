const text = ['cyb', 'rafa', 'dev'];
const speed = 300;
let sentence = document.getElementById('sentence');
let eraser = sentence.innerHTML.length;
let writer = 0;
let item = 0;

function typeWriter() {

    if (writer == text[item].length) {
        writer = 0;
        // item++
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
        for (let i = eraser; i > 0; i--) {
           sentence.innerHTML = sentence.innerHTML.substring(0, i - 1);
        }
        setTimeout(typeWriter, speed);
    }
}
