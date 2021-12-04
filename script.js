// create grids 
const initialGridSize = 16;
createGrids(initialGridSize);

// change color of grid when hover 
let grids = document.querySelectorAll('.grid');
grids.forEach((grid) => {
  grid.addEventListener('mouseenter', changeColor);
}); 

/*
// reset and resize grid 
let clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', () => {
  // *************** delete old grids
  deleteGrids();
  // *************** delete old grids
  
  // reset
  let grids = document.querySelectorAll('.grid');
  grids.forEach((grid) => grid.style.backgroundColor = '#ffffff');
  // resize 
  let newGridSize = 0;
  do {
    let input = prompt('Enter desired grid size. Grid size must be between 1 and 100');
    if (input === null) {
      break;
    }
    newGridSize = parseInt(input);
  } while (isNaN(newGridSize) || newGridSize <= 0 || newGridSize > 100);
  createGrids(newGridSize);
  
});
*/

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

// change color of each grid area 
// take in no parameters
// return no results 
function changeColor() {
  this.style.backgroundColor = '#000000';
}

// delete grids 
// take in no parameters
// return no results 
/*
function deleteGrids() {
  let gridContainer = document.querySelector('.grid-container');
  let gridContainerChild = gridContainer.lastElementChild;
  while (gridContainerChild) {
    gridContainer.removeChild(gridContainerChild);
    gridContainerChild = gridContainer.lastElementChild;
  }
}
*/