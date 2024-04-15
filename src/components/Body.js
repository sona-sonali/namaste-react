import { useEffect, useState } from "react"
import resList from "../utils.js/mockdata"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const response = await data.json()

        console.log(response)
        setListOfRestaurants(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    // Conditional Rendering

    // if(listOfRestaurants.length===0){
    //     return <Shimmer />
    // }

    return listOfRestaurants.length===0 ? <Shimmer /> : (
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