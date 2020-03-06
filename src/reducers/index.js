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
            const newItemAlreadyInCartIndex = state.cart.findIndex(item => item.id === action.payload)
            const newItemAlreadyInCart = state.cart.find(item => item.id === action.payload)
            const addedItem = state.dataItems.find(item => item.id === action.payload)
            if (newItemAlreadyInCart) {
                return {
                    ...state,
                    cart: [
                        ...state.cart.slice(0, newItemAlreadyInCartIndex),
                        {
                            id: addedItem.id,
                            title: addedItem.title,
                            count: newItemAlreadyInCart.count + 1
                        },
                        ...state.cart.slice(newItemAlreadyInCartIndex + 1)
                    ]
                }
            }
            else {
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        {
                            id: addedItem.id,
                            title: addedItem.title,
                            count: 1
                        }
                    ]
                }
            }

        case 'ITEM_REMOVE_FROM_CART':
            const removeItem = state.cart.find(item => item.id === action.payload)
            const removeItemIndex = state.cart.findIndex(item => item.id === action.payload)
            console.log('ITEM_REMOVE_FROM_CART', removeItem)
            if (removeItem.count > 1) {
                return {
                    ...state,
                    cart: [
                        ...state.cart.slice(0, removeItemIndex),
                        {
                            ...removeItem,
                            count: removeItem.count - 1
                        },
                        ...state.cart.slice(removeItemIndex + 1)
                    ]
                }
            }
            else {
                return {
                    ...state,
                    cart: [
                        ...state.cart.slice(0, removeItemIndex),
                        ...state.cart.slice(removeItemIndex + 1)
                    ]
                }
            }

        case 'ALL_ITEMS_REMOVE_FROM_CART':
            const removeItemsIndex = state.cart.findIndex(item => item.id === action.payload)
            console.log('ALL_ITEMS_REMOVE_FROM_CART', action.payload)
            return {
                ...state,
                cart: [
                    ...state.cart.slice(0, removeItemsIndex),
                    ...state.cart.slice(removeItemsIndex + 1)
                ]
            }

        default:
            return state;
    }
}

export default reducer;