export class Board {
  activate(args) {
    this.height = args.height;
    this.width = args.width;

    let tempBoard = [];

    for (let i = 0; i < this.width; i++) {
      let row = [];
      for (let j = 0; j < this.height; j++) {
        const newCell = { state: "empty" }
        row.push(newCell);
      }
      tempBoard.push(row);
    }

    this.board = tempBoard;
  }
}