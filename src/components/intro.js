import React, { Component } from 'react';

import Headline from './headline';

import { isUserStore, getUserId, clearStoredUserId } from '../helpers/user.js';

class IntroComponent extends Component {

    getButtonLabel() {
        return isUserStore()
            ? 'Display your profile'
            : 'Start'
    }

    redirectToForm() {
        const userId = getUserId();
        window.location.hash = `/user/${userId}`;
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <Headline/>

                    <p className="lead">
                        Zdefiniuj swoje umiejętności
                    </p>

                    <button
                        className="btn btn-success"
                        onClick={() => this.redirectToForm()}
                    >
                        {this.getButtonLabel()}
                    </button>

                    {isUserStore() &&
                        <button
                            className="btn btn-danger"
                            onClick={() => clearStoredUserId()}
                        >
                            Clear
                        </button>
                    }
                </div>
            </div>
        );
    }
}

export default IntroComponent;
