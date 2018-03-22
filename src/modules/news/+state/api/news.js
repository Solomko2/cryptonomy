import * as newsActions from "../actions/news.actions";
import * as fromMiddleware from '../middlewares/fetchNews';

export const getNews = () => async dispatch => {
    try {
        let params = { symbol: '', isCrypto: true };
        const response = await fromMiddleware.fetchNews(params);
        console.log(response);
        dispatch(newsActions.getNews());
        await dispatch(newsActions.getNewsSuccess(response));
    } catch (err) {
        await dispatch(newsActions.getNewsFailure(err));
    }
};