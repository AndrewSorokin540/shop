export const updatePlacedOrder = (state, action) => {

    if (!state) {
        return ({
            orderPlaced: false,
            placedOrder: {}
        })
    }

    switch (action.type) {

        case 'ORDER_PLACED':
            const { submitedStreet, submitedBuilding, submitedRoom, submitedPhoneNumber } = action.payload;
            console.log(`Заказ на адрес: ул.: ${submitedStreet}, дом: ${submitedBuilding}, квартира: ${submitedRoom}. Телефон: ${submitedPhoneNumber}.`)
            return ({
                orderPlaced: true,
                placedOrder: action.payload
            })

        case 'ORDER_SENT':
            return ({
                orderPlaced: false,
            })
        default:
            return state.placedOrder;
    }
}

export default updatePlacedOrder;