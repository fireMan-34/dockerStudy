// 简易数独处理程序

const dataSource = [
  [7, null, null, 3, null, null, 4, 5, null],
  [null, null, 2, 5, null, null, null, null, null],
  [null, null, 6, 4, null, null, null, 9, null],
  [null, null, 7, null, null, 6, null, 4, null],
  [null, null, null, null, null, null, null, null, null],
  [null, 3, null, 9, null, null, null, 1, null],
  [null, null, 1, null, null, 8, null, 7, null],
  [null, null, null, null, null, null, 2, null, 5],
  [2, null, null, null, null, 9, null, null, 1]
];


const readRow = (row,) => {
  if (row > dataSource.length) {
    throw new Error('无效行数');
  }
  return dataSource[row - 1];
};

const readCol = (col) => {
  return dataSource.map(item => item[col - 1]);
}

const createRange = (start, end) => {
  const offset = end - start;
  return Array.from(
    { length: offset + 1 },
    (v, k) => start + k,
  )
}

const readNine = (col, row) => {
  // const item = dataSource[row][col];
  const colOffset = col%3;
  const rowOffset = row%3;

  const colStart = col - 3 + colOffset;
  const colEnd = col + colOffset;
  const rowStart = row - 3 + rowOffset;
  const rowEnd = row + rowOffset;

  const colRange = createRange(colStart, colEnd);
  const rowRange = createRange(rowStart, rowEnd);

  return rowRange.map(rowIdx => dataSource[rowIdx]).map(set => colRange.map(colIdx => set[colIdx]));
};

/**
 * 
 * @param {unknown} obj 
 */
const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

const player = {
  /** @type {typeof dataSource} */
  data: deepCopy(dataSource),
  parseNull2MaySetBox(){
    
  },

  getRowColNineSet(){
    const row = this.data.length;
    const col = this.data[0].length;
    
    const rowRange = [0, row-1];
    const colRange = [0, col-1];

    const rowSet = rowRange.map(row => this.readRow(row));
    const colSet = colRange.map(col => this.readCol(col)); 

    return {
      rowRange,
      colRange,
      rowSet,
      colSet,
    }
  },

  readRow(row) {
    if (row > this.data.length) {
      throw new Error('无效行数');
    }
    return this.data[row - 1];
  },
  readCol(col) {
    const offset = end - start;
    return this.data.map(item => item[col - 1]);
  },
  readNine(col, row){
    const colOffset = col%3;
    const rowOffset = row%3;
  
    const colStart = col - 3 + colOffset;
    const colEnd = col + colOffset;
    const rowStart = row - 3 + rowOffset;
    const rowEnd = row + rowOffset;
  
    const colRange = createRange(colStart, colEnd);
    const rowRange = createRange(rowStart, rowEnd);
  
    return rowRange.map(rowIdx => this.data[rowIdx]).map(set => colRange.map(colIdx => set[colIdx]));
  }

};