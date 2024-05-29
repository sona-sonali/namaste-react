import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
    const {data, showItem, setShowIndex} = props

    // const [showItem, setShowItem] = useState(true)
    // console.log(data)

    const handleClick = () => {
        setShowIndex()
    }

    return(
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-100 p-4 shadow-lg">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="text-lg font-bold">{data.title} ({data.itemCards.length})</span>
                <span>{showItem ? "🔼" : "🔽"}</span>
                </div>
                {showItem && <ItemList item={data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;