<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        autofocus
        v-model="input"
        @keyup.enter="addTodo"
      />
    </header>
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main" v-show="count">
      <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDone" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
        <!-- <li class="completed">
						<div class="view">
							<input class="toggle" type="checkbox" checked>
							<label>Taste JavaScript</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li> -->
        <li
          v-for="todo of filteredTodos"
          :key="todo"
          :class="{ editing: todo == editingTodo,completed:todo.completed }"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed" />
            <label @dblclick="editTodo(todo)">{{ todo.text }}</label>
            <button class="destroy" @click="remove(todo)"></button>
          </div>
          <input
            class="edit"
            v-editing-focus="editingTodo==todo"
            v-model="todo.text"
            @keyup.enter="doneEdit(todo)"
            @blur="doneEdit(todo)"
            @keyup.esc="cancelEdit(todo)"
          />
        </li>
      </ul>
    </section>
    <!-- This footer should be hidden by default and shown when there are todos -->
    <footer class="footer" v-show="count">
      <!-- This should be `0 items left` by default -->
      <span class="todo-count"><strong>0</strong> item left</span>
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li>
          <a class="selected" href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button v-if="count > remainingCount" class="clear-completed" @click="clearDone">Clear completed</button>
    </footer>
  </section>
  <footer class="info">
    <p>Double-click to edit a todo</p>
    <!-- Remove the below line ↓ -->
    <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
    <!-- Change this out with your name and url ↓ -->
    <p>Created by <a href="http://todomvc.com">you</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
</template>

<script>
//载入公共样式
import "todomvc-common/base.css";
import "todomvc-app-css/index.css";
import useLocalStorage from "./utils/useLocalStorage";
import { ref,computed, onMounted, onUnmounted, watchEffect } from "vue";

const storage = useLocalStorage()

//1.添加待办事项
const useAdd = (todos) => {
  const input = ref("");
  const addTodo = () => {
    if (!input.value.trim()) return;
    todos.value.unshift({
      text: input.value,
      completed: false,
    });
    input.value = "";
  };
  return {
    input,
    addTodo,
  };
};

//2.删除待办事项
const useRemove = (todos) => {
  const remove = (todo) => {
    const index = todos.value.indexOf(todo);
    if (index > -1) {
      todos.value.splice(index, 1);
    }
  };
  //清空已完成的待办事项
  const clearDone = () => {
    todos.value = todos.value.filter((todo) => !todo.completed);
  };
  return {
    remove,
    clearDone
  };
};

//3.编辑待办项
const useEdit = (remove) => {
  let beforeEditingText = "";
  const editingTodo = ref(null);
  const editTodo = (todo) => {
    beforeEditingText = todo.text;
    editingTodo.value = todo;
  };
  const doneEdit = (todo) => {
    if (!editingTodo.value) return;
    todo.text = todo.text.trim();
    todo.text || remove(todo);
    editingTodo.value = null;
  };
  const cancelEdit = (todo) => {
    editingTodo.value = null;
    todo.text = beforeEditingText;
  };
  return {
    editTodo,
    doneEdit,
    cancelEdit,
    editingTodo,
  };
};

//4.切换待办事项完成状态
const useFilter = todos =>{
  const allDone = computed({
    get(){
      //所有待办项都完成了
      return !todos.value.filter(todo => !todo.completed).length
    },
    set(value){
      todos.value.forEach(todo => {
        todo.completed = value;
      });
    }
  })
  const filter = {
    all :list => list,
    active: list => list.filter(todo => !todo.completed),
    completed: list => list.filter(todo => todo.completed)
  }
  const getFilteredTodos = ref(()=>{})
  const filteredTodos = computed(()=>{
    return getFilteredTodos.value(todos.value)
  })
  //未完成的待办事项个数
  const remainingCount = computed(()=>{
    return filter['active'](todos.value).length
  })
  //待办事项总个数
  const count = computed(()=>{
    return todos.value.length
  })
  const onHashChange = ()=>{
    const hash = window.location.hash.replace('#/','')
    getFilteredTodos.value = filter[hash] || filter.all
  }
  onMounted(()=>{
    window.addEventListener('hashchange',onHashChange)
    //页面首次加载的时候也需要加载数据
    onHashChange()
  })
  onUnmounted(()=>{
    window.removeEventListener('hashchange',onHashChange)
  })
  return {
    allDone,
    filteredTodos,
    remainingCount,
    count
  }
}

//5.存储待办事项
const useStorage = ()=>{
  const KEY = 'TODOKEYS'
  const todos = ref(storage.getItem(KEY) || [])
  watchEffect(()=>{
    storage.setItem(KEY,todos.value)
  })
  return todos
}

export default {
  name: "App",
  setup() {
    const todos = useStorage()
    const { remove,clearDone } = useRemove(todos);
    return {
      ...useAdd(todos),
      todos,
      remove,
      clearDone,
      ...useEdit(remove),
      ...useFilter(todos)
    };
  },
  directives:{
    editingFocus:(el,binding)=>{
      // 这会在 `mounted` 和 `updated` 时都调用
      if(binding.value){
        el.focus();
      }
    }
  }
};
</script>

<style>
</style>
