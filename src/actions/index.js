export const dataLoaded = (data) => ({
    type: 'DATA_LOADED',
    payload: data
})

export const itemAddToCart = (itemId, count, size) => ({
    type: 'ITEM_ADD_TO_CART',
    payload: { itemId, count, size }
})

export const itemRemoveFromCart = (itemId, size) => ({
    type: 'ITEM_REMOVE_FROM_CART',
    payload: { itemId, size }
})

export const allItemsRemoveFromCart = (itemId, size) => ({
    type: 'ALL_ITEMS_REMOVE_FROM_CART',
    payload: { itemId, size }
})

export const placeOrder = (orderDetails) => ({
    type: 'ORDER_PLACED',
    payload: orderDetails
})

export const openModal = (itemId) => ({
    type: 'MODAL_OPEN',
    payload: itemId
})

export const closeModal = () => ({
    type: 'MODAL_CLOSE'
})

export const onSearch = (inputValue) => ({
    type: 'ON_SEARCH',
    payload: inputValue
})