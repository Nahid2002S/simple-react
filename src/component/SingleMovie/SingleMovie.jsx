import React from 'react';

const SingleMovie = ({movie}) => {
    return (
        <div className='card text-center mb-2 bg-secondary fw-semibold'>
            <div className="poster w-50 mx-auto">
              <img className='w-25' src={movie.poster} alt=""/>
            </div>
            <p>{movie.movieName}</p>
            <p>{movie.description}</p>
            <p>Category: {movie.category}</p>
            <div className="watchTimeAndRating">
                <p>WatchTime: {movie.watchTime}</p>
                <p>Rating: {movie.imdbRating}</p>
            </div>
            <button className="btn btn-primary w-75 mx-auto">Book Now</button>
        </div>
    );
};

export default SingleMovie;