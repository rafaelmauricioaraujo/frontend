const text = ['rafael', 'developer', 'dog lover', 'lotr fan', 'cyberspace'];
const speed = 120;

let sentence = document.getElementById('sentence');
let index = sentence.innerHTML.length;
let indice = 0;

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
