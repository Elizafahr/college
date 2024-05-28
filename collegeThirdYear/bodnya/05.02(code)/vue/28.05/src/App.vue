<template>
  <div id="app">
    <MainComponent />
    <SelfComponent />
  </div>
</template>

<script>
import MainComponent from './components/MainComponent.vue'
import SelfComponent from './components/SelfComponent.vue'

export default {
  name: 'App',
  components: {
    MainComponent,
    SelfComponent
  }
}
</script>

<style> 
</style>
