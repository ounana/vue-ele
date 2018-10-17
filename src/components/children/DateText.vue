<template>
	<el-row>
    <el-form ref="form" :model="form">
	    <el-form-item label="即时配送">
		    <el-switch v-model="form.delivery"></el-switch>
		  </el-form-item>
		  <el-form-item label="日期">
		    <el-date-picker
		      v-model="form.date"
		      type="date"
		      placeholder="选择日期">
		    </el-date-picker>
		  </el-form-item>
		</el-form>
	</el-row>
</template>
<script>
export default{
	name:'DateText',
	data(){
		return{
			form:{
				delivery:true,
				date:''
			}
		}
	}
}
</script>