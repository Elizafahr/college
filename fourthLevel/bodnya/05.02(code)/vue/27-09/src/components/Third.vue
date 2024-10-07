<template>
    <div>
      <h2>Личный кабинет пользователя</h2>
      <b>Имя (логин):</b> {{ username }} 
      <b>E-mail:</b> {{ email }} 
      <b>Роль:</b> {{ role }}
    </div>
  </template>
  
  <script>
  export default { 
    data() {
      return {
        username: '',
        email: '',
        role: ''
      }
    },
    mounted() {
      this.username = 'john_doe';
      this.email = 'john@example.com';
      this.role = 'admin';
    }
  }
  </script>
  