import * as newsActions from "../actions/news.actions";
import * as fromMiddleware from '../middlewares/fetchNews';

export const getNews = () => async dispatch => {
    dispatch(newsActions.getNews());

    try {
        let params = { symbol: '', isCrypto: true };
        const response = await fromMiddleware.fetchNews(params);
        await dispatch(newsActions.getNewsSuccess(response));
    } catch (err) {
        await dispatch(newsActions.getNewsFailure(err));
    }
};