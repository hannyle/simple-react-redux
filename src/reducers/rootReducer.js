import { combineReducers } from 'redux';
import { itemHasErrored, itemIsLoading, items } from './itemsReducers';

const rootReducer = combineReducers({
    itemHasErrored,
    itemIsLoading,
    items
});

export default rootReducer;
