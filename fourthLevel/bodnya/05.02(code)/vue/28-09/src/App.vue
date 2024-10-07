<script>
import { orders } from "./components/orders.js";
import OrderInfo from "./components/OrderInfo.vue";
import OrderItems from "./components/OrderItems.vue";

export default {
  name: "App",
  components: {
    OrderInfo,
    OrderItems,
  },
  data() {
    return {
      orders: [],
      dynamicIMG: ["1.jpg", "2.jpg"],
      randomImage: "",

      user: {
        userName: "Иван Иванов",
        orderDate: "10.03.2024",
        items: [
          { id: 1, name: "Продукт А", price: 100, quantity: 2 },
          { id: 2, name: "Продукт Б", price: 200, quantity: 1 },
          { id: 3, name: "Продукт В", price: 50, quantity: 3 },
        ],
        discount: 15,
      },
    };
  },
  mounted() {
    this.orders = orders;
    this.updateRandomImage();
  },
  methods: {
    updateRandomImage() {
      const index = Math.floor(Math.random() * this.dynamicIMG.length);
      this.randomImage = this.dynamicIMG[index];
    },
  },
};
</script>

<template>
  <div id="app">
    <h1>Заказы</h1>
    <div v-for="(order, index) in orders" :key="index">
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
    </div>

    <h1>Случ картинка</h1>
    <img :src="randomImage" alt="Random Image" />

    <h1>Заказ пользователя</h1>
    <order-info
      :userName="user.userName"
      :orderDate="user.orderDate"
      :items="user.items"
      :discount="user.discount"
    ></order-info>
    <order-items :items="user.items"></order-items>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
