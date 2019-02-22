<template>
  <div>
    <h1>Playing Room</h1>
    <div class="container">
      <div class="container-center">
        <div class="board">
          <table class="board-cells" border="1" bordercolor="#000" style="margin: 0 auto;">
            <tbody>
              <tr>
                <td @click.prevent="clickCell('0-0')" class="cell" id="cell-0-0"><div :class="getBoard['0-0']"></div></td>
                <td @click.prevent="clickCell('0-1')" class="cell" id="cell-0-1"><div :class="getBoard['0-1']"></div></td>
                <td @click.prevent="clickCell('0-2')" class="cell" id="cell-0-2"><div :class="getBoard['0-2']"></div></td>
                <td @click.prevent="clickCell('0-3')" class="cell" id="cell-0-3"><div :class="getBoard['0-3']"></div></td>
                <td @click.prevent="clickCell('0-4')" class="cell" id="cell-0-4"><div :class="getBoard['0-4']"></div></td>
                <td @click.prevent="clickCell('0-5')" class="cell" id="cell-0-5"><div :class="getBoard['0-5']"></div></td>
                <td @click.prevent="clickCell('0-6')" class="cell" id="cell-0-6"><div :class="getBoard['0-6']"></div></td>
                <td @click.prevent="clickCell('0-7')" class="cell" id="cell-0-7"><div :class="getBoard['0-7']"></div></td>
              </tr>
              <tr>
                <td @click.prevent="clickCell('1-0')" class="cell" id="cell-1-0"><div :class="getBoard['1-0']"></div></td>
                <td @click.prevent="clickCell('1-1')" class="cell" id="cell-1-1"><div :class="getBoard['1-1']"></div></td>
                <td @click.prevent="clickCell('1-2')" class="cell" id="cell-1-2"><div :class="getBoard['1-2']"></div></td>
                <td @click.prevent="clickCell('1-3')" class="cell" id="cell-1-3"><div :class="getBoard['1-3']"></div></td>
                <td @click.prevent="clickCell('1-4')" class="cell" id="cell-1-4"><div :class="getBoard['1-4']"></div></td>
                <td @click.prevent="clickCell('1-5')" class="cell" id="cell-1-5"><div :class="getBoard['1-5']"></div></td>
                <td @click.prevent="clickCell('1-6')" class="cell" id="cell-1-6"><div :class="getBoard['1-6']"></div></td>
                <td @click.prevent="clickCell('1-7')" class="cell" id="cell-1-7"><div :class="getBoard['1-7']"></div></td>
              </tr>
              <tr>
                <td @click.prevent="clickCell('2-0')" class="cell" id="cell-2-0"><div :class="getBoard['2-0']"></div></td>
                <td @click.prevent="clickCell('2-1')" class="cell" id="cell-2-1"><div :class="getBoard['2-1']"></div></td>
                <td @click.prevent="clickCell('2-2')" class="cell" id="cell-2-2"><div :class="getBoard['2-2']"></div></td>
                <td @click.prevent="clickCell('2-3')" class="cell" id="cell-2-3"><div :class="getBoard['2-3']"></div></td>
                <td @click.prevent="clickCell('2-4')" class="cell" id="cell-2-4"><div :class="getBoard['2-4']"></div></td>
                <td @click.prevent="clickCell('2-5')" class="cell" id="cell-2-5"><div :class="getBoard['2-5']"></div></td>
                <td @click.prevent="clickCell('2-6')" class="cell" id="cell-2-6"><div :class="getBoard['2-6']"></div></td>
                <td @click.prevent="clickCell('2-7')" class="cell" id="cell-2-7"><div :class="getBoard['2-7']"></div></td>
              </tr>
              <tr>
                <td @click.prevent="clickCell('3-0')" class="cell" id="cell-3-0"><div :class="getBoard['3-0']"></div></td>
                <td @click.prevent="clickCell('3-1')" class="cell" id="cell-3-1"><div :class="getBoard['3-1']"></div></td>
                <td @click.prevent="clickCell('3-2')" class="cell" id="cell-3-2"><div :class="getBoard['3-2']"></div></td>
                <td @click.prevent="clickCell('3-3')" class="cell" id="cell-3-3"><div :class="getBoard['3-3']"></div></td>
                <td @click.prevent="clickCell('3-4')" class="cell" id="cell-3-4"><div :class="getBoard['3-4']"></div></td>
                <td @click.prevent="clickCell('3-5')" class="cell" id="cell-3-5"><div :class="getBoard['3-5']"></div></td>
                <td @click.prevent="clickCell('3-6')" class="cell" id="cell-3-6"><div :class="getBoard['3-6']"></div></td>
                <td @click.prevent="clickCell('3-7')" class="cell" id="cell-3-7"><div :class="getBoard['3-7']"></div></td>
              </tr>
              <tr>
                <td @click.prevent="clickCell('4-0')" class="cell" id="cell-4-0"><div :class="getBoard['4-0']"></div></td>
                <td @click.prevent="clickCell('4-1')" class="cell" id="cell-4-1"><div :class="getBoard['4-1']"></div></td>
                <td @click.prevent="clickCell('4-2')" class="cell" id="cell-4-2"><div :class="getBoard['4-2']"></div></td>
                <td @click.prevent="clickCell('4-3')" class="cell" id="cell-4-3"><div :class="getBoard['4-3']"></div></td>
                <td @click.prevent="clickCell('4-4')" class="cell" id="cell-4-4"><div :class="getBoard['4-4']"></div></td>
                <td @click.prevent="clickCell('4-5')" class="cell" id="cell-4-5"><div :class="getBoard['4-5']"></div></td>
                <td @click.prevent="clickCell('4-6')" class="cell" id="cell-4-6"><div :class="getBoard['4-6']"></div></td>
                <td @click.prevent="clickCell('4-7')" class="cell" id="cell-4-7"><div :class="getBoard['4-7']"></div></td>
              </tr>
              <tr>
                <td @click.prevent="clickCell('5-0')" class="cell" id="cell-5-0"><div :class="getBoard['5-0']"></div></td>
                <td @click.prevent="clickCell('5-1')" class="cell" id="cell-5-1"><div :class="getBoard['5-1']"></div></td>
                <td @click.prevent="clickCell('5-2')" class="cell" id="cell-5-2"><div :class="getBoard['5-2']"></div></td>
                <td @click.prevent="clickCell('5-3')" class="cell" id="cell-5-3"><div :class="getBoard['5-3']"></div></td>
                <td @click.prevent="clickCell('5-4')" class="cell" id="cell-5-4"><div :class="getBoard['5-4']"></div></td>
                <td @click.prevent="clickCell('5-5')" class="cell" id="cell-5-5"><div :class="getBoard['5-5']"></div></td>
                <td @click.prevent="clickCell('5-6')" class="cell" id="cell-5-6"><div :class="getBoard['5-6']"></div></td>
                <td @click.prevent="clickCell('5-7')" class="cell" id="cell-5-7"><div :class="getBoard['5-7']"></div></td>
              </tr>
              <tr>
                <td @click.prevent="clickCell('6-0')" class="cell" id="cell-6-0"><div :class="getBoard['6-0']"></div></td>
                <td @click.prevent="clickCell('6-1')" class="cell" id="cell-6-1"><div :class="getBoard['6-1']"></div></td>
                <td @click.prevent="clickCell('6-2')" class="cell" id="cell-6-2"><div :class="getBoard['6-2']"></div></td>
                <td @click.prevent="clickCell('6-3')" class="cell" id="cell-6-3"><div :class="getBoard['6-3']"></div></td>
                <td @click.prevent="clickCell('6-4')" class="cell" id="cell-6-4"><div :class="getBoard['6-4']"></div></td>
                <td @click.prevent="clickCell('6-5')" class="cell" id="cell-6-5"><div :class="getBoard['6-5']"></div></td>
                <td @click.prevent="clickCell('6-6')" class="cell" id="cell-6-6"><div :class="getBoard['6-6']"></div></td>
                <td @click.prevent="clickCell('6-7')" class="cell" id="cell-6-7"><div :class="getBoard['6-7']"></div></td>
              </tr>
              <tr>
                <td @click.prevent="clickCell('7-0')" class="cell" id="cell-7-0"><div :class="getBoard['7-0']"></div></td>
                <td @click.prevent="clickCell('7-1')" class="cell" id="cell-7-1"><div :class="getBoard['7-1']"></div></td>
                <td @click.prevent="clickCell('7-2')" class="cell" id="cell-7-2"><div :class="getBoard['7-2']"></div></td>
                <td @click.prevent="clickCell('7-3')" class="cell" id="cell-7-3"><div :class="getBoard['7-3']"></div></td>
                <td @click.prevent="clickCell('7-4')" class="cell" id="cell-7-4"><div :class="getBoard['7-4']"></div></td>
                <td @click.prevent="clickCell('7-5')" class="cell" id="cell-7-5"><div :class="getBoard['7-5']"></div></td>
                <td @click.prevent="clickCell('7-6')" class="cell" id="cell-7-6"><div :class="getBoard['7-6']"></div></td>
                <td @click.prevent="clickCell('7-7')" class="cell" id="cell-7-7"><div :class="getBoard['7-7']"></div></td>
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
  data() {
    return {
      board: {}
    }
  },
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
  methods: {
    clickCell(id) {
      console.log(id);
      this.board[id] = 'stone white'
      console.log(this.board);

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
