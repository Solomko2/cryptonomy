import * as newsActions from "../actions/news.actions";
import axios from "axios/index";

export const getNews = () => async dispatch => {
    try {
        const response = await axios.get(process.env.REACT_APP_API_HOST);

        await dispatch(newsActions.getNewsSuccess(response.data));
    } catch (err) {
        await dispatch(newsActions.getNewsFailure(err));
    }
};