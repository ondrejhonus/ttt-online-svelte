export function test() {
  console.log("funguje");
}


export class Field {
    constructor(arraySize) {
        this.arraySize = arraySize;
        this.playfield = [];
        this.xo = "X";
    }

    fill() {
        for (let index = 0; index < this.arraySize; index++) {
            const row = [];
            for (let index = 0; index < this.arraySize; index++) {
              row.push("");
            }
            this.playfield.push(row);
          }
    }
}


