import * as fromNewsActionTypes from '../action_types';

const initialState = {
    count  : 0,
    pending: false,
    loaded : false,
    list   : [],
    status : null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case fromNewsActionTypes.GET_NEWS:
            return {
                ...state,
                pending: true,
                loaded : false
            };

        case fromNewsActionTypes.GET_NEWS_SUCCESS:
            return {
                ...state,
                pending: false,
                loaded : true,
                list   : action.payload.data,
                status : action.status,
                count  : action.payload.length
            };

        case fromNewsActionTypes.GET_NEWS_FAILURE:
            return {
                ...state,
                pending: false,
                loaded : false
            };
        default:
            return state;
    }
};
