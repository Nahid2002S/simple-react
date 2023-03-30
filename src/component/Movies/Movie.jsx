import React, { useEffect, useState } from 'react';
import SingleMovie from '../SingleMovie/SingleMovie';

const Movie = () => {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setMovies(data))
    },[])

    return (
        <div className='g-col-8'>
            <div className="movieContainer">
                {
                    movies.map(movie => <SingleMovie movie={movie}></SingleMovie>)
                }
            </div>
        </div>
    );
};

export default Movie;