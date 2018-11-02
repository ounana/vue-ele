import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    count: 0,
    todos:[{
      id:1,text:'...',done:true
    },{
      id:2,text:'...',done:false
    },{
      id:3,text:'...',done:true
    }]
  },
  getters:{
    //用来过滤数据，做数据提前操作
    doneTodos:state=>{
      return state.todos.filter(todo => todo.done)
    }
  },
  mutations:{
    //同步提交数据，使用commit提交
    increment(state,payload){
      state.count+=payload.amount
    },
    decrement(state,payload){
      state.count-=payload.amount
    },
  },
  actions:{
    //异步提交数据，使用dispatch分发
    increment(context){
      context.commit({type:'increment',amount:10})
    },
    incrementAsync(context){
      setTimeout(()=>{
        context.commit({type:'increment',amount:10})
      },1000)
    }
  }
})
