import { snakelize, camelize } from '@/utils/object'

export default (context, { $axios }) => ({
	async get(data){
		// return camelize(await $axios.get(`/info/precaution/list`, snakelize(data)))
	},
})
