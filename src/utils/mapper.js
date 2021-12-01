const map = {
	title: {
		"basic":"기본 정보",
		"detail":"상세 소개",
		"company-info":"회사 정보",
		"file":"첨부 서류",
		"progress":"진행 상황",
		"print-list":"출력 목록",
		"notice":"공지사항",
	},
	object: {

	},
}

const objectMapper = data => {
	if (typeof data === 'string'){
		return map.title[data]
	} else if (typeof data === 'object'){
		return map.object[data.key]
	}
	
}

export default {
	install(Vue){
		Vue.prototype.$objectMapper = objectMapper
	},
}