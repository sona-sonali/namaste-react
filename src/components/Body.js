import { useEffect, useState } from "react"
import resList from "../utils.js/mockdata"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const response = await data.json()

        console.log(response)
        setListOfRestaurants(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    // Conditional Rendering

    // if(listOfRestaurants.length===0){
    //     return <Shimmer />
    // }
    // console.log(listOfRestaurants)

    return listOfRestaurants.length===0 ? <Shimmer /> : (
        <div className='body'>
            <div className='filter'>
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)} ></input>
                    <button onClick={() => {
                        const resfilteredList = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurants(resfilteredList)
                    }} 
                    >Search</button>
                </div>
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
                {filteredRestaurants.map(restaurant => <Link to={'/restaurants/' + restaurant.info.id} key={restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>)}
            </div>
        </div>
    )
}

export default Body