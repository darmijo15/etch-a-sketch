const container = document.querySelector('.container');
const resetBtn = document.querySelector('#reset');

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

resetBtn.addEventListener('click', function() {
    input = prompt('How many squares do you want on each side of the grid?', '16');
    gridSize = input * input;
    squareSize = 640 / input;

    if (input > 100) {
        alert('Please select a smaller number of squares.');
    } else {
        container.innerHTML = '';
        createGrid();
    }
})
