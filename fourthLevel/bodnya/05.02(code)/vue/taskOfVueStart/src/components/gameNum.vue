<template>
  <div   style="margin: 50px auto;" >
    <h1>Угадай число</h1>
    <p>Компьютер загадал число от 1 до 100. Попробуйте угадать его!</p>
    <div>
      <input v-model.number="guess" type="number" placeholder="Введите число" />
      <button @click="checkGuess">Проверить</button>
    </div>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      secretNumber: Math.floor(Math.random() * 100) + 1,
      guess: null,
      message: ''
    }
  },
  methods: {
    checkGuess() {
      if (this.guess === this.secretNumber) {
        this.message = 'Вы угадали! Поздравляем!'
      } else if (this.guess < this.secretNumber) {
        this.message = 'Загаданное число больше.'
      } else {
        this.message = 'Загаданное число меньше.'
      }
    }
  }
}
</script>
 
<style scoped>
 
  input, button {
   padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 10px;
}

 
</style>
