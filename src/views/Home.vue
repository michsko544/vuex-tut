<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 :style="{ color: store.state.colorCode }">
      {{store.state.counter}}
    </h1>
    <h1>
      {{store.state.counter}}
      <sup>2</sup>=
      {{store.getters.counterSquared()}}
    </h1>
    <div>
      <button @click="store.methods.decreaseCounter">-</button>
      <button @click="store.methods.increaseCounter">+</button>
    </div>
    <input type="text" placeholder="Enter color code" v-model="colorCode">
  </div>
</template>

<script>
import { inject, computed } from "vue"

export default {
  name: 'Home',
  setup(){
    const store = inject("store")

    const colorCode = computed({
      get(){
        return store.state.colorCode
      },
      set(val){
        store.methods.setColorCode(val)
      }
    })

    return {store,colorCode}
  }
}
</script>
