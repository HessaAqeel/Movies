import React, { Component } from 'react';
import Review from './review'
import Cast from './cast';

class Movie extends Component {
    render() {
        const movie = this.props.movie;

        const castData = movie.cast.map(actor => {
            return <Cast actorData={actor} />;
        });
        return (

            <div>
                <h2> {this.props.movie.title} </h2>
                {/* My prop has a movie which has a title  */}
                <img src={this.props.movie.poster} />
                <div> <strong> Rating:  </strong> {this.props.movie.rating} </div>
                <p> {this.props.movie.description} </p>
                <p> Movie director:{this.props.movie.director}</p>
                {castData}

                <Review />

            </div>
        );
    }
}

export default Movie;
