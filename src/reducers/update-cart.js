export const updateCart = (state, action) => {

    if (!state) {
        return []
    }

    switch (action.type) {
        case 'ITEM_ADD_TO_CART':
            const newItemAlreadyInCartIndex = state.cart.findIndex(item => item.id === action.payload.itemId)
            const newItemAlreadyInCart = state.cart.find(item => item.id === action.payload.itemId)
            const addedItemNew = state.dataItems.find(item => item.id === action.payload.itemId)

            if (newItemAlreadyInCart) {
                return [
                    ...state.cart.slice(0, newItemAlreadyInCartIndex),
                    {
                        id: newItemAlreadyInCart.id,
                        title: newItemAlreadyInCart.title,
                        count: newItemAlreadyInCart.count + action.payload.count
                    },
                    ...state.cart.slice(newItemAlreadyInCartIndex + 1)
                ]
            }
            else {
                return [
                    ...state.cart,
                    {
                        id: addedItemNew.id,
                        title: addedItemNew.title,
                        count: action.payload.count
                    }
                ]
            }

        case 'ITEM_REMOVE_FROM_CART':
            const removeItem = state.cart.find(item => item.id === action.payload.itemId)
            const removeItemIndex = state.cart.findIndex(item => item.id === action.payload.itemId)
            if (removeItem.count > 1) {
                return [
                    ...state.cart.slice(0, removeItemIndex),
                    {
                        ...removeItem,
                        count: removeItem.count - 1
                    },
                    ...state.cart.slice(removeItemIndex + 1)
                ]
            }
            else {
                return [
                    ...state.cart.slice(0, removeItemIndex),
                    ...state.cart.slice(removeItemIndex + 1)
                ]
            }

        case 'ALL_ITEMS_REMOVE_FROM_CART':
            const removeItemsIndex = state.cart.findIndex(item => item.id === action.payload.itemId)
            return [
                ...state.cart.slice(0, removeItemsIndex),
                ...state.cart.slice(removeItemsIndex + 1)
            ]
        default:
            return state.cart;
    }
}

export default updateCart;