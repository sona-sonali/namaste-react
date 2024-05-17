import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import { SWIGGY_API } from "../utils.js/constants"
import useOnlineStatus from "../utils.js/useOnlineStatus"

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    // const { listOfRestaurants, isLoading, error } = useSwiggyAPI()
    // console.log(listOfRestaurants)
    const [searchText, setSearchText] = useState("")
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API)
        const response = await data.json()

        console.log(response)
        setListOfRestaurants(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const onlineStatus = useOnlineStatus()

    if(onlineStatus === false) {
        return <h1>
            Looks like you are offline. Please check your internet connectivity. 
        </h1>
    }
// conditional rendering
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
                    const resfilteredList = listOfRestaurants.filter(res => res.info.avgRating < 4)
                    setFilteredRestaurants(resfilteredList)
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