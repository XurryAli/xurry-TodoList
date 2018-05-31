<template>
	<div class="todo-footer">
		<div class="clearAll clearfix"><el-button type="primary" size="small" round @click="clearAllList">清空已完成事件</el-button></div>
	</div>
</template>


<script>
export default {
  name: 'todo-footer',
  props:[],
  methods: {
    clearAllList () {
      this.$emit('clearAllList')
    }
  }
}
</script>

<style type="text/css">
	.todo-footer{
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
		padding: 10px;
		margin-top: 20px;
	}
	.clearAll{
	  margin-top: 20px;
	}
	.clearAll>button{
	  float: right;
	}
</style>