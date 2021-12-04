let gridSize = 16;
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