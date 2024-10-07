<template>
    <div id="app">
      <img :src="randomImage" alt="Random Image">
    </div>
  </template>
  
  <script>
  export default {
    name: 'image',
    data() {
      return {
        dynamicIMG: ["image-1.jpg", "image-2.jpg", "image-3.jpg"],
        randomImage: ''
      }
    },
    mounted() {
      this.updateRandomImage()
    },
    methods: {
      updateRandomImage() {
        const index = Math.floor(Math.random() * this.dynamicIMG.length)
        this.randomImage = this.dynamicIMG[index]
      }
    }
  }
  </script>
  