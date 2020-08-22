console.log(window.vue)
const Vue = window.Vue
Vue.config.productionTip = false

/*
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

/*
import Demo from "./Demo.vue"
console.log(Demo)
console.log(Demo.render.toString())
*/

/*
// eslint-disable-next-line no-undef
new Vue({
  el: "#app",
  render(h) {
    console.log(h(Demo))
    return h(Demo)
  } // 渲染`<template>`中的内容
})
 */

// eslint-disable-next-line no-undef
/*
new Vue({
  render(h) {
    return h(Demo)
  }
}).$mount('#app')
*/

/*
const vm = new Vue({
  /!*
  data: {
    n: 0
  },
  *!/
  data() {
    return {
      n: 0,
      array: [1,2,3,4,5,6,7,8],
    }
  },
  template: `
    <div class="red">
      {{n}}
    <button @click="add">+1s</button>
    <hr>
      {{array.filter(i => i % 2 === 0)}}
    <hr>
      {{filterEven(array)}}
    <hr>
      {{filterOdd()}}
    </div>
  `,
  methods: {
    add() {
      this.n+=1
    },
    filterEven(array) {
      return array.filter(i => i % 2 === 0)
    },
    filterOdd() {
      console.log('执行了 filter 函数')
      return this.array.filter(i => i % 2 !== 0)
    },
  },
})
vm.$mount('#xmas')
*/

// 组件
// Vue.component
/*
Vue.component('Demo2', {
  template: `
    <div>demo222</div>
  `,
})

// 单文件组件
import Demo from './Demo.vue'
import App from './App.vue'
const vm = new Vue({
  components: {
    _Demo: Demo,
    XmasDemo: {
      data() {
        return {
          n: 0
        }
      },
      template: `
        <div>
          demo333's n
          <span>{{n}}</span>
        </div>
      `,
    },
    App,
  },
  data() {
    return {
      n: 0,
      array: [1,2,3,4,5,6,7,8],
    }
  },
  template: `
    <div class="red">
      {{n}}
      <button @click="add">+1s</button>
      <Demo2/>
      <App/>
      <hr>
        {{array.filter(i => i % 2 === 0)}}
      <hr>
        {{filterEven(array)}}
      <hr>
        {{filterOdd()}}
      <_Demo/>
      <XmasDemo/>
      <App/>
    </div>
  `,
  methods: {
    add() {
      this.n+=1
    },
    filterEven(array) {
      return array.filter(i => i % 2 === 0)
    },
    filterOdd() {
      console.log('执行了 filter 函数')
      return this.array.filter(i => i % 2 !== 0)
    },
  },
})
vm.$mount('#xmas')
*/

// 全局组件
/*
Vue.component("button-counter", {
  data() {
    return {
      count: 0
    };
  },
  template: `
    <div>
      <button @click="add">
        You clicked me {{ count }} times.
      </button>
      <button @click="add">
        You clicked him {{ count }} times.
      </button>
      <button @click="add">
        You clicked her {{ count }} times.
      </button>
    </div>
  `,
  methods: {
    add() {
      this.count += 1
    }
  }
});

new Vue({
  template: `
      <div>
        <button-counter/>
        <button-counter/>
        <button-counter/>
      </div>
  `,
}).$mount('#xmas');
*/

// 四个钩子 created 创
// 四个钩子 mounted 挂
// 四个钩子 updated 更
/*
new Vue({
  data() {
    return {
      n: 0
    }
  },
  template: `
      <div>
        {{n}}
        <button @click="add">+1</button>
      </div>
  `,
  created() {
    // debugger
    console.log('已出现在内存中，未出现在页面中')
  },
  mounted() {
    // debugger
    console.log('已出现在页面中')
  },
  updated() {
    console.log('已点击 更新页面')
    console.log(this.n)
  },
  destroyed() {
    console.log('已点击 更新页面')
    console.log(this.n)
  },
  methods: {
    add() {
      this.n += 1
    },
  }
}).$mount('#xmas');
*/

// 四个钩子 destroyed(unmounted vue3.x) 消
/*

import Destroy from './Destroy.vue'

new Vue({
  components: {Destroy},
  data() {
    return {
      isVisible: true,
    }
  }
  ,
  template: `
      <div>
        <button @click="toggle">toggle</button>
        <hr>
        <Destroy v-if="isVisible === true"/>
        <hr>
      </div>
  `,
  methods: {
    toggle() {
      this.isVisible = !this.isVisible
    }
  },
  // render: h => h(Destroy)
}).$mount('#xmas');
*/

// props
import Props from './Props-demo'
new Vue({
  components: {Props},
  data() {
    return {
      n: 0,
    }
  },
  template: `
    <div>
      {{n}}
      <Props message="我好了 props"/>
      <Props :message="n"/>
      <Props :message="0"/>
      <Props :message="true"/>
      <Props :message="null"/>
      <Props :message="undefined"/>
      <Props :message="20n"/>
      <Props :message="{}"/>
    </div>
  `,
  methods: {
    add() {
      this.n += 1
    }
  },
}).$mount('#xmas');
// props 方法
new Vue({
  components: {Props},
  data() {
    return {
      n: 0,
    }
  },
  template: `
    <div>
    {{n}}
    <Props :fn="add" :message="n"/>
    </div>
  `,
  methods: {
    add() {
      this.n += 1
    }
  },
}).$mount('#xmas2');

