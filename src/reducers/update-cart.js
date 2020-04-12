import { concatObjectFields } from '../utils';

export const updateCart = (state, action) => {

    if (!state) {
        return {
            order: [],
            total: 0
        }
    }

    switch (action.type) {
        case 'CLEAR_CART':
            return {
                order: [],
                total: 0
            }
        case 'ITEM_ADD_TO_CART':
            const newItemAlreadyInCartIndex = state.cart.order.findIndex(item => item.id === action.payload.itemId && item.size === action.payload.size);
            const newItemAlreadyInCart = state.cart.order[newItemAlreadyInCartIndex]
            if (newItemAlreadyInCart) {
                const { price, count } = newItemAlreadyInCart;
                return {
                    order: [
                        ...state.cart.order.slice(0, newItemAlreadyInCartIndex),
                        {
                            ...state.cart.order[newItemAlreadyInCartIndex],
                            count: newItemAlreadyInCart.count + action.payload.count,
                            total: price * (count + action.payload.count)
                        },
                        ...state.cart.order.slice(newItemAlreadyInCartIndex + 1)
                    ],
                    total: state.cart.total + price * action.payload.count
                }
            }
            else {
                const totalDataItems = concatObjectFields(state.dataItems) // объединяем подмассивы pizza и drinks в один массив
                const addedItemNew = totalDataItems.find(item => item.id === action.payload.itemId)
                const { id, title, details } = addedItemNew;
                const { count, size } = action.payload;
                
                return {
                    order: [
                        ...state.cart.order,
                        {
                            id,
                            title,
                            count,
                            price: details[size].price,
                            size,
                            total: details[size].price * count
                        }
                    ],
                    total: state.cart.total + details[size].price * count
                }
            }

        case 'ITEM_REMOVE_FROM_CART':
            const removeItemIndex = state.cart.order.findIndex(item => item.id === action.payload.itemId && item.size === action.payload.size)
            const removeItem = state.cart.order[removeItemIndex]
            const { price, count } = removeItem;
            if (count > 1) {
                return {
                    order: [
                        ...state.cart.order.slice(0, removeItemIndex),
                        {
                            ...removeItem,
                            count: count - 1,
                            total: removeItem.total - price
                        },
                        ...state.cart.order.slice(removeItemIndex + 1)
                    ],
                    total: state.cart.total - price
                }
            }
            else {
                return {
                    order: [...state.cart.order.filter(item => item.id !== removeItem.id || item.size !== action.payload.size)],
                    total: state.cart.total - price
                }
            }

        case 'ALL_ITEMS_REMOVE_FROM_CART':
            const removeItemsIndex = state.cart.order.findIndex(item => item.id === action.payload.itemId && item.size === action.payload.size);
            const removeItems = state.cart.order[removeItemsIndex]
            return {
                order: [...state.cart.order.filter(item => item.id !== removeItems.id || item.size !== action.payload.size)],
                total: state.cart.total - removeItems.price * removeItems.count
            }

        default:
            return state.cart;
    }
}

export default updateCart;