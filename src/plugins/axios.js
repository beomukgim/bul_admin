import axios from 'axios'

export default {
	install(Vue){
		Vue.prototype.$axios = this.setup(Vue, axios)
	},

	setup(Vue, axios){
		let options = {}
		axios.create(options)
		return axios
	},
}
