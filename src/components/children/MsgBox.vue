<template>
  <el-row>
    <el-button type="primary" @click="open">点击打开 Message Box</el-button>
    <br><br>
    <el-alert show-icon title="成功提示的文案" type="success"></el-alert>
    <el-alert show-icon title="错误提示的文案" type="error"></el-alert>
    <el-button type="primary" @click="openFullScreen2">服务方式</el-button>
    <el-color-picker v-model="color1"></el-color-picker>
  </el-row>
</template>
<script>
export default {
  data(){
    return{
      loading:null,
      color1:'#409EFF',
    }
  },
  methods:{
    open(){
      this.$alert('Hello VueJs','Title',{
        type:'warning',
        confirmButtonText:'确定'
      }).then(()=>{
      }).catch(()=>{
      })
    },
    openFullScreen2(){
      this.loading=this.$loading({
        lock: true,
        text: '程序执行中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      setTimeout(()=>{
        this.loading.close()
      },2000)
    }
  }
}
</script>