import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import News from "../news";

const App = () => (
    <div>
        <header>
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
        </header>

        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/news" component={News} />
        </main>
    </div>
);

export default App;