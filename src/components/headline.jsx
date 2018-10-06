import React, { Component } from 'react';
import UserIdHelper from '../helpers/user-id-helper';

class HeadlineComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headerLabel: 'there'
        }
    }

    async componentDidMount() {
        if (await UserIdHelper.isUserStore()) {
            const userId = await UserIdHelper.getUserId();

            this.setState({
                headerLabel: userId
            });
        }
    }

    render() {
        return (
            <h1>
                yo
                    <span className="badge badge-info">
                    {this.state.headerLabel}
                </span>!
            </h1>
        );
    }
}

export default HeadlineComponent;
