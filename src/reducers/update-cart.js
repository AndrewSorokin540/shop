export const updateCart = (state, action) => {

    if (!state) {
        return []
    }

    switch (action.type) {
        case 'ITEM_ADD_TO_CART':
            console.log(`Добавляем товар: ID:${action.payload.itemId}, Кол-во: ${action.payload.count}, Размер: ${action.payload.size}`)
            const newItemAlreadyInCartIndex = state.cart.findIndex(item => item.id === action.payload.itemId && item.size === action.payload.size)
            const newItemAlreadyInCart = state.cart.find(item => item.id === action.payload.itemId && item.size === action.payload.size)
            

            if (newItemAlreadyInCart) {
                const { id, title, price, size, count } = newItemAlreadyInCart;
                return [
                    ...state.cart.slice(0, newItemAlreadyInCartIndex),
                    {
                        id,
                        title,
                        count: newItemAlreadyInCart.count + 1,
                        price,
                        size,
                        total: price[size] * (count + action.payload.count)
                    },
                    ...state.cart.slice(newItemAlreadyInCartIndex + 1)
                ]
            }
            else {
                const addedItemNew = state.dataItems.find(item => item.id === action.payload.itemId)
                const { id, title, price } = addedItemNew;
                const { count, size } = action.payload;
                return [
                    ...state.cart,
                    {
                        id,
                        title,
                        count,
                        price,
                        size,
                        total: price[action.payload.size] * action.payload.count
                    }
                ]
            }

        case 'ITEM_REMOVE_FROM_CART':
            
            const removeItem = state.cart.find(item => item.id === action.payload.itemId  && item.size === action.payload.size)

            console.log(`Удаляем товар (1 шт.): ID:${action.payload.itemId}, Размер: ${action.payload.size}`)
            const removeItemIndex = state.cart.findIndex(item => item.id === action.payload.itemId)
            if (removeItem.count > 1) {
                return [
                    ...state.cart.slice(0, removeItemIndex),
                    {
                        ...removeItem,
                        count: removeItem.count - 1,
                        total: removeItem.total - removeItem.price[action.payload.size]
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