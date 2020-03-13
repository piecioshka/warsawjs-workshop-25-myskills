import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Headline from './headline';

import UserIdHelper from '../helpers/user-id.helper';
import UserHelper from '../helpers/user.helper';

class IntroComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: 'there',
            isUserCreated: false
        };
    }

    componentDidMount() {
        this.updateUserState();
    }

    async updateUserState() {
        const isUserCreated = await UserIdHelper.isUserIdCreated();
        const userName = await UserIdHelper.getUserId() || 'there';
        this.setState((state) => {
            return {
                ...state,
                isUserCreated,
                userName
            }
        });
    }

    async createUser() {
        const userId = await UserIdHelper.createUserId();
        console.log('IntroComponent#createUser', userId);
        await UserHelper.createUser(userId);
        await this.updateUserState();
    }

    async redirectToForm() {
        const userId = await UserIdHelper.getUserId();

        // Oldschool way
        // window.location.hash = `/user/${userId}`;

        // React way
        const { history } = this.props;
        history.push(`/user/${userId}`);
    }

    async removeUser() {
        const userId = await UserIdHelper.getUserId();
        await UserIdHelper.clearStoredUserId();
        await this.updateUserState();
        await UserHelper.removeUser(userId);
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <Headline name={this.state.userName}/>

                    {!this.state.isUserCreated &&
                        <>
                            <button
                                className="btn btn-success"
                                onClick={() => this.createUser()}
                            >
                                Stwórz użytkownika
                            </button>
                        </>
                    }

                    {this.state.isUserCreated &&
                        <>
                            <p className="lead">
                                Zdefiniuj swoje umiejętności
                            </p>

                            <button
                                className="btn btn-success"
                                onClick={() => this.redirectToForm()}
                            >
                                Wpisz swoje umiejętności
                            </button>

                            <button
                                className="btn btn-danger ml-3"
                                onClick={() => this.removeUser()}
                            >
                                Usuń zapisane wartości
                            </button>
                        </>
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(IntroComponent);
