export const GET_NEWS = '[ News ] GET_NEWS';
export const GET_NEWS_SUCCESS = '[ News ] GET_NEWS_SUCCESS';
export const GET_NEWS_FAILURE = '[ News ] GET_NEWS_FAILURE';

const initialState = {
    count  : 0,
    pending: false,
    loaded : false,
    list   : [],
    status : null
};

function fetchNews() {
    return fetch('/news.json');
}

function makeFetchNews() {
    return async function (dispatch) {
        dispatch({type: GET_NEWS});
        try {
            const response = await fetchNews();
            const json = await response.json();
            dispatch({type: GET_NEWS_SUCCESS, payload: json, status: response.status})
        } catch(err) {
            dispatch({type: GET_NEWS_FAILURE, err})
        }
    };
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS:
            return {
                ...state,
                pending: true,
                loaded : false
            };

        case GET_NEWS_SUCCESS:
            return {
                ...state,
                pending: false,
                loaded : true,
                list   : action.payload,
                status : action.status,
                count  : action.payload.length
            };

        case GET_NEWS_FAILURE:
            return {
                ...state,
                pending: false,
                loaded : false
            };
        default:
            return state;
    }
};


export const getNews = () => {
    return dispatch => {
        dispatch(makeFetchNews());
    };
};

export const getNewsSuccess = () => {
    return dispatch => {
        dispatch({
            type: GET_NEWS_SUCCESS
        });
    };
};

export const getNewsFailure = () => {
    return dispatch => {
        dispatch({
            type: GET_NEWS_FAILURE
        });
    };
};