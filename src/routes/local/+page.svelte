<script>
  import {test, Field } from "./logic.js";
  /** @type {import('./$types').PageData} */
  let arraySize = 8;
  const field = new Field(arraySize);
  field.fill();
  let x = "X"
  let o = "O"
  let xo = x;
  function switchX(){
  if (xo === x){
    xo = o;
  }
  else{
    xo = x;
  };
}
  
</script>

<div class="playfield">
  {#each field.playfield as row, x (x)}
    <div class="row">
      {#each row as cell, y (y)}
        <div class="cell" on:click={ () => field.playfield[x][y] = xo } on:click={switchX}>
          {cell}
        </div>
      {/each}
    </div>
  {/each}
</div>

<style>
  html,
  body {
    height: 100%;
  }

  div.playfield {
    margin: auto;
    height: 100% !important;
  }

  div.row {
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
  }

  div.cell {
    width: 50px;
    height: 50px;
    border: solid 1px black;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: xx-large;
  }
</style>
