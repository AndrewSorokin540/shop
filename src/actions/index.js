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

export const openModalProduct = (itemId) => ({
    type: 'MODAL_PRODUCT_OPEN',
    payload: itemId
})

export const openModalThanks = () => ({
    type: 'MODAL_THANKS_OPEN',
})

export const clearCart = () => ({
    type: 'CLEAR_CART',
})

export const closeModal = () => ({
    type: 'MODAL_CLOSE'
})

export const onSearch = (inputValue) => ({
    type: 'ON_SEARCH',
    payload: inputValue
})