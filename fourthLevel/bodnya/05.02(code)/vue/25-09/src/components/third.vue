<template>
    <div>
      <h1>User Data:</h1>
      <pre v-if="userData" v-text="JSON.stringify(userData, null, 2)"></pre>
       
  
      <h1>Order Data:</h1>
      <pre v-if="orderData" v-text="JSON.stringify(orderData, null, 2)"></pre>
      <table v-if="orderData && orderData.length > 0">
        <tr v-for="(orderItem, index) in orderData" :key="index">
          <td>{{orderItem.orderId}}</td>
          <td>{{orderItem.orderDate}}</td>
        </tr>
      </table>
     
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
    computed: {
      formattedUserData() {
        return JSON.stringify(this.userData, null, 2);
      },
      formattedOrderData() {
        return JSON.stringify(this.orderData, null, 2);
      }
    },
    methods: {
      displayUserData() {
        return this.formattedUserData;
      },
      displayOrderData() {
        return this.formattedOrderData;
      }
    }
  }
  </script>
  