import React from 'react'
import "./List.scss"
import Category from '../Category/Category'
import {useMovieContext} from "../../context/MovieContext"
const List = () => {
  const {data} = useMovieContext();
  return (
    <div className='list'>
        <Category title={"action"} data={data.action} />
        <Category title={"Comedy"} data={data.comedy} />
    </div>
  )
}

export default List
