import {createStore} from "vuex";

export default createStore({
  state() {
    return {
      price: 1600
    }
  },
  mutations: {
    addedPrice (state, payload) {
      this.state.price = payload
    }
  }
})
