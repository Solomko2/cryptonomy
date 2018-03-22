import * as newsActions from "../actions/news.actions";
import axios from "axios/index";
import _ from 'lodash';
import store from 'store';
import expirePlugin from 'store/plugins/expire';
import { endpoints, ttlForCache } from './constants';

store.addPlugin(expirePlugin);

const fetchNews = ({symbol, isCrypto}) => get(endpoints.getNews, {symbol, isCrypto}, 'getNews');

const get = async (url, params, storeName) => {
    let data;
    const storageKey = buildStorageKey(storeName, params);
    const dataObj = store.get(storageKey);
    newsActions.getNews();

    if (!dataObj) {
        data = _.get(await axios.get(url, params).catch(_.noop), 'data');
        data && store.set(storageKey, {data}, new Date().getTime() + ttlForCache[storeName]);
        newsActions.getNewsSuccess(data);
    } else {
        data = _.get(dataObj, 'data');
    }

    return data;
};

const buildStorageKey = (storeName, params) => {
    return _.chain(params).pickBy(_.identity).map((value, key) => `${key}~${value}`).concat(storeName).join().value();
};

export {
    fetchNews
}