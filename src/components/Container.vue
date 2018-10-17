<template>
	<el-container>
	  <el-header><Header/></el-header>
	  <el-container>
	    <el-aside width="200px" :style="{height:asideHeight+'px'}">
	    	<el-scrollbar style="height: 100%;"><Nav/></el-scrollbar>
	    </el-aside>
	    <el-main>
	    	<transition name="fade" mode="out-in" :duration="{ enter: 500, leave: 300 }">
	    		<router-view></router-view>
	    	</transition>
	    </el-main>
	  </el-container>
	</el-container>
</template>
<script>
import Nav from './public/Nav.vue'
import Header from './public/Header.vue'
export default{
	name:'Home',
	data(){
		return{
			asideHeight:window.innerHeight-60
		}
	},
	computed:{
	},
	mounted:function(){
		// window.addEventListener('resize',()=>{
		// 	this.asideHeight=window.innerHeight-60
		// })
		window.addEventListener('resize',this.throttle(()=>{
			this.asideHeight=window.innerHeight-60
		},100,200))
	},
	components:{
		Nav,Header
	}
}
</script>
<style scoped>
	.el-header{padding: 0;}
	.el-aside{
		background-color: #D3DCE6;
	}
	.el-main{
		background-color: #E9EEF3;
		padding: 10px;
	}
	.el-scrollbar__wrap{overflow-x: hidden;}
</style>
