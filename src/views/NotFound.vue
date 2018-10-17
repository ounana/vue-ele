<template>
	<div id="notfound">
		<h1>Not Found</h1>
		<p>The requested URL was not found on this server.</p>
	</div>
</template>
<script>
export default{
	data(){
		return{

		}
	},
	computed:{
		path:function(){
			console.log(this.$route)
			return this.$route
		}
	}
}
</script>