<template>
  <div class="red">
    {{n}}
    <br />
    DemoDam
    <br />
    <button @click="add">+1s</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 0,
    };
  },
  /*
  render(h) {
    return h("div");
  },
   */
  methods: {
    add() {
      this.n += 1;
    },
  },
};
</script>

<style scoped>
.red {
  color: lightcoral;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a,
button {
  color: #4fc08d;
}

button {
  background: none;
  border: solid 1px;
  border-radius: 2em;
  font: inherit;
  padding: 0.75em 2em;
  outline:none;
}
button:hover {
  cursor: pointer;
  outline:none;
  }

</style>