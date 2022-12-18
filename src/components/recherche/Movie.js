import React from 'react';

const Movie = (props) => {
    const { movie, onClickMovie } = props;

    return (
        <div className='movie' onClick={onClickMovie}>
            <img
                src={
                    movie.poster_path ?
                        `https://image.tmdb.org/t/p/original${movie.poster_path}` :
                        `https://films.lynetp.com/wp-content/uploads/2022/12/not-found-215-320.jpg`
                }
                alt="poster" />
            <div className='conteneur'>
                <li>{movie.title}</li>
            </div>
        </div>
    )
}

export default Movie;

