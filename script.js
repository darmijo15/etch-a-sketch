const container = document.querySelector('.container');
const resetBtn = document.querySelector('#reset');

for (i = 1; i <= 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);

    square.addEventListener('mouseover', function() {
        square.style.backgroundColor = '#000000';
    })
}

resetBtn.addEventListener('click', function() {

    container.innerHTML = '';

    let input = prompt('How many squares do you want on each side of the grid?', '16');

    if (input > 100) {
        alert('Too big, please select a smaller number.');
    } else {

    const gridSize = input * input;
    const squareSize = 608 / input;

    for (i = 1; i <= gridSize; i++) {
        const square = document.createElement('div');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.backgroundColor = '#ffffff';
        container.appendChild(square);

        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = '#000000';
        })

    }
    }
})

