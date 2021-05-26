import Vue from 'vue'
import App from './App.vue'
// import vuetify from './plugins/vuetify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'
// import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import vuetify from './plugins/vuetify'

library.add(faUserGraduate)
// library.add(faTrash)
// library.add(faEdit)


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  vuetify,

  // vuetify,
  render: h => h(App)
}).$mount('#app')
