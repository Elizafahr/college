<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import first from "./components/first.vue";
import PersonalAccount from "./components/PersonalAccount.vue";
import Third from "./components/Third.vue";
</script>

<template>
  <main>
    <first />

    <div class="secApp">
      <h1>Основной компонент</h1>
      <PersonalAccount name="Имя" login="Логин" email="Email" />
    </div>

    <Third />
  </main>
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
