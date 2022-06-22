import React from 'react';

const Movie = (props) => {
    const { movie, setCart } = props;

    const buy = () => {
        console.log("buy movie");

        setCart((currState) => {
            return [ ...currState, { title: movie.title, year: movie.year}]
        })
    }

    return (
        <div className="card col-3 m-2">
        <img src={movie.poster} className="card-img-top mx-auto d-block mb-3" alt="..." style={{ width: "250px", height: "250px"}}/>
        <div className="card-body">
            <h5 className="card-title">{movie.title} - {movie.year}</h5>
            <p className="card-text">{movie.desc}</p>
            <p className="card-text">Qouta: {movie.quota}</p>
            <button className="btn btn-primary">Delete</button>
            { movie.quota > 0 && <button className='btn btn-info' onClick={buy}>Buy</button>}
        </div>
    </div>
    );
}

export default Movie;
