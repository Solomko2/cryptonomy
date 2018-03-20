import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
    getNews,
    getNewsSuccess,
    getNewsFailure
} from '../../modules/news';


const NewsList = props => {
    const news = props.list;
    const listItems = news.map((item, index) =>
        <li key={index}>
            <a href={item.url}>{item.title}</a>
            <div>{formatDate(item.date)}</div>
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
};

function formatDate(date) {
    return new Date(+date).toDateString();
}

const News = props => (
    <div>
        <h1>News</h1>
        <p>count: {props.count}</p>
        <p>status: {props.status}</p>

        <div>{props.pending ? 'pending' : 'not pending'}</div>
        <div>{props.loaded ? 'loaded' : 'not loaded'}</div>

        <button onClick={props.getNews}>
            Get news
        </button>
        <NewsList list={props.list}/>
    </div>
);

const mapStateToProps = state => ({
    list   : state.news.list,
    count  : state.news.count,
    pending: state.news.pending,
    loaded : state.news.loaded,
    status : state.news.status
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getNews,
            getNewsSuccess,
            getNewsFailure
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(News);