const app = Vue.createApp({
  data() {
    return {
      title:
        "The Legend of King Arthur: The Sword in the Stone and the Lady of the Lake",
      author: "T. H. White",
      age: 90,
      showBook: true,
    };
  },
  methods: {
    updateTitle(title) {
      this.title = title;
    },
    toggleBooks() {
      this.showBook = !this.showBook;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
  },
});

app.mount("#app");
