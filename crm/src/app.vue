<template>
	<div>
		<el-container>
  				<el-header>
  					<el-menu  class="el-menu-demo title-menu" mode="horizontal" >
  						<el-menu-item v-for="item in items" :index="item.id">{{item.itemName}}</el-menu-item>
					</el-menu>
  				</el-header>
				<el-container>
				    <el-aside width="200px">
				    	<el-menu default-active="2" class="el-menu-vertical-demo"
      					text-color="#333"
      					active-text-color="#409EFF">
						      <el-menu-item index="9">用户管理</el-menu-item>
						      <el-menu-item index="13">订单管理</el-menu-item>
						      <el-menu-item index="44">商品管理</el-menu-item>
    				</el-menu>
				    </el-aside>
				    <el-main>
				    	<!-- 留坑 -->
        				<router-view></router-view>
				    </el-main>
				</el-container>
		</el-container>
	</div>
</template>
<script>
import $ from 'jquery';
export default{
	data(){
		return{
			items:[]
		}
	},
	created(){
		var _this=this;
		$.get('/api',function(res){
			_this.items=res;
            console.log(res);
		})
	}
}

</script>

<style>
	.el-header{
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .title-menu{
  	margin-left:200px;
  }
  
  .el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>