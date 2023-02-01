import React from 'react'
import FoodItem from '../../Components/FoodItem/FoodItem'
import Summery from '../../Components/Summery/Summery'
import './home.scss'
const Homepage = () => {
  return (
    <div className='Homepage'>
      <Summery></Summery>
      <FoodItem></FoodItem>
    </div>
  )
}

export default Homepage