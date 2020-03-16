export const updateCart = (state, action) => {

    if (!state) {
        return {
            order: [],
            total: 0
        }
    }

    switch (action.type) {
        case 'ITEM_ADD_TO_CART':
            const newItemAlreadyInCartIndex = state.cart.order.findIndex(item => item.id === action.payload.itemId && item.size === action.payload.size);
            const newItemAlreadyInCart = state.cart.order[newItemAlreadyInCartIndex]
            if (newItemAlreadyInCart) {
                const { id, title, price, size, count } = newItemAlreadyInCart;
                return {
                    order: [
                        ...state.cart.order.slice(0, newItemAlreadyInCartIndex),
                        {
                            id,
                            title,
                            count: newItemAlreadyInCart.count + action.payload.count,
                            price,
                            size,
                            total: price[size] * (count + action.payload.count)
                        },
                        ...state.cart.order.slice(newItemAlreadyInCartIndex + 1)
                    ],
                    total: state.cart.total + price[size] * action.payload.count
                }
            }
            else {
                const addedItemNew = state.dataItems.find(item => item.id === action.payload.itemId)
                const { id, title, price } = addedItemNew;
                const { count, size } = action.payload;
                return {
                    order: [
                        ...state.cart.order,
                        {
                            id,
                            title,
                            count,
                            price,
                            size,
                            total: price[size] * count
                        }
                    ],
                    total: state.cart.total + price[size] * count
                }
            }

        case 'ITEM_REMOVE_FROM_CART':
            const removeItemIndex = state.cart.order.findIndex(item => item.id === action.payload.itemId && item.size === action.payload.size)
            const removeItem = state.cart.order[removeItemIndex]            
            const { price, size, count } = removeItem;
            if (count > 1) {
                return {
                    order: [
                        ...state.cart.order.slice(0, removeItemIndex),
                        {
                            ...removeItem,
                            count: count - 1,
                            total: removeItem.total - removeItem.price[action.payload.size]
                        },
                        ...state.cart.order.slice(removeItemIndex + 1)
                    ],
                    total: state.cart.total - price[size]
                }
            }
            else {
                return {
                    order: [
                        ...state.cart.order.slice(0, removeItemIndex),
                        ...state.cart.order.slice(removeItemIndex + 1)
                    ],
                    total: state.cart.total - price[size]
                }
            }

        case 'ALL_ITEMS_REMOVE_FROM_CART':
            const removeItemsIndex = state.cart.order.findIndex(item => item.id === action.payload.itemId);
            const removeItems = state.cart.order[removeItemsIndex]
            return {
                order: [
                    ...state.cart.order.slice(0, removeItemsIndex),
                    ...state.cart.order.slice(removeItemsIndex + 1)
                ],
                total: state.cart.total - removeItems.price[removeItems.size] * removeItems.count
            }
        default:
            return state.cart;
    }
}

export default updateCart;