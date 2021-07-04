<template>
  <h2>Child</h2>
  <h3>Current Value (Child)-- {{ counter + childCounter }}</h3>
  <button @click="increment">Child increment</button>
</template>

<script>
export default {
  name: 'ChildCounter',
  props: ['counter'],
  emits: ['passParent'],
  data() {
    return {
      childCounter: 0,
    };
  },
  methods: {
    increment() {
      this.childCounter++;
      this.$emit('passParent', this.childCounter);
      //console.log(this.counter);
    },
  },
  updated() {
    // console.log('props >> ', this.counter);
    // console.log('data >>', this.childCounter);
  },
  mounted() {},
};
</script>
