import React, { useState } from 'react'
import "./Movie.scss"
import { useParams } from 'react-router-dom'
import { useMovieContext } from '../../context/MovieContext'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import VideoPopup from '../../components/VideoPopup/VideoPopup';
const Movie = () => {
  const [show, setShow] = useState(false)
  const { id } = useParams()
  const { data, getMonth } = useMovieContext()
  const movie = data.action.find((e) => e.id == id) || data.comedy.find((e) => e.id == id)
  const [year, month, day] = movie.release_date.split("-")


  function convertMinsToHrsMins(minutes) {
    var h = Math.floor(minutes / 60);
    var m = minutes % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    return `${h} hours ${m} miniutes`
  }

  return (
    <div className='movie'>
      <VideoPopup show={show} setShow={setShow} videourl={movie?.videourl} />
      <div className="bg">
        <img src={movie?.banner} alt="" />
      </div>
      <div className="opacity-layer"></div>
      <div className="movieDetails">
        <div className="left">
          <img src={movie.image} alt="" />
        </div>
        <div className="right">
          <h2>{movie.name}</h2>
          <div className="info">
            <div className="genres">
              <span>{movie.genre}</span>
            </div>
            <div className='progress'>
              <CircularProgressbar value={movie.ratings} text={movie.ratings} styles={buildStyles({
                pathColor:
                  movie.ratings < 5 ? "red" : movie.ratings < 7 ? "orange" : "green",
              })} maxValue={10} /></div>
          </div>

          <button className='trailer' onClick={() => setShow(true)}>Watch Trailer</button>

          <div className="bottom">
            <div>
              <b>Release Date </b>  <span>{`${year}-${getMonth(month)}-${day}`}</span>
            </div>
            <div>
              <b>Duration  </b>  <span>{convertMinsToHrsMins(movie.duration)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
