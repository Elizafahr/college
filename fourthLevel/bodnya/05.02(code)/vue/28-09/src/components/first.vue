<template>
  <div class="order-item">
    <h2>{{ order[1] }}</h2>
    <p>Покупатель: {{ order[2] }}</p>
    <p>Цвет: {{ order[3] }}</p>
    <p>Страна происхождения: {{ order[4] }}</p>
    <p>Доступность: {{ order[5] }}</p>
    <p>Размер: {{ order[6] }}</p>
    <p>Цена: {{ order[7] }}</p>
    <img :src="order[8]" alt="Изображение товара" />
  </div>
</template>

<script>
export default {
  props: {
    order: Array,
  },
};
</script>

<style scoped>
.order-item {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
