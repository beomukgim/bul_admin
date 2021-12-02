// User
// import UserAuthApi from './user/UserAuthApi'
// import UserBusinessLicenseApi from './User/UserBusinessLicenseApi'
// import UserClipApi from './User/UserClipApi'
// import UserInvitationRespository from './User/UserInvitationRespository'
// import UserPinApi from './User/UserPinApi'
// import UserProfileApi from './User/UserProfileApi'
// import UserPropertyApi from './User/UserPropertyApi'
// import UserApi from './User/UserApi'

// Clubdael
// import WaitApproveClubdealApi from './clubdeal/WaitApproveClubdealApi'
// import ClubdealDocumentApi from './Clubdeal/ClubdealDocumentApi'
// import ClubdealHistoryApi from './Clubdeal/ClubdealHistoryApi'
// import ClubdealApi from './Clubdeal/ClubdealApi'
// import ClubdealStockApi from './Clubdeal/ClubdealStockApi'
// import ClubdealSuggestionApi from './Clubdeal/ClubdealSuggestionApi'
// import ClubdealSuggestionSourceApi from './Clubdeal/ClubdealSuggestionSourceApi'

// Info
// import InfoNoticeApi from './Info/InfoNoticeApi'
// import InfoPrecautionApi from './Info/InfoPrecautionApi'

export default {
	install(Vue, { $axios }){
		Vue.prototype.$api = {
			// User
			// UserAuthApi: UserAuthApi(Vue, { $axios }),
			// UserBusinessLicenseApi: UserBusinessLicenseApi(Vue, {
			// 	$axios,
			// }),
			// UserClipApi: UserClipApi(Vue, { $axios }),
			// UserInvitationRespository: UserInvitationRespository(Vue, { $axios }),
			// UserPinApi: UserPinApi(Vue, { $axios }),
			// UserProfileApi: UserProfileApi(Vue, { $axios }),
			// UserPropertyApi: UserPropertyApi(Vue, { $axios }),
			// UserApi: UserApi(Vue, { $axios }),

			// Clubdeal
			// ClubdealContractApi: WaitApproveClubdealApi(Vue, { $axios }),
			// ClubdealDocumentApi: ClubdealDocumentApi(Vue, { $axios }),
			// ClubdealHistoryApi: ClubdealHistoryApi(Vue, { $axios }),
			// ClubdealApi: ClubdealApi(Vue, { $axios }),
			// ClubdealStockApi: ClubdealStockApi(Vue, { $axios }),
			// ClubdealSuggestionApi: ClubdealSuggestionApi(Vue, {
			// 	$axios,
			// }),
			// ClubdealSuggestionSourceApi: ClubdealSuggestionSourceApi(
			// 	Vue,
			// 	{ $axios },
			// ),

			// Info
			// InfoNoticeApi: InfoNoticeApi(Vue, { $axios }),
			// InfoPrecautionApi: InfoPrecautionApi(Vue, { $axios }),
		}
	},

	// Usage on Component
	// this.$api.UserAuthApi.store({ name: 'test' })
	//
}
