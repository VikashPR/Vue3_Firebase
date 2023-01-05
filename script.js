const app = Vue.createApp({
  data() {
    return {
      title:
        "The Legend of King Arthur: The Sword in the Stone and the Lady of the Lake",
      author: "T. H. White",
      age: 90,
    };
  },
  methods: {
    updateTitle(title) {
      this.title = title;
    },
  },
});

app.mount("#app");
