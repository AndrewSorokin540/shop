export const updateListOnSearch = (state, action) => {

    if (!state) {
        return {}
    }

    switch (action.type) {

        case 'DATA_LOADED':
            return action.payload

        case 'ON_SEARCH':
            if (action.payload === '') {
                return state.dataItems;
            }
            return {
                // ToDo: решить проблему с разделенным массивом dataItems
                pizza: state.dataItems.pizza.filter(item => item.title.toLowerCase().indexOf(action.payload.toLowerCase()) > -1),
                drinks: state.dataItems.drinks.filter(item => item.title.toLowerCase().indexOf(action.payload.toLowerCase()) > -1)
            }
        default:
            return state.dataItems;
    }
}

export default updateListOnSearch;