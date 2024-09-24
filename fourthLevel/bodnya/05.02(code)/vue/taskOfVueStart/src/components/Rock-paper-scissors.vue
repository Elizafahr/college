<template>
  <div style="display: flex !important; flex-direction: column; margin: 50px auto;" >
    <h1>Камень, ножницы, бумага</h1>
    <div class="choice-buttons">
      <button @click="playerChoice = 'Камень'">Камень</button>
      <button @click="playerChoice = 'scissors'">Ножницы</button>
      <button @click="playerChoice = 'бумага'">Бумага</button>
    </div>
    <table width="800px"  >
      <tr class="game-container">
        <td>
          <div class="player-choice">
            <h2>Ваш выбор</h2>
            <div class="player-selection">{{ playerChoice }}</div>
          </div>
        </td>
        <td>
          <div class="computer-choice">
            <h2>Выбор компьютера</h2>
            <div class="choice">{{ computerChoice }}</div>
          </div>
        </td>
        <td>
          <div class="result">
            <h2>Результат</h2>
            <div class="result-text">{{ result }}</div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerChoice: "",
      computerChoice: "",
      result: "",
    };
  },
  methods: {
    getComputerChoice() {
      const choices = ["Камень", "ножницы", "бумага"];
      this.computerChoice = choices[Math.floor(Math.random() * 3)];
    },
    determineWinner() {
      if (this.playerChoice === this.computerChoice) {
        this.result = "Ничья!";
      } else if (
        (this.playerChoice === "Камень" &&
          this.computerChoice === "scissors") ||
        (this.playerChoice === "scissors" &&
          this.computerChoice === "бумага") ||
        (this.playerChoice === "бумага" && this.computerChoice === "Камень")
      ) {
        this.result = "Ты победил!";
      } else {
        this.result = "Компьютер победил.";
      }
    },
  },
  watch: {
    playerChoice() {
      this.getComputerChoice();
      this.determineWinner();
    },
  },
};
</script>

<style>
.game-container {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}

.choice-buttons,
.computer-choice,
.result {
  width: max-content;
  min-width: 200px;
  margin-left: 20px;
}
.choice-buttons button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.choice-buttons button::after {
  background-color: #011e02;
}
.result-text {
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  min-width: max-content;
}
.player-selection {
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  min-width: max-content;
}
</style>
