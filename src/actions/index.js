export const dataLoaded = (data) => ({
    type: 'DATA_LOADED',
    payload: data
})

export const itemAddToCart = (itemId, count) => ({
    type: 'ITEM_ADD_TO_CART',
    payload: { itemId, count }
})

export const itemRemoveFromCart = (itemId) => ({
    type: 'ITEM_REMOVE_FROM_CART',
    payload: { itemId }
})

export const allItemsRemoveFromCart = (itemId) => ({
    type: 'ALL_ITEMS_REMOVE_FROM_CART',
    payload: { itemId }
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