const app = Vue.createApp({
  data() {
    return {
      title:
        "The Legend of King Arthur: The Sword in the Stone and the Lady of the Lake",
      author: "T. H. White",
      age: 90,
      showBook: true,
      x: 0,
      y: 0,
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
      handleMouseMove(e) {
          this.x = e.offsetX;
          this.y = e.offsetY;
    }
  },
});

app.mount("#app");
