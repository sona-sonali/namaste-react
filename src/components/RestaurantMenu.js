import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { MENU_API } from "../utils.js/constants"


const RestaurantMenu = () => {
    
    const [resDetails, setResDetails] = useState(null)
    const {resId} = useParams()

    useEffect(()=>{
        fetchMenu()
    }, [])


    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId )
        const result = await data.json()
        console.log(result);
        setResDetails(result.data)
    }

    if (resDetails===null){
        return <Shimmer />
    }

    const { name, cuisines, costForTwoMessage, avgRating } = resDetails?.cards[2]?.card?.card?.info

    const { itemCards } = resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

     
    return (
        <div>
            <h2>{name}</h2>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <h4>{avgRating}- Rating</h4>
            <h3>Recommended</h3>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} <br /> {item.card.info.description}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu