import React from 'react'
import "./Explore.scss"
import { useNavigate, useParams } from 'react-router-dom'
import { useMovieContext } from '../../context/MovieContext'

const Explore = () => {
  const navigate = useNavigate()
  const { type } = useParams()
  const { data } = useMovieContext()
  return (
    <div className='explore'>
      {
        data[type].map((e,i) => (
          <div key={i} className='search-card' onClick={() => {navigate(`/movie/${e.id}`);window.scrollTo(0,0)}}>
            <img src={e.image} alt={e.name} />
            <p>{e.name}</p>
            <small>{e.release_date}</small>
          </div>
        ))
      }

    </div>
  )
}

export default Explore
