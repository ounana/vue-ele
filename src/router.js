import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Login from './views/Login.vue'
import Container from './components/Container.vue'

import Home from './components/children/Home.vue'
import Table from './components/children/Table.vue'
import MsgBox from './components/children/MsgBox.vue'
import DateText from './components/children/DateText.vue'
import Notification from './components/children/Notification.vue'
const Transfer=() => import(/* webpackChunkName: "transfer" */ './components/children/Transfer.vue')

export default new Router({
  base: process.env.BASE_URL,
  routes: [{
    path:'*',
    redirect:'/',
  },{
    name:'login',
    path:'/login',
    component:Login
  },{
    name: 'container',
    path: '/',
    component:Container,
    redirect:'/home',
    children:[{
      name:'首页',
      path:'home',
      component:Home,
    },{
      name:'系统设置/模块管理',
      path:'mkgl',
      component:Table
    },{
      name:'系统设置/用户管理',
      path:'yhgl',
      component:MsgBox,
    },{
      name:'系统设置/数据字典',
      path:'sjzd',
      component:DateText,
    },{
      name:'系统设置/角色管理',
      path:'jsgl',
      component:Notification,
    },{
      name:'基本资料建档/公司资料',
      path:'gszl',
      component:Transfer,
    },

    {
      name:'入库作业/申请/批次建立',
      path:'pcjl',
      component:Transfer,
    }]
  }]
})