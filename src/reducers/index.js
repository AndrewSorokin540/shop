const initialState = {
    dataItems: [],
    cart: [],
    isModalOpen: false,
    openedItemId: null,
    currentOrder: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_LOADED':
            return {
                ...state,
                dataItems: action.payload
            }

        case 'CREATE_CURRENT_ORDER':
            const currentItem = state.dataItems[action.payload]
            return {
                ...state,
                currentOrder: {
                    ...currentItem,
                    count: 1
                }
            }
        case 'ITEM_ADD_TO_CART':
            const newItemAlreadyInCartIndex = state.cart.findIndex(item => item.id === action.payload.itemId)
            const newItemAlreadyInCart = state.cart.find(item => item.id === action.payload.itemId)
            const addedItem = state.dataItems.find(item => item.id === action.payload.itemId)
            if (newItemAlreadyInCart) {
                return {
                    ...state,
                    isModalOpen: false,
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
                    isModalOpen: false,
                    cart: [
                        ...state.cart,
                        {
                            id: addedItem.id,
                            title: addedItem.title,
                            count: action.payload.count
                        }
                    ]
                }
            }

        case 'ITEM_REMOVE_FROM_CART':
            const removeItem = state.cart.find(item => item.id === action.payload.itemId)
            const removeItemIndex = state.cart.findIndex(item => item.id === action.payload.itemId)
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
            const removeItemsIndex = state.cart.findIndex(item => item.id === action.payload.itemId)
            return {
                ...state,
                cart: [
                    ...state.cart.slice(0, removeItemsIndex),
                    ...state.cart.slice(removeItemsIndex + 1)
                ]
            }

        case 'MODAL_OPEN':
            return{
                ...state,
                isModalOpen: true,
                openedItemId: action.payload
            }
        case 'MODAL_CLOSE':
            return{
                ...state,
                isModalOpen: false

            }
        default:
            return state;
    }
}

export default reducer;