import { useState } from "react";
import "./search.scss"
import React from "react";

// import axios from "axios";


export default function Search() {

    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const buscar = async (e) => {
        e.preventDefault();

        const url =   `https://api.themoviedb.org/3/search/movie?api_key=305be9bd952e986f748dbae4a565b4e4&language=en-US&query=${query}&page=1&include_adult=false`;
        

        try{
            const response = await fetch(url);
            const data = await response.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <div className="search">
            <div className="search__container">
                <form className="search__form" onSubmit={buscar}>
                    <label htmlFor="query"></label>
                    <input
                    className="search__input" 
                    type="text"
                    name="query"
                    placeholder="movies" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}/>
                <button className="search__btn" type="submit">
                    Search
                </button>
                </form>
            </div>
            <div className="card__list">
                    {movies.filter(movie => movie.poster_path).map(movie => (
                        <div className="card" key={movie.id}>
                            <img src= {`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title + "poster"}/>
                            <div className="card__content">
                                <h3 className="card__title">{movie.title}</h3>
                                <p><small>RELEASE DATE: {movie.release_date}</small></p>
                                <p><small>RATING: {movie.vote_average}</small></p>
                                <p className="card__desc">{movie.overview}</p>
                            </div>
                        </div>
                        ))}
                </div>
        </div>   
    );  
};

// Ejercicio Api 
// export default function Search() {

//     const [busqueda, setBusqueda] = useState("");

//     const buscar = async(e) => {
//         e.preventDefault()
//         const response = await axios.get(
//             "https://reqres.in/api/users", 
//             {
//                 params: {
//                     busqueda: busqueda
//                 }
//             }
//         );
//         console.log(response.data);
//         // const data = await response.data;

//         // return data;
//     }

//    return (
//         <div className="search">
//             <div className="search__container">
//                 <input value={busqueda}
//                     onChange={ (e) =>
//                     setBusqueda(e.target.value)
//                 }
//                 className="search__input" 
//                 placeholder="find service" 
//                 type="text"/>
//                 <img className="search__mic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlrigxFypbwS_Nddf3XkQ3YrI5_jl4m2QkSQ&usqp=CAU" alt=""/>
//             </div>
//             <button onClick= {() => buscar()} className="search__btn">
//                 Search
//             </button>
//         </div>
//     );
// };

