<template>
  <li class="todoitem">
    <i @click="finish"></i>
    <span v-text="content"></span>
    <el-button type="primary" @click="handleDelete" size="small" icon="el-icon-delete" circle></el-button>
  </li>
</template>

<script>
export default {
  name: 'todoitem',
  props: ['content', 'index'],
  methods: {
    handleDelete () {
      this.$emit('delete', this.index)
    },
    finish () {
      this.$emit('finish', this.index)
    }
  }
}
</script>
<style scoped>
.todoitem{
  border-bottom: 1px solid #ebeef5;
  padding: 10px;
  font-size: 16px;
  color: #409EFF;
  text-align: left;
  vertical-align: middle;
  position: relative;
}
.todoitem:last-child{
  border: none;
}
.todoitem:hover{
  background: #ecf5ff;
}
.todoitem>i{
  content: url('../assets/images/round.svg');
  vertical-align: middle;
}
.finished>i{
  content: url('../assets/images/done.svg');
  vertical-align: middle;
}
.finished{
  text-decoration: line-through;
  color: #999;
}
.todoitem>button{
  position: absolute;
  right: 10px;
}
</style>
