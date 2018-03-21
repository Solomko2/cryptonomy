import React from 'react';
import {connect} from 'react-redux';
import * as fromNewsActions from '../+state/actions';
import * as fromNewsReducer from '../+state/reducers';

// additional
import { Header, Message, Icon, Item, Button } from 'semantic-ui-react';

console.log(fromNewsReducer.mapStateToProps, 'fromNewsReducer.mapStateToProps');

const NewsList = props => {
    console.log(props, 'NewsList props');
    const news = props.list;
    let listItems = [];
    if (news) {
        listItems = news.map((item, index) =>
            <Item key={index}>
                <Item.Content>
                    <Item.Header as='a' href={item.url}>{item.title}</Item.Header>
                    <Item.Meta>{item.source}</Item.Meta>
                    <Item.Extra>{formatDate(item.date)}</Item.Extra>
                </Item.Content>
            </Item>
        );
    }
    return (
        <Item.Group>{listItems}</Item.Group>
    );
};

function formatDate(date) {
    return new Date(+date).toDateString();
}

const News = props => (
    <div className='wrap'>
        <Header as='h1'>News</Header>
        <Message icon>
            <Icon name='inbox' />
            <Message.Content>
                <Message.Header as='h3'>Info</Message.Header>
                <div>Count: {props.count}</div>
                <div>Status: {props.status}</div>
                <div>Pending: {props.pending ? 'Pending' : 'No'}</div>
                <div>Loading: {props.loaded ? 'Loaded' : 'No'}</div>
            </Message.Content>
        </Message>

        <Button primary onClick={props.getNews}>Get news</Button>

        <NewsList list={props.list}/>
    </div>
);

export default connect(fromNewsReducer.mapStateToProps, fromNewsActions.mapDispatchToProps)(News);