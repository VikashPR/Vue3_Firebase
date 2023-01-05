const app = Vue.createApp({
  data() {
    return {
      books: [
        {
          title: "The Legend of King Arthur",
          author: "King Arthur",
        },
        {
          title: "The Legend of Achilles and the Trojan War",
          author: "Homer",
        },
        {
          title: "Avatar the way of water",
          author: "James Cameron",
        },
        {
          title: "Avatar the Last Airbender",
          author: "Aang and Fire Lord Ursa",
        },
      ],
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
