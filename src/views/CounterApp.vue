<template>
  <h1>Counter {{ title }}</h1>
  <div class="container">
    <h2>Parent</h2>
    <h3>Current Value (Parent)-- {{ counterValue }}</h3>
    <button v-on:click="increment">Increment</button>
    <button @click="decrement" :disabled="counterValue <= 0">Decrement</button>
    <div style="padding: 5px" />
    <button @click="childIncrement">Increment Child</button>
    <p>pass from child to parent {{ fromChild }}</p>
  </div>
  <div style="padding: 10px" />
  <div class="container">
    <ChildCounter
      v-bind:counter="childValue"
      @passParent="readChild"
      ref="childCom"
    />
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
      fromChild: 0,
    };
  },
  methods: {
    increment() {
      this.counterValue += 1;
      this.childValue++;
    },
    decrement() {
      this.counterValue -= 1;
    },
    readChild(e) {
      this.fromChild = e;
      console.log(e);
    },
    childIncrement() {
      this.$refs.childCom.increment();
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
