const text = ['Rafael', 'Developer', 'Dog lover', 'LOTR Fan', 'Cyber r space'];
const speed = 120;

let index;
let sentence = document.getElementById('sentence');
index = sentence.innerHTML.length;

function typeWriter() {
    console.log('inner in initial: ', sentence.innerHTML);

    console.log('index: ', index);
    
    if (index !== 0) {
        console.log('aqui');
        sentence.innerHTML = sentence.innerHTML.substring(0, index-1);
        index--;
        console.log('index after: ', index);
        console.log('sentence: ', sentence.innerHTML);
        setTimeout(typeWriter, speed);
    }

    if(sentence.innerHTML == '') {
        if (index < text[0].length) {
            console.log('agora aqui');
            sentence.innerHTML += text[0].charAt(index);
            index++;
            console.log('index in typing: ', index);
            setTimeout(typeWriter, speed);
        }
    }
}

// function typing() {
//     if (index < text[0].length) {
//         sentence.innerHTML += text[0].charAt(index);
//         index++;
//         setTimeout(typeWriter, speed);
//     }
// }
