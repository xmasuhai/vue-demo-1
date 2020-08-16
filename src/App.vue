<template>
  <div id="app">
    {{n}}
    <button @click="add">+2</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      n: 0,
    };
  },
  methods: {
    add() {
      this.n += 2;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
