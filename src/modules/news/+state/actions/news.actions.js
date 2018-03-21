import * as fromActionTypes from '../action_types/news.action_types';
import { bindActionCreators } from "redux";
// import * as fromCommonApi from '../../../../common/api';

function fetchNews() {
    return fetch('/news.json');
}

function makeFetchNews() {
    return async function (dispatch) {
        console.log('getNews');
        dispatch({type: fromActionTypes.GET_NEWS});
        try {
            const response = await fetchNews();
            const json = await response.json();
            console.log(json, response);
            dispatch({type: fromActionTypes.GET_NEWS_SUCCESS, payload: json, status: response.status})
        } catch(err) {
            dispatch({type: fromActionTypes.GET_NEWS_FAILURE, err})
        }
    };
}

export const getNews = () => dispatch => dispatch(makeFetchNews());


export const getNewsSuccess = () => dispatch => dispatch({
    type: fromActionTypes.GET_NEWS_SUCCESS
});

export const getNewsFailure = () => dispatch => dispatch({
    type: fromActionTypes.GET_NEWS_FAILURE
});

export const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getNews,
            getNewsSuccess,
            getNewsFailure
        },
        dispatch
    );
