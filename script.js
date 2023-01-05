const app = Vue.createApp({
  data() {
    return {
      legends: [
        {
          title: "The Legend of King Arthur",
          author: "Queen Arthur",
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
        {
          title: "Leonidas and the brave 300",
          author: "Leonidas",
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
