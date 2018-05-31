<template>
  <div id="todolist-app">
    <el-card class="box-card">
      <todo-header></todo-header>
      <div class="item-input">
        <el-input ref="input" v-model="inputVlue" clearable placeholder="添加待办事项" @keyup.enter.native="addItem">
          <el-button slot="append" @click="addItem">添加</el-button>
        </el-input>
      </div>
      <ul class="todolist">
        <todo-item
          v-for="(item,index) in list"
          :key="index"
          :index="index"
          :content="item.content"
          :class="{ finished: item.isFinished }"
          @delete="handleDelete"
          @finish="finishItem"
        ></todo-item>
      </ul>
      <todo-footer @clearAllList="clearAllList"></todo-footer>
    </el-card>
  </div>
</template>

<script>
import TodoItem from './components/todoitem'
import TodoHeader from './components/TodoHeader'
import TodoFooter from './components/TodoFooter'
import localStorage from './assets/js/localStorage.js'

import { MessageBox } from 'element-ui'
import { Message } from 'element-ui'

export default {
  name: 'todolist-app',
  components: {
    'todo-header': TodoHeader,
    'todo-item': TodoItem,
    'todo-footer': TodoFooter
  },
  data () {
    return {
      inputVlue: '',
      list: localStorage.fetch()
    }
  },
  mounted: function () {
    this.$refs['input'].focus() //input聚焦
  },
  methods: {
    addItem () {
      if (this.inputVlue !== '') {
        this.list.push({'content': this.inputVlue, 'isFinished': false})
        Message({
          type: 'success',
          message: '添加成功!'
        })
      } else {
        MessageBox.alert('事件不能为空！', '提示：', {
          showClose: true,
          type: 'error',
          showConfirmButton: true,
          confirmButtonText: '确定'
        }).then(() => {
          this.$refs['input'].focus() //input聚焦
        }).catch(() => {
        })
      }
      this.inputVlue = ''
    },
    handleDelete (index) {
      var _this = this
      MessageBox.confirm('确定删除此事件？', '提示：',{
        showClose: true,
        type: 'error'
      }).then(() => {
        _this.list.splice(index, 1)
        Message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
      })
    },
    finishItem (index) {
      this.list[index].isFinished = !this.list[index].isFinished
    },
    clearAllList () {
      var _this = this;
      var hadFinished = false;
      for( let key in this.list ){
        if(this.list[key].isFinished == true){
          hadFinished = true;
        }else{
          hadFinished = false;
        }
      }
      if(hadFinished){
        MessageBox.confirm('确定清空所有已完成事件？', '提示：',{
          showClose: true,
          type: 'error'
        }).then(() => {
          _this.list = _this.list.filter( item => !item.isFinished)
        }).catch(() => {
        })
      }else{
        MessageBox.alert('没有完成的事项！', '提示：',{
          showClose: true,
          type: 'warning'
        }).then(() => {
        }).catch(() => {
        })
      }
    }
  },
  watch: {
    list:{
      /*
        第一个handler：其值是一个回调函数。即监听到变化时应该执行的函数。
        第二个是deep：其值是true或false；确认是否深入监听。（一般监听时是不能监听到对象属性值的变化的，数组的值变化可以听到。）
        第三个是immediate：其值是true或false；确认是否以当前的初始值执行handler的函数。
      */
      handler (list) {
        localStorage.save(list)
      },
      deep: true,
      immediate: true
    }
  }

}
</script>

<style>
#todolist-app {
  width: 600px;
  margin: 80px auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #FFF;
  padding: 20px;
}
.todolist{
  height: 400px;
  overflow: auto;
  border-radius: 4px;
  padding: 0 10px;
}
.item-input{
  margin-bottom: 25px;
}
</style>
