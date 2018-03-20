import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import news from './news';

export default combineReducers({
    router: routerReducer,
    news
});