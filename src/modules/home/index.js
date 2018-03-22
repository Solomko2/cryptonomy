import React from 'react';
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Header, Button} from 'semantic-ui-react';

const Home = props => (
    <div>
        <Header as='h1'>Home</Header>
        <Button primary onClick={props.changePage}>Go to news</Button>
    </div>
);

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            changePage: () => push('/news')
        },
        dispatch
    );

export default connect(null, mapDispatchToProps)(Home);