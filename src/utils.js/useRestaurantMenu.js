import { useEffect, useState } from "react"
import { MENU_API } from "./constants"

const useRestaurantMenu = (resId) => {

    const [resDetails, setResDetails] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId)
        const result = await data.json()
        setResDetails(result.data)
    }

    return resDetails
}

export default useRestaurantMenu