<template>
  <div>
  	<el-row :gutter="20">
		  <el-col :span="6">
		  		<div class="grid-content bg-purple">一级分类</div>
		  </el-col>
		  <el-col :span="6">
		  		<div class="grid-content bg-purple">二级分类</div>
		  </el-col>
		  <el-col :span="6">
		  		<div class="grid-content bg-purple">三级分类</div>
		  </el-col>
		  <el-col :span="6">
		  		<div class="grid-content bg-purple">四级分类</div>
		  </el-col>
	</el-row>
  </div>
</template>
<script>
export default {
	props:[],
	data () {
		return {};
			},
	methods: {

	},
};
</script>
<style>
.el-row {

    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    text-align: center;
    min-height: 30px;
    line-height: 30px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>