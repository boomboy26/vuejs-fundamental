<template>
  <div class="container">
    <h4>Form Child</h4>
    <form action="" @submit.prevent="onSubmit">
      <label for="">Name</label>
      <input type="text" name="name" v-model="name" />
      <label for=""> Email</label>
      <input type="text" name="email" v-model="email" />
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  emits: ['onSubmitForm'],
  methods: {
    onSubmit() {
      // e.preventDefault();
      // console.log(this.name, this.email);
      this.$emit('onSubmitForm', { name: this.name, email: this.email });
      (this.name = ''), (this.email = '');
    },
  },
  data() {
    return { name: '', email: '' };
  },
};
</script>

<style scoped>
.container {
  border: solid 2px #aaa;
  padding: 30px;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input[type='text'],
select {
  min-width: 300px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  min-width: 300px;

  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
