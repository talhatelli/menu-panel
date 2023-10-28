import "./assets/main.css"

import {createApp} from "vue"
import {createPinia} from "pinia"

import App from "./App.vue"
import router from "./router"
import Antd from "ant-design-vue"
import "./theme.less" 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount("#app")
