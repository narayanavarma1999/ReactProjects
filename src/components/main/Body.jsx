import axios from "axios";
import { useEffect, useState } from "react";
import RestaurantCard from "../custom/RestaurantCard";
import Shimmer from "../custom/Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../utils/constants";


const Body = () => {

    const [restaurants, setRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        async function getData() {
            const response = await axios.get(SWIGGY_API).then(data => data)
            const restaurants = response?.data?.data?.cards?.find((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setRestaurants(restaurants)
            setFilteredRestaurants(restaurants)
        }
        getData()
    }, [])

    const handleTopRatedRestaurants = () => {
        const filterRestaurants = restaurants.filter(restaurant => restaurant.info.avgRating > 4.5)
        setFilteredRestaurants(filterRestaurants)
    }

    const handleOnSearch = () => {
        const filterRestaurants = restaurants.filter(restaurant => (restaurant.info.name).toLowerCase().includes(searchText.toLowerCase()))
        setFilteredRestaurants(filterRestaurants)
    }

    if (restaurants.length === 0) {
        return <Shimmer />
    }

    return (
        <div className="body">
            <input className="search" type="text" placeholder="Search here" value={searchText} onChange={(e) => {
                setSearchText(e.target.value)
            }} />
            <button className="search-button" onClick={handleOnSearch}>Search</button>
            <div>
                <button className="filter-btn" onClick={handleTopRatedRestaurants}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {filteredRestaurants && filteredRestaurants.map(restaurant => <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id} > <RestaurantCard  data={restaurant.info} /></Link>)}
            </div>
        </div>
    )
}

export default Body