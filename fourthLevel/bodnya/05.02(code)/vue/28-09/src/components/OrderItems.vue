<template>
    <div class="order-items">
        <h3>Товары в заказе:</h3>
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.name }} x {{ item.quantity }}
                <span>{{ item.price * item.quantity }} руб.</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'OrderItems',
    props: ['items']
}
</script>