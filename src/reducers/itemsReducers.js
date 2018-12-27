export function itemHasErrored(state = false, action) {
    switch(action.type){
        case 'ITEM_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state; 
    }
}

export function itemIsLoading(state = false, action) {
    switch(action.type){
        case 'ITEM_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export function items(state = [], action){
    switch(action.type){
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;
        
        case 'DELETE_ITEM':
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ]
        default:
            return state;
    }
}

