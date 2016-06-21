import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Main from './Main';
import NotFound from './NotFound';

ReactDOM.render(
    <Router>
        <Route path='/' component={Main} />
        <Route path='/*' component={NotFound} />
    </Router>,
    document.getElementById('content')
);
