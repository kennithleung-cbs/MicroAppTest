<template>
  <div>
    <h3>Giphy Trending - App3</h3>
    <ul>
      <li v-for="item in items" :key="item.id">
        <div class="thumbnail"><img :src="item.image" :alt="item.title" /></div>
        <div class="title">{{ item.title }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      default: () => {
        return 0;
      },
    },
  },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=KzNo5Jmx60C5DTS1qBZuwygBmSfDifB6&limit=5&rating=g&offset=${this.page * 5}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.items = res.data.map((v) => {
          return {
            id: v.id,
            title: v.title,
            image: v.images.fixed_width.url,
          };
        });
      });
  },
};
</script>

<style scoped>
ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

ul li {
    width: 20%;
}

ul li .title {
    word-wrap: break-word;
}
</style>