<template>
  <h2>Simple todo</h2>
  <div class="container">
    <div class="header">
      <h3>TODO</h3>
      <input name="todo" type="text" v-model="inputText" />
      <button class="addBtn" @click="addTodo">Add todo</button>
    </div>

    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SimpleTodo',
  data() {
    return {
      todos: ['Add simple to do'],
      inputText: '',
    };
  },
  methods: {
    addTodo() {
      this.todos.push(this.inputText);
      this.inputText = '';
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.header {
  background-color: #42b983;
  padding: 30px 40px;
  color: white;
  text-align: center;
}
.header:after {
  content: '';
  display: table;
  clear: both;
}
.container {
  margin: 0 auto;
  width: 450px;
}
ul {
  margin: 0;
  padding: 0;
}
ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  list-style-type: none;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;
  user-select: none;
}
input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}
.addBtn {
  padding: 10px;
  width: 25%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
  border: 0px;
}
.addBtn:hover {
  background-color: #bbb;
}
</style>
