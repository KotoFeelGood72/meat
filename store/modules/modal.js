// store/modules/modal.js
export default {
  state: {
    modal: {
      news: false,
      burger: false,
    }
  },
  mutations: {
    openPopup(state, modalName) {
      state.modal[modalName] = !state.modal[modalName]
    }
  },
  getters: {
    getPopup: (state) => (modalName) => {
      return state.modal[modalName]
    }
  }
}
