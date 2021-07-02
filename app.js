const app = Vue.createApp({
  // template: '<h1>Hello {{user}}</h1>',
  data() {
    return { nation: 'USO', year: '2010', population: 3222112 };
  },
  methods: {
    getNation() {
      console.log(this.nation);
    },
  },
});

/*
data
method 
image 
display data
*/

app.mount('#app');
