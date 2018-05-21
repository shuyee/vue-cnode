import { FETCH_TOPIC_LIST } from '@/store/mutation-types'

const state = {
	topicList: []
}

const mutations = {
	[FETCH_TOPIC_LIST](state, payload) {
		state.topicList = state.topicList.concat(payload.topicList)
	}
}

export default {
	state,
	mutations
}