<template>
    <div>
      <h2>Привет, {{ name }}!</h2>
      <p>Ваш логин: {{ login }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: 'Denis',
        login: 'denisDream'
      }
    }
  }
  </script>
  