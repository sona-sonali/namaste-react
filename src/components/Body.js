import { useState } from "react"
import resList from "../utils.js/mockdata"
import RestaurantCard from "./RestaurantCard"

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)
    return (
        <div className='body'>
            <div className='btn'>
                <button className="filtered-btn"
                  onClick={() => {
                    const filteredList = listOfRestaurants.filter(res => res.info.avgRating < 4)
                    setListOfRestaurants(filteredList)
                  }}
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className='res-container'>
                {listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)}
            </div>
        </div>
    )
}

export default Body