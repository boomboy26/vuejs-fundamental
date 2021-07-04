<template>
  <h1>Counter {{ title }}</h1>
  <div class="container">
    <h3>Current Value (Parent)-- {{ counterValue }}</h3>
    <button v-on:click="increment">Increment</button>
    <button @click="decrement" :disabled="counterValue <= 0">Decrement</button>
  </div>
  <div style="padding: 10px" />
  <div class="container">
    <h3>Current Value (Child)-- {{ childValue }}</h3>
    <ChildCounter />
  </div>
</template>

<script>
import ChildCounter from '../components/counterapp/ChildCounter';
export default {
  name: 'Todolist',
  props: {
    title: {
      type: String,
      default: 'App',
    },
  },
  components: {
    ChildCounter,
  },
  data() {
    return {
      counterValue: 0,
      childValue: 0,
    };
  },
  methods: {
    increment() {
      this.counterValue += 1;
    },
    decrement() {
      this.counterValue -= 1;
    },
  },
};
</script>

<style scoped>
button {
  padding: 8px 12px;
  cursor: pointer;
}
.container {
  border: 2px solid #eee;
  margin: 0 50px;
  padding: 15px 0;
}
</style>
