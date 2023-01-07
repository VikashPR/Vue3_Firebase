const app = Vue.createApp({
  data() {
    return {
      legends: [
        {
          title: "The Legend of King Arthur",
          author: "Queen Arthur",
          img: "./assets/1.png",
          isFav: true,
        },
        {
          title: "The Legend of Achilles and the Trojan War",
          author: "Homer",
          img: "./assets/2.jpeg",
          isFav: true,
        },
        {
          title: "Avatar the way of water",
          author: "James Cameron",
          img: "./assets/3.webp",
          isFav: false,
        },
        {
          title: "Avatar the Last Airbender",
          author: "Aang and Fire Lord Ursa",
          img: "./assets/4.jpg",
          isFav: true,
        },
        {
          title: "Leonidas and the brave 300",
          author: "Leonidas",
          img: "./assets/5.webp",
          isFav: true,
        },
      ],
      url: "https://VikashPR.com",
      age: 90,
      showlegends: true,
      x: 0,
      y: 0,
    };
  },
  methods: {
    updateTitle(title) {
      this.legends[0].title = title;
    },
    togglelegends() {
      this.showlegends = !this.showlegends;
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
    },
  },
});

app.mount("#app");
