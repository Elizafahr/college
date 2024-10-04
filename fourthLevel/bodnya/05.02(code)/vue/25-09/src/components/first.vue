<template>
  <div class="author-info">
    <div class="">
      <h2>Автор</h2>
      <p>Имя: {{ author.name }}</p>
      <p>Год рождения: {{ author.birthYear }}</p>

    </div>

    <div class="">
      <h2>Книги автора</h2>
      <ul>
        <li v-for="(book, index) in author.books" :key="index">{{ book }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthorInfoComponent',
  data() {
    return {
      author: {
        name: "Иван Иванов",
        birthYear: 1990,
        books: ["Книга 1", "Книга 2", "Книга 3"]
      }
    }
  }
}
</script>

<style scoped>
.author-info {
  display: flex;
  gap: 50px;
}

h2 {
  margin-bottom: 20px;
}

ul {
  padding-left: 0;
}

li {
  margin-bottom: 10px;
}
</style>
