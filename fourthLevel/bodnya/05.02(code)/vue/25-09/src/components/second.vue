<template>
  <div>
    <h1>Жизненный цикл компонента</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'LifecycleComponent',
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    console.log('Компонент монтирован')
  },
  beforeMount() {
    console.log('Перед монтированием')
  },
  created() {
    console.log('Компонент создан')
  },
  beforeCreate() {
    console.log('Перед созданием')
  },
  beforeUpdate() {
    console.log('Перед обновлением')
  },
  updated() {
    console.log('Компонент обновлен')
  }
}
</script>
