/*
console.log(window.vue)
import Vue from 'vue'
import App from './App.vue'

// Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

*/

/* complete version
new Vue({
  el:'#app',
  template: '
  <div class="red">
    {{n}}
    <button @click="add">+1</button>
  </div>
  ',
  data:{n:0},
  methods:{
    add(){
    this.n +=1
    }
}
})
 */

/*
* imcomplete version
// eslint-disable-next-line no-undef
new Vue({
  el: '#app',
  data: {
    n: 0,
    message: 'Dam Vue!',
  },
  render(h) {
    return h('div', // 创建一个 div，div 里面是 n 和 button
    [this.n + this.message + ' ', h('button', { on: {click: this.add}},
      // button 的事件监听是 点击后触发 add方法
    ' +1s')]) 、、button 里面(的内容)是 +1s
  },
  methods: {
    add() {
      this.n += 1
    }
  }
})

console.dir(window.Vue);
 */

import Demo from "./Demo.vue"
console.log(Demo)
console.log(Demo.render.toString())
// eslint-disable-next-line no-undef
new Vue({
  el: "#app",
  render(h) {
    return h(Demo)
  }
})