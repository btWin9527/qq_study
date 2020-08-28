<template>
  <div class="todo-list">
    <div>
      <label>新增待办</label>
      <input v-model="state.todo" @keyup.enter="handleAddTodo">
    </div>
    <div>
      <h3>待办列表({{ todos.length }})</h3>
      <ul>
        <li v-for="item in todos" :key="item.id" @click="handleChangeStatus(item, true)">
          <input type="checkbox">
          <label>{{ item.text }}</label>
        </li>
      </ul>
    </div>
    <div><h3>已办列表({{ dones.length }})</h3></div>
    <ul>
      <li v-for="item in dones" :key="item.id" @click="handleChangeStatus(item, false)">
        <input type="checkbox" checked>
        <label>{{ item.text }}</label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
// vue3使用reactive代替data
import {reactive, computed} from 'vue'
import {useRouter} from 'vue-router'

export default {
  // setup相当于before和created，是vue3新增属性，索引的操作都在该属性完成
  setup(props, context) {
    // 通过reactive可以初始化一个可响应的数据，与vue2.0中的vue.observer相似
    const state = reactive({
      todoList: [{
        id: 1,
        done: false,
        text: '吃饭'
      }, {
        id: 2,
        done: false,
        text: '睡觉'
      }, {
        id: 3,
        done: false,
        text: '打豆豆'
      }],
      todo: ''
    })
    // 使用计算属性生成待办列表
    const todos = computed(() => {
      return state.todoList.filter(item => !item.done)
    })
    // 使用计算属性生成已办列表
    const dones = computed(() => {
      return state.todoList.filter(item => item.done)
    })
    // 修改待办状态
    const handleChangeStatus = (item, status) => {
      item.done = status
    }
    // 新增待办
    const handleAddTodo = () => {
      if (!state.todo) {
        alert('请输入待办事项')
        return
      }
      state.todoList.push({
        text: state.todo,
        id: Date.now(),
        done: false
      })
      state.todo = ''
    }
    // vue3中所有数据和方法都在setup中return出去，然后再template中使用
    return {
      state,
      todos,
      dones,
      handleChangeStatus,
      handleAddTodo
    }
  }
}
</script>
<style scoped>
.todo-list {
  text-align: center;
}

.todo-list ul li {
  list-style: none;
}
</style>
