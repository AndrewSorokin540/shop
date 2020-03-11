const updateData = (state, action) => {

    if (!state) {
        return []
    }

    switch (action.type) {
        case 'DATA_LOADED':
            return action.payload
        default:
            return state.dataItems;
    }
}

export default updateData;