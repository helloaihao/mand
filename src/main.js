import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible';

Vue.config.productionTip = false

import {
  Agree,
  ActionBar,
  Field,
  FieldItem,
  InputItem,
  Picker
} from 'mand-mobile';

Vue.component(Agree.name, Agree);
Vue.component(ActionBar.name, ActionBar);
Vue.component(Field.name, Field);
Vue.component(FieldItem.name, FieldItem);
Vue.component(InputItem.name, InputItem);
Vue.component(Picker.name, Picker);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
