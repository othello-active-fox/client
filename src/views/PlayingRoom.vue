<template>
  <div>
    <h1>Playing Room</h1>
    <div class="container">
      <div class="container-center">
        <div class="board">
          <table class="board-cells" border="1" bordercolor="#000" style="margin: 0 auto;">
            <tbody>
              <tr>
                <td @click.prevent="clickCell" class="cell" id="cell-0-0"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-0-1"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-0-2"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-0-3"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-0-4"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-0-5"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-0-6"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-0-7"></td>
              </tr>
              <tr>
                <td @click.prevent="clickCell" class="cell" id="cell-1-0"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-1-1"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-1-2"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-1-3"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-1-4"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-1-5"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-1-6"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-1-7"></td>
              </tr>
              <tr>
                <td @click.prevent="clickCell" class="cell" id="cell-2-0"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-2-1"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-2-2"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-2-3"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-2-4"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-2-5"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-2-6"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-2-7"></td>
              </tr>
              <tr>
                <td @click.prevent="clickCell" class="cell" id="cell-3-0"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-3-1"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-3-2"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-3-3"><div :class="getBoard['3-3']"></div></td>
                <td @click.prevent="clickCell" class="cell" id="cell-3-4"><div :class="getBoard['3-4']"></div></td>
                <td @click.prevent="clickCell" class="cell" id="cell-3-5"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-3-6"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-3-7"></td>
              </tr>
              <tr>
                <td @click.prevent="clickCell" class="cell" id="cell-4-0"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-4-1"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-4-2"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-4-3"><div :class="getBoard['4-3']"></div></td>
                <td @click.prevent="clickCell" class="cell" id="cell-4-4"><div :class="getBoard['4-4']"></div></td>
                <td @click.prevent="clickCell" class="cell" id="cell-4-5"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-4-6"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-4-7"></td>
              </tr>
              <tr>
                <td @click.prevent="clickCell" class="cell" id="cell-5-0"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-5-1"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-5-2"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-5-3"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-5-4"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-5-5"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-5-6"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-5-7"></td>
              </tr>
              <tr>
                <td @click.prevent="clickCell" class="cell" id="cell-6-0"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-6-1"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-6-2"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-6-3"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-6-4"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-6-5"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-6-6"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-6-7"></td>
              </tr>
              <tr>
                <td @click.prevent="clickCell" class="cell" id="cell-7-0"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-7-1"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-7-2"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-7-3"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-7-4"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-7-5"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-7-6"></td>
                <td @click.prevent="clickCell" class="cell" id="cell-7-7"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    for (let i = 0; i <= 7; i++) {
      for (let j = 0; j <= 7; j++) {
        if (i === 3 && j === 3 || i === 4 && j === 4) {
          this.board[`${i}-${j}`] = 'stone white'
        } else if (i === 3 && j === 4 || i === 4 && j === 3) {
          this.board[`${i}-${j}`] = 'stone black'
        } else {
          this.board[`${i}-${j}`] = null
        }
      }
    }

    // console.log(this.board)
  },

  data() {
    return {
      board: {}
    }
  },

  computed: {
    getBoard() {
      return this.board
    }
  }
}
</script>

<style>

.container {
  background-color: #ddd;
  box-shadow: 2px 2px 4px #222;
  margin: 0 auto;
  padding: 20px 0;
  position: relative;
  width: 640px;
}

.container-center {
  margin: 0 auto;
  position: relative;
  width: 447px;
}

.message-container {
  display: none;
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
}

.message {
  background-color: #ddd;
  box-shadow: 2px 2px 4px #222;
  line-height: 90px;
  margin: 40% auto 0;
  opacity: .9;
  text-align: center;
  width: 50%;
}

.board {
  background-color: #080;
  border: solid 1px #000;
  box-shadow: 2px 2px 4px #222;
}

.board-cells {
  border-collapse: collapse;
  margin: 10px;
}

.cell {
  height: 50px;
  width: 50px;
}

.valid {
  background-color: #f88;
  cursor: pointer;
}

.valid:hover {
  background-color: #faa;
}

.stone {
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: 2px 2px 4px #222;
  height: 100%;
  margin: auto;
  transition: width .2s 0s linear, background-color 0s .2s linear;
  width: 100%;
}

.black,
.black-label,
.black-bar {
  background-color: #000;
}

.white,
.white-label,
.white-bar {
  background-color: #fff;
}

.turn-effect {
  width: 0;
}

.score-labels {
  font-size: 0;
  margin: 10px 0;
}

.score-label {
  box-shadow: 2px 2px 4px #222;
  box-sizing: border-box;
  display: inline-block;
  font-size: 16px;
  padding: 5px 0;
  text-align: center;
  width: 30%;
}

.black-label {
  border: solid 2px #000;
  color: #fff;
}

.white-label {
  border: solid 2px #fff;
  color: #000;
  margin-left: 40%;
}

.turn {
  border: solid 2px #d22;
  color: #d22;
}

.score-bars {
  font-size: 0;
}

.score-bar {
  box-shadow: 2px 2px 4px #222;
  display: inline-block;
  height: 38px;
  transition: width .4s 0s ease;
}

.reset-container {
  margin-top: 10px;
  text-align: center;
}

.start-container {
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
}

.start-overlay {
  background-color: #ddd;
  height: 100%;
  opacity: .6;
  position: absolute;
  width: 100%;
}

.start-content {
  background-color: #eee;
  box-shadow: 2px 2px 4px #222;
  margin: 25% auto 0;
  overflow: auto;
  position: relative;
  width: 50%;
}

.start-title {
  background-color: #080;
  color: #ddd;
  font-size: 2em;
  padding: 10px 0;
  text-align: center;
}

.start-p {
  text-align: center;
}

.start-p-span {
  display: inline-block;
  width: 55px;
}

.button {
  background-color: #080;
  border: none;
  color: #ddd;
  cursor: pointer;
  font-size: 16px;
  height: 38px;
  outline: none;
  width: 30%;
}

.button:hover {
  background-color: #0a0;
}

</style>
