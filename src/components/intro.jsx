import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Headline from './headline';

import UserIdHelper from '../helpers/user-id-helper';
import AnswersHelper from '../helpers/answers-helper';

class IntroComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startButtonLabel: 'Poczekaj...',
            shouldDisplayRemoveButton: false
        }
    }

    async componentDidMount() {
        const isUserStored = await UserIdHelper.isUserStore();
        this.setState({
            startButtonLabel: isUserStored
                ? 'Pokaż swój profil'
                : 'Wpisz swoje umiejętności',
            shouldDisplayRemoveButton: isUserStored
        });
    }

    async redirectToForm() {
        const isUserStored = await UserIdHelper.isUserStore();
        const userId = await UserIdHelper.getUserId();

        if (!isUserStored) {
            await AnswersHelper.saveAnswers(userId, {});
        }

        // Oldschool way
        // window.location.hash = `/user/${userId}`;

        // React way
        const { history } = this.props;
        history.push(`/user/${userId}`);
    }

    removeUserAnswers() {
        UserIdHelper.clearStoredUserId();

        this.setState({
            startButtonLabel: 'Wpisz swoje umiejętności',
            shouldDisplayRemoveButton: false
        });
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <Headline />

                    <p className="lead">
                        Zdefiniuj swoje umiejętności
                    </p>

                    <button
                        className="btn btn-success"
                        onClick={() => this.redirectToForm()}
                    >
                        {this.state.startButtonLabel}
                    </button>

                    {this.state.shouldDisplayRemoveButton &&
                        <button
                            className="btn btn-danger ml-3"
                            onClick={() => this.removeUserAnswers()}
                        >
                            Usuń zapisane wartości
                        </button>
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(IntroComponent);
