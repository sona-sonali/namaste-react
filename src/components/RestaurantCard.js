import { useContext } from "react";
import { CDN_URL } from "../utils.js/constants"
import UserContext from "../utils.js/UserContext";

const RestaurantCard = (props) => {

    const {resData} = props

    const {name, cuisines, cloudinaryImageId, avgRating} = resData?.info
    const {deliveryTime} = resData.info.sla
    const{loggedInUser} = useContext(UserContext)
    return (
        <div className='m-4 p-4 w-[250px] rounded-lg hover:bg-gray-300 bg-gray-100'>
            <img 
            className='rounded-lg'
            alt='res-logo'
            src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className="	text-wrap break-words">{cuisines.join(",")}</h4>
            <h4>{avgRating} starts</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
};

export const withAggrDiscountLable = (RestaurantCard) =>{
    return (props) => {
        const {resData} = props;
        const {header, subHeader} = resData.info.aggregatedDiscountInfoV3

        return (
            <>
             <label className="absolute m-2 p-2 text-lg text-white bg-black">{header}{subHeader}</label>
             <RestaurantCard {...props}/>
            </>
        )
    }
}

export default RestaurantCard