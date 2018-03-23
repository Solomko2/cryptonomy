import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Header, Message, Icon, Button } from 'semantic-ui-react';

import * as newsApi from "../../+state/api/news";
import NewsList from '../NewsList';
import { getNewsFailure, getNewsSuccess } from "../../+state/actions/news.actions";

class News extends Component {
    render() {
        const { count, status, pending, loaded, list, getNews } = this.props;

        return (
            <div className='flex flex-dir-col flex-ali-start'>
                <Header as='h1'>News</Header>
                <Message icon>
                    <Icon name='inbox' />
                    <Message.Content>
                        <Message.Header as='h3'>Info</Message.Header>
                        <div>Count: {count}</div>
                        {/*<div>Status: {status}</div>*/}
                        <div>Pending: {pending ? 'Pending' : 'No'}</div>
                        <div>Loaded: {loaded ? 'Loaded' : 'No'}</div>
                    </Message.Content>
                </Message>

                <Button primary onClick={ () => getNews() }>Get news</Button>

                <NewsList list={list}/>
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    list   : state.news.list,
    count  : state.news.count,
    pending: state.news.pending,
    loaded : state.news.loaded,
    status : state.news.status
});

export const mapDispatchToProps = dispatch => {
    const {getNews} = newsApi;

    return bindActionCreators(
        {
            getNews,
            getNewsSuccess,
            getNewsFailure
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(News);