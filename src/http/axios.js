import axios from 'axios'
import qs from 'qs'

// 是否携带cookie
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://127.0.0.1:9999'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// 拦截器
axios.interceptors.request.use((config)=>{
	if(config.method == 'post'){
		config.data = qs.stringify(config.data,{arrayFormat:'repeat'})
	}
	return config;
})
// 在请求每次回来的时候先判断回应信息中是否包含了未登录信息
// 如果包含，直接跳转到登录页面，否则正常进行
axios.interceptors.response.use((response)=>{
	if(response && response.data.status == 500 && response.data.message == '尚未登录，请登录!'){
		window.vm.currentComponent = 'Login';
	}
	return response;
})

export default axios;