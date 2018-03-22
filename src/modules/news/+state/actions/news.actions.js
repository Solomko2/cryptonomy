import * as fromActionTypes from '../action_types/news.action_types';

export const getNews = data => ({
    type: fromActionTypes.GET_NEWS
});

export const getNewsSuccess = data => ({
    type: fromActionTypes.GET_NEWS_SUCCESS,
    payload: { data }
});

export const getNewsFailure = err => ({
    type: fromActionTypes.GET_NEWS_FAILURE,
    payload: { err }
});
