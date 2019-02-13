import React, { Component } from 'react';


class Cast extends Component {
    render() {


        return (
            <div>
                <h3> Actor:{this.props.actorData.name}</h3>
                <p> Actor's role:{this.props.actorData.role}</p>
            </div>
        );
    }
}

export default Cast;
