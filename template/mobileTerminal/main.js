import Vue from 'vue'
import App from './App'
import layOut from 'pages/components/layout.vue';
import store from './store'
import Socket from 'pages/api/socket.js';
Vue.prototype.$store = store

// 挂载 socket
Vue.prototype.scoket = new Socket();
// 挂载音频文件


Vue.prototype.onlineAudio = uni.createInnerAudioContext();
Vue.prototype.onlineAudio.src = './static/video/notice.mp3'; // 上线通知

Vue.component('layOut', layOut);


Vue.config.productionTip = false



App.mpType = 'app'

const app = new Vue({
    ...App,
		store
})
app.$mount()
