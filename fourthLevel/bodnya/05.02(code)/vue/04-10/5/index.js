const app = Vue.createApp({
    data() {
        return {
          quotes: [
            {
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore facere enim harum officia dicta ea doloribus eos voluptas neque asperiores quaerat dignissimos mollitia at, voluptatem veniam, ipsum nemo, voluptates maxime!",
            },
            {
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore facere enim harum officia dicta ea doloribus eos voluptas neque asperiores quaerat dignissimos mollitia at, voluptatem veniam, ipsum nemo, voluptates maxime!",
            },
            {
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore facere enim harum officia dicta ea doloribus eos voluptas neque asperiores quaerat dignissimos mollitia at, voluptatem veniam, ipsum nemo, voluptates maxime!",
            },
          ],
          showQuotes: true,
        };
      },
      mounted() {
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (event) => {
        const href = event.target.getAttribute("href");
        const id = event.target.id;
        const className = event.target.className;

        console.log("Атрибуты ссылки:");
        console.log("ID:", id);
        console.log("Классы:", className);
        console.log("Href:", href);

        if (!event.target.hasAttribute("prevent-modifier")) {
          event.preventDefault();

          console.log("Ссылка не имеет модификатора prevent. Данные ссылки:");
          console.log("ID:", id);
          console.log("Классы:", className);
          console.log("Href:", href);
        } else {
          console.log(
            "Ссылка имеет модификатор prevent. Не выполняется предотвращение перехода."
          );
        }
      });
    });
  },
  methods: {
    fClick: function (event) {
       if (event.target.id == "show") {
         document.querySelector("#bl").style.display = "";
      } else {
         document.querySelector("#bl").style.display = "none";
      }
    },
  },
}).mount("#app");
