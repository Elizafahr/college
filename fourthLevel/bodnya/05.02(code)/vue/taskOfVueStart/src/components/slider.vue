<template>
  <h1>Разработать слайдер по таймеру.</h1>
  <div class="slider">
    <div class="slide" v-for="(slide, index) in slides" :key="index" :class="{ 'active': currentSlide === index }">
      <img :src="slide.image" :alt="slide.title">
      <div class="slide-content">
        <h2>{{ slide.title }}</h2>
        <p>{{ slide.description }}</p>
      </div>
    </div>
    <div class="controls">
      <button @click="prevSlide" :disabled="currentSlide === 0">&lt;</button>
      <button @click="nextSlide" :disabled="currentSlide === slides.length - 1">&gt;</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          image: '../1.jpg',
          title: 'Slide 1',
          description: 'This is the first slide.'
        },
        {
          image: '../2.jpg',
          title: 'Slide 2',
          description: 'This is the second slide.'
        },
        {
          image: '../1.jpg',
          title: 'Slide 3',
          description: 'This is the third slide.'
        }
      ],
      timer: null
    }
  },
  mounted() {
    this.startTimer()
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.nextSlide()
      }, 5000)
    },
    stopTimer() {
      clearInterval(this.timer)
    }
  }
}
</script>

<style scoped>
.slider {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.slide.active {
  opacity: 1;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.controls {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

.controls button {
  font-size: 24px;
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.controls button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
