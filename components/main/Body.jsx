import axios from "axios";
import { useEffect, useState } from "react";
import RestaurantCard from "../custom/RestaurantCard";

const Body = () => {
    const [restaurants, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await axios.get("https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api").then(data => data)
            const restaurants = response?.data?.data?.cards?.find((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setData(restaurants)
        }
        getData()
    }, [])

    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {restaurants && restaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} data={restaurant.info} />)}
            </div>
        </div>
    )
}

export default Body