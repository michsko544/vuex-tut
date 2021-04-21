import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    colorCode: "blue"
  },
  mutations: {
    incrementCount(state){
      ++state.count
    },
    increaseCount(state, value){
      state.count += value
    },
    decrementCount(state){
      --state.count
    },
    decreaseCount(state, value){
      state.count -= value
    },
    setColorCode(state, value){
      state.colorCode = value
    }
  },
  actions: {
    increaseRandomCount({commit}){
      fetch("https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new")
        .then(response => response.json())
        .then(data=>{
          commit("increaseCount", data)
        });
    },

    decreaseRandomCount({commit}){
      fetch("https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new")
        .then(response => response.json())
        .then(data=>{
          commit("decreaseCount", data)
        });
    }
  },
  getters: {
    countSquared(state){
      return state.count * state.count
    }
  },
  modules: {
  }
})
