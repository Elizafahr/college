<template>
    <div  >
        <h1>User Data:</h1>
        <pre>{{ displayUserData() }}</pre>

        <h1>Order Data:</h1>
        <pre>{{ displayOrderData() }}</pre>
    </div>
</template>

<script>
import data from './data.json';

export default {
  data() {
    return {
      userData: data.dataUser,
      orderData: data.dataOrder
    }
  },
  methods: {
    displayUserData() {
      return JSON.stringify(this.userData, null, 2);
    },
    displayOrderData() {
      return JSON.stringify(this.orderData, null, 2);
    }
  }
}
</script>
