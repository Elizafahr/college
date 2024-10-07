const users = [
  {
    id: 1,
    name: "Иван Иванов",
    email: "ivan@example.com",
    age: 30,
    city: "Москва",
  },
  {
    id: 2,
    name: "Мария Петрова",
    email: "maria@example.com",
    age: 28,
    city: "Санкт-Петербург",
  },
  {
    id: 3,
    name: "Алексей Сидоров",
    email: "alexei@example.com",
    age: 35,
    city: "Екатеринбург",
  },
  {
    id: 4,
    name: "Анна Кузнецова",
    email: "anna@example.com",
    age: 25,
    city: "Нижний Новгород",
  },
  {
    id: 5,
    name: "Пavel Kuznetsov",
    email: "pavel@example.com",
    age: 32,
    city: "Казань",
  },
];

 const app = Vue.createApp({
  data() {
    return {
      person: {
        name: "",
        age: 0,
        city: "",
      },
      options: [
        { id: "1", value: "1", text: "Вариант 1" },
        { id: "2", value: "2", text: "Вариант 2" },
        { id: "3", value: "3", text: "Вариант 3" },
      ],
      selectedOption: null,
    };
  },

  mounted() {
    localStorage.setItem("userData", JSON.stringify(users));
  },
  methods: {
    addData() {
      const conElement = document.querySelector("#con");
      conElement.innerHTML = `
        <h2>${this.person.name}</h2>
        <p>Age: ${this.person.age}</p>
        <p>City: ${this.person.city}</p>
      `;
    },

    getImagePath(option) {
      const images = {
        1: "1.jpg",
        2: "2.jpg",
        3: "3.jpg",
      };
      return images[option] || "";
    },
  },
}).mount("#app");
