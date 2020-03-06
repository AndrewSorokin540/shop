const initialState = {
    dataItems: [],
    cart: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_LOADED':
            return {
                ...state,
                dataItems: action.payload
            }

        case 'ITEM_ADD_TO_CART':
            return state
        default:
            return state;
    }
}

export default reducer;