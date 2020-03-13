import React, { Component } from 'react';

class HeadlineComponent extends Component {
    render() {
        return (
            <h1>
                yo
                <span className="badge badge-info">
                    {this.props.name}
                </span>!
            </h1>
        );
    }
}

export default HeadlineComponent;
