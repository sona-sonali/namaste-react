import { useEffect, useState } from "react"
import { SWIGGY_API } from "./constants"

const useSwiggyAPI = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        setIsLoading(true)
        setError(null)
        try{
        const data = await fetch(SWIGGY_API)
        const response = await data.json()
        console.log(response)
        setListOfRestaurants(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
        
    }

    return { listOfRestaurants, isLoading, error } ;
}

export default useSwiggyAPI