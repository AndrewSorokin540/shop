import updateData from './update-data';
import updateModal from './update-modal';
import updateCart from './update-cart';
import updateListOnSearch from './update-list-on-search';
import updatePlacedOrder from './update-placed-order';

const reducer = (state, action) => {
    return {
        dataItems: updateData(state, action),
        visibleItems: updateListOnSearch(state, action),
        cart: updateCart(state, action),
        placedOrder: updatePlacedOrder(state, action),
        modal: updateModal(state, action)
    };
}

export default reducer;