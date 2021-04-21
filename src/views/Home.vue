<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 :style="{ color: $store.state.colorCode }">
      {{$store.state.count}}
    </h1>
    <h1>
      {{$store.state.count}}
      <sup>2</sup>=
      {{$store.getters.countSquared}}
    </h1>
    <div>
      <button @click="$store.dispatch('decreaseRandomCount')">-</button>
      <button @click="$store.dispatch('increaseRandomCount')">+</button>
    </div>
    <input type="text" placeholder="Enter color code" v-model="colorCode">
  </div>
</template>

<script>

export default {
  name: 'Home',
  computed: {
    colorCode: {
      get(){
        return this.$store.state.colorCode
      },
      set(newValue){
        this.$store.commit("setColorCode", newValue)
      }
    }
  }
}
</script>
