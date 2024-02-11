import React from 'react'
import "./Search.scss"
import { useNavigate, useParams } from 'react-router-dom'
import { useMovieContext } from '../../context/MovieContext'
const Search = () => {
    const { moviename } = useParams()
    const { data } = useMovieContext()

    const movie = data.action.find((e) => e.name.toLowerCase().includes(moviename.toLowerCase())) || data.comedy.find((e) => e.name.toLowerCase().includes(moviename.toLowerCase()))

    const navigate = useNavigate()


    return (
        <div className='main-search-container'>
            {
                movie ?
                    <div className="search-container">
                        <div className='search-card' onClick={() => {navigate(`/movie/${movie.id}`); window.scrollTo(0,0)}}>
                            <img src={movie.image} alt={movie.name} />
                            <p>{movie.name}</p>
                            <small>{movie.release_date}</small>
                        </div>
                    </div>
                    : <h1>Sorry Result not found.</h1>
            }
        </div>
    )
}

export default Search
