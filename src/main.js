import Vue from 'vue'
import Main from './Main.vue'

Vue.config.productionTip = false;

new Vue({
  render: function (h) { return h(Main) },
}).$mount('#app');