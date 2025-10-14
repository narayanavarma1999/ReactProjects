import axios from "axios";
import { useEffect, useState } from "react";
import RestaurantCard from "../custom/RestaurantCard";
import { SWIGGY_API } from "../../utils/constants";
import React from "react";

const Body = () => {

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await axios.get(SWIGGY_API).then(data => data)
            const restaurants = response?.data?.data?.cards?.find((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setRestaurants(restaurants)
        }
        getData()
    }, [])

    const handleTopRatedRestaurants = () => {
        const filterRestaurants = restaurants.filter(restaurant => restaurant.info.avgRating > 4.5)
        setRestaurants(filterRestaurants)
    }

    return (
        <div className="body">
            <input className="search" placeholder="Search here" />
            <div>
                <button className="filter-btn" onClick={handleTopRatedRestaurants}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {restaurants && restaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} data={restaurant.info} />)}
            </div>
        </div>
    )
}

export default Body