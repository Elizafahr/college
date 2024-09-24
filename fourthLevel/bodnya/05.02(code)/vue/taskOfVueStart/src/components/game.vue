<template>
  <div >
    <h1>Крестики-Нолики</h1>
    <div class="board">
      <div class="cell" v-for="(cell, index) in board" :key="index" @click="makeMove(index)">
        {{ cell }}
      </div>
    </div>
    <div class="info">
      <p>Ход: {{ currentPlayer }}</p>
      <button @click="resetGame">Новая игра</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      board: Array(9).fill(''),
      currentPlayer: 'X',
      gameOver: false
    }
  },
  methods: {
    makeMove(index) {
      if (this.board[index] === '' && !this.gameOver) {
        this.board.splice(index, 1, this.currentPlayer)
        this.checkWin()
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'
      }
    },
    checkWin() {
      const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ]
      for (let combo of winningCombos) {
        if (this.board[combo[0]] !== '' && this.board[combo[0]] === this.board[combo[1]] && this.board[combo[1]] === this.board[combo[2]]) {
          this.gameOver = true
          alert(`Игрок ${this.board[combo[0]]} выиграл!`)
          return
        }
      }
      if (!this.board.includes('')) {
        this.gameOver = true
        alert('Ничья!')
      }
    },
    resetGame() {
      this.board = Array(9).fill('')
      this.currentPlayer = 'X'
      this.gameOver = false
    }
  }
}
</script>

<style>
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-gap: 10px;
  width: 300px;
  margin: 0 auto;
}

.cell {
  width: 100px;
  height: 100px;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  cursor: pointer;
}

.info {
  text-align: center;
  margin-top: 20px;
}
</style>
