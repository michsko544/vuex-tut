import { reactive, readonly } from "vue"

const state = reactive({
  counter: 0,
  colorCode: "blue"
})

const methods = {
  increaseCounter: () => ++state.counter,
  decreaseCounter: () => --state.counter,
  setColorCode: (val) => state.colorCode=val
}

const getters = {
  counterSquared: () => state.counter*state.counter
}

export default {
  state: readonly(state),
  methods,
  getters
}