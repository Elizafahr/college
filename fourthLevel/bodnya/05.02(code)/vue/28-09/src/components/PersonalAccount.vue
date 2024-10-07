<template>
    <div id="con">
      <h2>Личный кабинет пользователя</h2>
      <b>Имя:</b> {{ name }}  
      <b>Логин:</b> {{ login }} 
      <b>E-mail:</b> {{ email }}  
    </div>
  </template>
  
  <script>
  export default {
    props: ['name', 'login', 'email'],  
    data() {
      return {
        name: 'Иван Иванов',
        login: 'ivanIvanov123',
        email: 'ivan@example.com'
      }
    }
  }
  </script>
  