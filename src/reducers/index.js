import updateData from './update-data';
import updateModal from './update-modal';
import updateCart from './update-cart';

const reducer = (state, action) => {
    return {
        dataItems: updateData(state, action),
        cart: updateCart(state, action),
        modal: updateModal(state, action)
    };
}

export default reducer;