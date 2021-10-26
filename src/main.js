import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faHome, faFile, faDatabase, faAddressBook, faQuestion, faPowerOff, faPencilAlt, faGift, faPlus, faSmile, faUser, faArrowRight, faArrowLeft, faCheckCircle, faExclamationTriangle, faBars, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue' 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

library.add(faPhone, faHome, faFile, faDatabase, faAddressBook, faQuestion, faPowerOff, faPencilAlt, faGift, faPlus, faSmile, faUser, faArrowRight, faArrowLeft, faCheckCircle, faExclamationTriangle, faPhone, faBars, faArrowLeft, faEnvelope )

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created () {
    AOS.init()
  },
  render: (h) => h(App),
}).$mount("#app");

