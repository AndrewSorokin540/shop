export const updateListOnSearch = (state, action) => {

    if (!state) {
        return []
    }

    switch (action.type) {

        case 'DATA_LOADED':
            return action.payload

        case 'ON_SEARCH':
            if (action.payload === '') {
                return state.dataItems;
            }
            return state.dataItems.filter(item => item.title.toLowerCase().indexOf(action.payload.toLowerCase()) > -1)

        default:
            return state.dataItems;
    }
}

export default updateListOnSearch;