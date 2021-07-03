const app = Vue.createApp({
  // template: '<h1>Hello {{user}}</h1>',
  data() {
    return { nation: '', year: '', population: 0 };
  },
  methods: {
    async getNation() {
      const res = await fetch(
        'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
      );
      const { data } = await res.json();
      this.nation = data[0].Nation;
      this.year = data[0].Year;
      this.population = data[0].Population.toLocaleString();
    },
  },
});

app.mount('#app');
