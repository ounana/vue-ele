<template>
	<div>
		<h1>{{count}}</h1>
	</div>
</template>
<script>
export default{
	data(){
		return{
			msg:'Hello World'
		}
	},
	computed:{
		count(){
			return this.$store.state.count
		}
	}
}
</script>