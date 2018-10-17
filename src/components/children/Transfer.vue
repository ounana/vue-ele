<template>
	<el-transfer v-model="value" :data="data"></el-transfer>
</template>
<script>
export default{
	data(){
		return{
			data: this.generateData(),
      value: [1, 4, 8]
		}
	},
	methods:{
		generateData(){
			const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${ i }`,
          disabled: i % 4 === 0
        })
      }
      return data
		}
	}
}
</script>