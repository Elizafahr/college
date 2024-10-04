const userDataString = localStorage.getItem("userData") || "{}";
const userData = JSON.parse(userDataString);

Vue.createApp({
  data() {
    return {
      userData: userData,
    };
  },
}).mount("#app");
