export const updatePlacedOrder = (state, action) => {

    if (!state) {
        return ({
            orderPlaced: false,
            placedOrder: {}
        })
    }

    switch (action.type) {
        case 'ORDER_SENT':
            return ({
                orderPlaced: false,
            })
        default:
            return state.placedOrder;
    }
}

export default updatePlacedOrder;