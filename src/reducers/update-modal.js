export const updateModal = (state, action) => {

    if (!state) {
        return ({
            isModalOpen: false
        })
    }

    switch (action.type) {
        case 'MODAL_PRODUCT_OPEN':
            return {
                isModalOpen: true,
                modalOpenType: 'product-modal',
                openedItemId: action.payload
            }
        case 'MODAL_THANKS_OPEN':
            return {
                isModalOpen: true,
                modalOpenType: 'thanks-modal',
                orderDetails: action.payload
            }
        case 'ORDER_SENT':
            return {
                isModalOpen: false,
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