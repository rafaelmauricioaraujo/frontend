var textAnimated = document.getElementById('sentence');

var text = ""

var textArr = [
  "developer",
  "dog lover",
  "LOTR Fan",
]

var currentTextIndex = -1

var letterIndex = -1

function addLetter(){
  // increment letterIndex to get to the next letter
  letterIndex++
  //
  if(letterIndex < text.length) {
    //ADD A DELAY
    setTimeout( function() {
      // add letter
      textAnimated.textContent += text[letterIndex]
      // call itself 
      addLetter()
    }, 100)
  }else {
    // call removeLetter after a delay 
    setTimeout( function() {
    removeLetter()
    }, 2000)
  }
}

function removeLetter(){
  // decrement letterIndex to get to the next letter
  letterIndex--
  //
  if(letterIndex >= 0) {
    //ADD A DELAY
    setTimeout( function() {
      // remove letter
      textAnimated.textContent = text.slice(0, letterIndex)
      // call itself 
      removeLetter()
    }, 100)
  }else {
    // no more letters to remove
    // doesn't call addLetter anymore
    // call updateText instead
    updateText()
  }
}

function updateText() {
    //increment currentTextIndex to switch to the next sentence
    currentTextIndex++

    //go to the first string index when currentTextIndex has reached the last one
  if(currentTextIndex === textArr.length) {
    currentTextIndex = 0
  }
    //update text 
    text = textArr[currentTextIndex]
    //call addLetter and get the animation going
    addLetter()
}

//the initial call to start everything
updateText()



// const text = ['cyb', 'rafa', 'dev'];
// const speed = 300;
// let sentence = document.getElementById('sentence');
// let eraser = sentence.innerHTML.length;
// let writer = 0;
// let item = 0;

// function typeWriter() {

//     if (writer == text[item].length) {
//         writer = 0;
//         if (item == text.length - 1) {
//             item = 0;
//         } else {
//             item++;
//         }
//     }
    
//     if (writer < text[item].length) {
//         sentence.innerHTML += text[item].charAt(writer);
//         writer++;
//         eraser = sentence.innerHTML.length;
//         // setTimeout(typeWriter, speed);
//         requestAnimationFrame(typeWriter);
//     }

//     // if (eraser == text[item].length) {
//     //     setTimeout(function() {
//     //         for (let i = eraser; i > 0; i--) {
//     //             sentence.innerHTML = sentence.innerHTML.substring(0, i - 1);
//     //          }

//     //     }, speed);
//     //     requestAnimationFrame(typeWriter);
//     //     // setTimeout(typeWriter, speed);
//     // }
// }