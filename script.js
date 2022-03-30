const sketchpadContainer = document.querySelector('.sketchpad-container');
const clearBtn = document.querySelector('#clear');
const resizeBtn = document.querySelector('#resize');
const colorPicker = document.querySelector('#color-picker');

let input = 16;
let sketchpadSize = input * input;
let squareSize = 640 / input;

let squareColor = colorPicker.value;

function createSketchpad() {
    for (i = 1; i <= sketchpadSize; i++) {
        const square = document.createElement('div');

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.backgroundColor = '#ffffff';

        sketchpadContainer.appendChild(square);

        square.addEventListener('mouseover', function () {
            square.style.backgroundColor = squareColor;
        })
    }
}

createSketchpad();

clearBtn.addEventListener('click', function() {
    sketchpadContainer.innerHTML = '';
    createSketchpad();
})

resizeBtn.addEventListener('click', function() {

    promptInput = prompt('How many squares do you want on each side of the sketchpad? Choose any number 1-100.', '16');

    if (promptInput === null) {
        return;
    } else if (promptInput === '') {
        return;
    } else if (promptInput < 1) {
        alert('Please enter a number greater than 0.');
    } else if (promptInput >= 1 && promptInput <= 100) {
        input = promptInput; 
        sketchpadSize = input * input;
        squareSize = 640 / input;
        sketchpadContainer.innerHTML = '';
        createSketchpad();
    } else {
        alert('Please select a smaller number.')
    }
})

colorPicker.addEventListener('change', function() {
    squareColor = colorPicker.value;
    console.log(squareColor);
})
