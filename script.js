const container = document.querySelector('.container');

for (i = 1; i <= 256; i++) {
const square = document.createElement('div');
square.classList.add('square');
container.appendChild(square);
}