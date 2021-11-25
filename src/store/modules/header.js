const header = {
	namespaced: true,
    state: {
        isFolded: false,
        isExpanded: false,
    },
    getters: {
        isFolded: state => state.isFolded,
        isExpanded: state => state.isExpanded,
    },
    mutations: {
        SET_FOLDED: (state, payload) => {
            state.isFolded = !state.isFolded
        },
        SET_EXPANDED: (state, payload) => {
            state.isExpanded = !state.isExpanded
        },
    },
    actions: {
        setFolded: (context, payload) => {
            return context.commit('SET_FOLDED', payload)
        },
        setExpanded: (context, payload) => {
            return context.commit('SET_EXPANDED', payload)
        },
    },
}

export default header
