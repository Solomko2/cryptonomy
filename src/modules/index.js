import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as fromNewsReducer from './news/+state/reducers';

export default combineReducers({
    router: routerReducer,
    news: fromNewsReducer.reducers.news
});

export * from './news/containers';

