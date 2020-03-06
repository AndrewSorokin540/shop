const initialState = {
    dataItems: [{
        id: 1,
        title: 'React и Redux. Функциональная веб-разработка',
        author: 'Алекс Бэнкс',
        price: 550,
        coverImage: 'https://cv9.litres.ru/pub/c/pdf-kniga/cover_415/29415793-a-benks-piter-react-i-redux-funkcionalnaya-veb-razrabotka-29415793.jpg'
    }],
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
            return state
        default:
            return state;
    }
}

export default reducer;