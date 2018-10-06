import React, { Component } from 'react';
import { isUserStore, getUserId } from '../helpers/user';

class HeadlineComponent extends Component {

    getHeaderLabel() {
        return isUserStore()
            ? getUserId()
            : 'there';
    }

    render() {
        return (
            <h1>
                yo
                    <span className="badge badge-info">
                    {this.getHeaderLabel()}
                </span>!
            </h1>
        );
    }
}

export default HeadlineComponent;
