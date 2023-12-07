import { defineStore } from "pinia"

export const useCounterStore = defineStore('counter', {
  //state:
  state: () => {
    //return initali reactive State 
    return {
      count: 10
    }
  },
  //actions: biz logic : state mutation: reactive State 
  actions: {
    //methods 
    increment() {
      return this.count++
    }
  },
  //getters: Computed Properties
  getters: {
    value: state => state.count,
    doubleIt: state => state.count * 2
  }
})