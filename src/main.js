import Vue from 'vue';
import App from './App.vue';
import All from './components/All.vue';
import Working from './components/Working.vue';
import Done from './components/Done.vue';

Vue.config.productionTip = false;
Vue.component('All', All);
Vue.component('Working', Working);
Vue.component('Done', Done);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
