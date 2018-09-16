<template>
  <div>
  	<el-collapse v-model="activeNames">
		  <el-collapse-item title="用户管理" name="1">
		    <el-form :inline="true" :model="searchModel" class="demo-form-inline">
				  <el-form-item label="用户名">
				    <el-input v-model="searchModel.username" placeholder="用户名"></el-input>
				  </el-form-item>
				  <el-form-item label="姓名">
				     <el-input v-model="searchModel.name" placeholder="姓名"></el-input>
				  </el-form-item>
				  <el-form-item label="状态">
				    <el-checkbox-group v-model="searchModel.state">
					      <el-checkbox label="1" >正常</el-checkbox>
					      <el-checkbox label="0">未激活</el-checkbox>
    				</el-checkbox-group>
				  </el-form-item>
				  <el-form-item>
				    <el-button type="primary" @click="searchUser">查询</el-button>
				  </el-form-item>
			</el-form>
		  </el-collapse-item>
		  <el-collapse-item title="查询结果" name="2">
		    <el-table :data="users" border style="width: 100%">
		        <el-table-column
      			type="selection"
      			width="55">
    			</el-table-column>
			    <el-table-column
			      align="center"
			      prop="username"
			      label="用户名">
			    </el-table-column>
			    <el-table-column
			      align="center"
			      prop="name"
			      label="姓名">
			    </el-table-column>
			    <el-table-column
			      align="center"
			      prop="email"
			      label="邮箱">
			    </el-table-column>
			    <el-table-column
			      align="center"
			      prop="birthday"
			      label="生日">
			    </el-table-column>
			    <el-table-column
			      align="center"
			      prop="sex"
			      label="性别">
			    </el-table-column>
			    <el-table-column
			      align="center"
			      prop="state"
			      label="状态">
			    </el-table-column>
  			</el-table>
  			<el-pagination style="float:right;"
		      @size-change="pageSizeChange"
		      @current-change="currentPageChange"
		      :current-page="currentPage"
		      :page-sizes="[10, 20, 30, 50]"
		      :page-size="100"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="total">
    		</el-pagination>
		  </el-collapse-item>
 
 
</el-collapse>
  </div>
</template>
<script>
export default {
			props:[],
			data () {
				return {
					activeNames: ['1','2'],
					searchModel:{
							username:"",
							name:"",
							state:['1']
					},
					users:[{
          				username: 'Anna',
          				name: '王小虎',
          				email: 'anna@du.com',
          				birthday:"1990-09-10",
          				sex:"男",
          				state:"正常"}],
          			total:10,
          			currentPage:1
				};
					},
			methods: {
				pageSizeChange(val){

					},
				currentPageChange(val){
					this.currentPage=val;
				},
				searchUser(){
					console.log(this.searchModel.state);
				}
				}
				};
</script>
<style>

</style>