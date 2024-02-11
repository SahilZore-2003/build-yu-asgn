import React from 'react'
import "./Card.scss"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useMovieContext } from "../../context/MovieContext"
const Card = ({ image, name, ratings, release_date }) => {
  const { getMonth } = useMovieContext()
  const [year, month, day] = release_date.split("-")
  return (
    <div className='card'>
      <img src={image} alt={name} />
      <div className="bottom">
        <div>
          <p>{name.slice(0, 20)}{name.length > 20 && " ..."}</p>
          <small>{`${year}/${getMonth(month)}/${day}`}</small>
        </div>
        <div><CircularProgressbar value={ratings} text={ratings} styles={buildStyles({
          pathColor:
            ratings < 5 ? "red" : ratings < 7 ? "orange" : "green",
        })} maxValue={10} /></div>
      </div>


    </div>
  )
}

export default Card
