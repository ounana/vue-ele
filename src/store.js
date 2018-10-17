import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    count: 0
  },
  mutations:{
    //同步提交数据
    increment(state,payload){
      state.count+=payload.amount
    },
    decrement(state,payload){
      state.count-=payload.amount
    },
  },
  actions:{
    //异步提交数据
    increment(context){
      context.commit({type:'increment',amount:10})
    },
    incrementAsync({commit}){
      setTimeout(()=>{
        commit({type:'increment',amount:10})
      },1000)
    }
  },
  getters:{
    doneTodos:state=>{
      return state.todos.filter(todo=>todo.done)
    }
  }
})
