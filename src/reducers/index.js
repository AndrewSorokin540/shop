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
            console.log(newItemAlreadyInCart)
            if (newItemAlreadyInCart) {
                console.log(1)
                const newItemInCart = {
                    id: addedItem.id,
                    title: addedItem.title,
                    count: newItemAlreadyInCart.count + 1
                }
                return {
                    ...state,
                    cart: [
                        ...state.cart.slice(0, newItemAlreadyInCartIndex),
                        newItemInCart,
                        ...state.cart.slice(newItemAlreadyInCartIndex + 1)
                    ]
                }
            }
            else {
                console.log(2)
                return {
                    ...state,
                    cart: [...state.cart,
                    {
                        id: addedItem.id,
                        title: addedItem.title,
                        count: 1
                    }]
                }
            }


        default:
            return state;
    }
}

export default reducer;