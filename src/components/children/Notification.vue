<template>
	<el-row>
		<el-button type="success" @click="open1">成功</el-button>
		<el-button type="warning" @click="open2">警告</el-button>
		<el-button type="info" @click="open3">消息</el-button>
		<el-button type="danger" @click="open4">错误</el-button>
    <br>
    <el-button type="danger" @click="add">+</el-button>
    <el-button type="danger" @click="red">-</el-button>
    <el-button>{{this.$store.state.count}}</el-button>
    <el-button type="danger" @click="asy">asy</el-button>

    <el-button type="danger" @click="open5">请求</el-button>
	</el-row>
</template>
<script>
export default{
	methods:{
    open5(){
      this.ajax({
        type:'post',
        url:'/post',
        data:{name:'bill',age:20},
        success:data=>{
          console.log(data)
        }
      })
    },
    asy(){
      this.$store.dispatch('incrementAsync')
    },
    red(){
      this.$store.commit({type:'decrement',amount:10})
    },
    add(){
      this.$store.commit({type:'increment',amount:10})
    },
		open1(){
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success'
      })
    },
    open2(){
      this.$notify({
        title: '警告',
        message: '这是一条警告的提示消息',
        type: 'warning'
      })
    },
    open3(){
      this.$notify.info({
        title: '消息',
        message: '这是一条消息的提示消息'
      })
    },
    open4(){
      this.$notify.error({
        title: '错误',
        message: '这是一条错误的提示消息'
      })
    }
	}
}
</script>