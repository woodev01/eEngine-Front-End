export class Board {
  activate(args) {
    this.height = args.height;
    this.width = args.width;

    let tempBoard = [];

    for (let i = 0; i < this.height; i++) {
      let row = [];
      for (let j = 0; j < this.width; j++) {
        const newCell = { state: "X" }
        row.push(newCell);
      }
      tempBoard.push(row);
    }

    this.board = tempBoard;
  }
}