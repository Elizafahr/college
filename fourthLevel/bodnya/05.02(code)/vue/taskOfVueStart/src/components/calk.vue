<template>
  <div  style="display: flex !important; flex-direction:column; gap: 30px">
    <h1>Калькулятор</h1>
    
    <div class="calculator">
      <div class="display">{{ displayExpression }}</div>
      <div class="buttons">
        <button class="btn" @click="clearExpression">C</button>
        <button class="btn" @click="appendToExpression('/')">/</button>
        <button class="btn" @click="appendToExpression('*')">*</button>
        <button class="btn" @click="appendToExpression('-')">-</button>
        <button class="btn" @click="appendToExpression('7')">7</button>
        <button class="btn" @click="appendToExpression('8')">8</button>
        <button class="btn" @click="appendToExpression('9')">9</button>
        <button class="btn" @click="appendToExpression('+')">+</button>
        <button class="btn" @click="appendToExpression('4')">4</button>
        <button class="btn" @click="appendToExpression('5')">5</button>
        <button class="btn" @click="appendToExpression('6')">6</button>
        <button class="btn" @click="calculate">=</button>
        <button class="btn" @click="appendToExpression('1')">1</button>
        <button class="btn" @click="appendToExpression('2')">2</button>
        <button class="btn" @click="appendToExpression('3')">3</button>
        <button class="btn" @click="appendToExpression('0')">0</button>
        <button class="btn" @click="appendToExpression('.')">.</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      displayExpression: '0'
    }
  },
  methods: {
    clearExpression() {
      this.displayExpression = '0'
    },
    appendToExpression(value) {
      if (this.displayExpression === '0') {
        this.displayExpression = value
      } else {
        this.displayExpression += value
      }
    },
    calculate() {
      try {
        this.displayExpression = eval(this.displayExpression).toString()
      } catch (error) {
        this.displayExpression = 'Error'
      }
    }
  }
}
</script>

<style>
.calculator {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  
}

.display {
  background-color: #f4f4f4;
  padding: 10px;
  text-align: right;
  font-size: 24px;
  margin-bottom: 10px;
  color: black;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}

.btn {
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
}

.btn:hover {
  background-color: #e0e0e0;
}
</style>
