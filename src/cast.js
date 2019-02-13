import React, { Component } from 'react';


class Cast extends Component {
    render() {
        const actorData = this.props.actorData;
        return (
            <div>
                <h3> Actor:{actorData.name}</h3>
                <p> Actor's role:{actorData.role}</p>
            </div>
        );
    }
}

export default Cast;
