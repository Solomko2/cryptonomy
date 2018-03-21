import React from 'react';

// additional
import { Item } from 'semantic-ui-react';

function formatDate(date) {
    return new Date(+date).toDateString();
}

const NewsList = ({ list }) => {
    const news = list;
    let listItems = [];

    if (news) {
        listItems = news.map((item, index) =>
            <Item key={index}>
                <Item.Content>
                    <Item.Header as='a' href={item.url} target={'_blank'}>{item.title}</Item.Header>
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

export default NewsList;