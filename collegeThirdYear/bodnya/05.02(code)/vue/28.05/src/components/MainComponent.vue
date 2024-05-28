<script>
import AssistantComponent from './AssistantComponent.vue'

export default {
  name: 'MainComponent',
  components: {
    AssistantComponent
  }
}
</script>
<template>
  <div class="main-component">
    <h1>Я главный</h1>
    <AssistantComponent />
  </div>
</template>

<style scoped>
.assistant-component {
  background-color: #e0e0e0;
  padding: 10px;
  border: 1px solid #bbb;
  text-align: center;
}
</style>
