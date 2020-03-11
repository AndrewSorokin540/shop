export const updateModal = (state, action) => {

    if (!state) {
        return ({
            isModalOpen: false,
            openedItemId: null,
        })
    }

    switch (action.type) {
        case 'MODAL_OPEN':
            return {
                isModalOpen: true,
                openedItemId: action.payload
            }
        case 'MODAL_CLOSE':
            return {
                isModalOpen: false
            }
        default:
            return state.modal;
    }
}

export default updateModal;