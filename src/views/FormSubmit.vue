<template>
  <h3>Form submit</h3>
  <div class="container">
    <h4>Data Parent</h4>
    <p>Name : {{ name }}</p>
    <p>Email : {{ email }}</p>
    <Form @onSubmitForm="getForm" />
  </div>
</template>

<script>
import Form from '../components/formsubmit/Form';
export default {
  name: 'FormSubmit',
  components: {
    Form,
  },
  methods: {
    getForm(e) {
      this.name = e.name;
      this.email = e.email;
    },
  },
  data() {
    return {
      name: '',
      email: '',
    };
  },
};
</script>

<style scoped>
.container {
  border: solid 2px #eee;
  margin: 0 100px;
}
</style>
