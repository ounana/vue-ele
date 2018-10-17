<template>
	<el-row>
		<el-col :span="12" style="padding-left: 20px;">
			<el-breadcrumb separator-class="el-icon-arrow-right" style="line-height: 60px;">
				<el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
			  <el-breadcrumb-item v-for="item in routeList" :key="item.id">{{item}}</el-breadcrumb-item>
			</el-breadcrumb>
		</el-col>
		<el-col :span="12">
			<el-menu
			  class="el-menu-demo"
			  mode="horizontal">
			  <el-submenu index="66">
			    <template slot="title">
			    	<i class="el-icon-tickets"></i><span>admin,下午好</span>
			    </template>
			    <el-menu-item index="66-1">账号信息</el-menu-item>
			    <el-menu-item index="66-2">修改密码</el-menu-item>
			    <el-menu-item index="66-3">退出</el-menu-item>
			  </el-submenu>
			</el-menu>
		</el-col>
	</el-row>
</template>
<script>
export default{
	name:'Header',
	data(){
		return {
		}
	},
	computed:{
		routeList:function(){
			return this.$route.name.split('/')
		}
	},
	methods:{
		getRoutePath(){
      this.realList = this.$route.meta.routeList;
    }
	}
}
</script>
<style scoped>
	/*.el-menu--horizontal>.el-menu-item{float: right;}*/
	.el-menu--horizontal>.el-submenu{float: right;}
</style>