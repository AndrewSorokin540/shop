import updateData from './update-data';
import updateModal from './update-modal';
import updateCart from './update-cart';
import updateListOnSearch from './update-list-on-search';

const reducer = (state, action) => {
    return {
        dataItems: updateData(state, action),
        visibleItems: updateListOnSearch(state, action),
        cart: updateCart(state, action),
        modal: updateModal(state, action)
    };
}

export default reducer;