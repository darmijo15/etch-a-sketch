const container = document.querySelector('.container');
const clearBtn = document.querySelector('#clear');
const resizeBtn = document.querySelector('#resize');

let input = 16;
let gridSize = input * input;
let squareSize = 640 / input;

let squareColor = 'rgb(0, 0, 0)';

function createGrid() {
    for (i = 1; i <= gridSize; i++) {
        const square = document.createElement('div');

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.backgroundColor = '#ffffff';

        container.appendChild(square);

        square.addEventListener('mouseover', function () {
            square.style.backgroundColor = squareColor;
        })
    }
}

createGrid();

clearBtn.addEventListener('click', function() {
    container.innerHTML = '';
    createGrid();
})

resizeBtn.addEventListener('click', function() {

    promptInput = prompt('How many squares do you want on each side of the grid?', '16');

    if (promptInput === null) {
        return;
    } else if (promptInput === '') {
        return;
    } else if (promptInput < 1) {
        alert('Please enter a number greater than 0.');
    } else if (promptInput >= 1 && promptInput <= 100) {
        input = promptInput; 
        gridSize = input * input;
        squareSize = 640 / input;
        container.innerHTML = '';
        createGrid();
    } else {
        alert('Please select a smaller number.')
    }
})
