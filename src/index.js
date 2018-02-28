import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route
} from 'react-router-dom';

import './index.css';
import App from './App';
import Blog from './container/blog/resume'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    (<HashRouter>
        <div className="root">
            <Route exact path="/" component={App} />
            <Route exact path="/blog" component={Blog} />
        </div>
    </HashRouter>)
    , document.getElementById('root'));
registerServiceWorker();
