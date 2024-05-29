import { useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { MENU_API } from "../utils.js/constants"
import useRestaurantMenu from "../utils.js/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"


const RestaurantMenu = () => {
    
    const {resId} = useParams()
    const [showIndex, setShowIndex] = useState(null)

    const resDetails = useRestaurantMenu(resId)

    if (resDetails===null){
        return <Shimmer />
    }

    const { name, cuisines, costForTwoMessage, avgRating } = resDetails?.cards[2]?.card?.card?.info

    // const { itemCards } = resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    // console.log(resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
        return c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

    const updateIndex = (index) => {
        showIndex===index ? setShowIndex(null) : setShowIndex(index)

    }

     
    return (
        <div className="text-center">
            <h2 className="font-bold my-5 text-xl">{name}</h2>
            <p className="font-bold text-lg mb-2">{cuisines.join(",")} - {costForTwoMessage}</p>
            {categories.map((category, index) => 
            <RestaurantCategory 
            key={category.card.card.title} 
            data= {category.card.card}
            showItem={index===showIndex && true}
            setShowIndex= {() => updateIndex(index)}
            />)}
        </div>
    )
}

export default RestaurantMenu