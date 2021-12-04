// create grids 
const initialGridSize = 16;
createGrids(initialGridSize);
// change color of grid when hover 
addHoverEffect();
// reset and resize grid 
addNewGrid();

// create grids 
// take in grid size 
// return no results 
function createGrids(gridSize) {
  let gridContainer = document.querySelector('.grid-container');
  for (let i = 0; i < gridSize; i++) {
    let gridRow = document.createElement('div');
    gridRow.className = 'grid-row';
    for (let j = 0; j < gridSize; j++) {
      let grid = document.createElement('div');
      grid.className = 'grid';
      gridRow.appendChild(grid);
    }
    gridContainer.appendChild(gridRow);
  }
}

// add eventListener for hover action 
// take in no parameters 
// return no results 
function addHoverEffect() {
  let grids = document.querySelectorAll('.grid');
  grids.forEach((grid) => {
    grid.addEventListener('mouseenter', changeColor);
  }); 
}

// change color of each grid area 
// take in no parameters
// return no results 
function changeColor() {
  const intensities = [];
  for (let i = 0; i < 3; i++) {
    intensities.push(generateRandomIntensity());
  }
  this.style.backgroundColor = `rgb(${intensities[0]}, ${intensities[1]}, ${intensities[2]})`;
}

// generate a random number between 0 and 255 
// take in no parameters 
// return a random number 
function generateRandomIntensity() {
  return Math.floor(Math.random() * 256);
}

// add new grid with new size
// take in no parameters 
// return no results 
function addNewGrid() {
  let clearButton = document.querySelector('.clear-button');
  clearButton.addEventListener('click', () => {
    let newGridSize = promptNewGridSize();
    if (newGridSize === 'cancel') { // if cancel then don't create new grid 
      return;
    }
    deleteGrids();
    createGrids(newGridSize); 
    addHoverEffect();
  });
}

// prompt user for new grid size 
// take in no parameters 
// return new grid size 
function promptNewGridSize() {
  let newGridSize = 0;
  do {
    let input = prompt('Enter desired grid size. Grid size must be between 1 and 100');
    if (input === null) {
      return 'cancel';
    }
    newGridSize = parseInt(input);
  } while (isNaN(newGridSize) || newGridSize <= 0 || newGridSize > 100);
  
  return newGridSize;
}

// delete grids 
// take in no parameters
// return no results 
function deleteGrids() {
  let gridContainer = document.querySelector('.grid-container');
  let gridContainerChild = gridContainer.lastElementChild;
  while (gridContainerChild) {
    gridContainer.removeChild(gridContainerChild);
    gridContainerChild = gridContainer.lastElementChild;
  }
}