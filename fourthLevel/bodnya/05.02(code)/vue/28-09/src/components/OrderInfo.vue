<template>
    <div class="order-info">
        <h2>Информация о заказе</h2>
        <p>Имя пользователя: {{ userName }}</p>
        <p>Дата заказа: {{ orderDate }}</p>
        <p>Общая сумма заказа: {{ totalAmount }} руб.</p>
        <p>Цена с учетом скидки: {{ discountedPrice }} руб.</p>
    </div>
</template>

<script>
export default {
    name: 'OrderInfo',
    props: ['userName', 'orderDate', 'items', 'discount'],
    computed: {
        totalAmount() {
            return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        },
        discountedPrice() {
            const discountPercentage = this.discount / 100;
            return Math.round(this.totalAmount * (1 - discountPercentage));
        }
    }
}
</script>