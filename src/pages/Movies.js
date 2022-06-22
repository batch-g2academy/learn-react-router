import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';

const Movies = (props) => {
    const { setCart } = props;

    const [ movies, setMovies ] = useState([]);

    const fetchMovies = async () => {
        try {
            let response = await fetch(`http://movie-app-g2.herokuapp.com/movies`);
    
            if (response.ok) {
                let data = await response.json();
                setMovies(data);
            } else {
                throw Error('Something wrong with fetch data');
            }
        } catch (err) {

        }
    }

    useEffect(() => {
        fetchMovies();
    }, [])

    return (
        <div className='row justify-content-center'>
            { movies.map(movie => (
               <Movie key={movie._id} movie={movie} setCart={setCart}/>
            ))}
        </div>
    );
}

export default Movies;
