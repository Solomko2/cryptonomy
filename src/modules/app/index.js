import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home/index';
import * as fromNewsModule from "../news/index";
import { Menu } from 'semantic-ui-react';

// additional
import 'semantic-ui-css/semantic.min.css';

const App = () => (
    <div className='wrap flex flex-ali-start'>
        <Menu vertical>
            <Menu.Item
                name='home'
                to='/'
            >
                <Link to='/'>Home</Link>
            </Menu.Item>

            <Menu.Item
                name='news'
            >
                <Link to='/news'>News</Link>
            </Menu.Item>
        </Menu>

        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/news" component={fromNewsModule.containers.News} />
        </main>
    </div>
);

export default App;