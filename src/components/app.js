import React from 'react';
import {
    // BrowserRouter as Router,
    HashRouter as Router,
    Route
} from 'react-router-dom';

import Intro from './intro';
import Form from './form';

export default class extends React.PureComponent {

    render() {
        return (
            <Router>
                <div id="main" className="my-4">
                    <Route exact path="/" component={Intro} />
                    <Route exact path="/user/:id" component={Form} />
                </div>
            </Router>
        )
    }

}
