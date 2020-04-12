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

            let filteredData = {};
            Object.keys(state.dataItems).forEach(key => {
                filteredData[key] = state.dataItems[key].filter(item => item.title.toLowerCase().indexOf(action.payload.toLowerCase()) > -1)
            });
            return filteredData;
            
        default:
            return state.visibleItems;
    }
}

export default updateListOnSearch;