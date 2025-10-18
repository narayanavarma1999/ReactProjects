import axios from "axios";
import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "../custom/RestaurantCard";
import Shimmer from "../custom/Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../utils/constants";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(SWIGGY_API);
                const restaurants =
                    response?.data?.data?.cards?.find(
                        (card) =>
                            card?.card?.card?.gridElements?.infoWithStyle?.restaurants
                    )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
                setRestaurants(restaurants);
                setFilteredRestaurants(restaurants);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        getData();
    }, []);

    const handleTopRatedRestaurants = () => {
        const filterRestaurants = restaurants.filter(
            (restaurant) => restaurant.info.avgRating > 4.5
        );
        setFilteredRestaurants(filterRestaurants);
    };

    const handleOnSearch = () => {
        const filterRestaurants = restaurants.filter((restaurant) =>
            restaurant.info.name
                .toLowerCase()
                .includes(searchText.trim().toLowerCase())
        );
        setFilteredRestaurants(filterRestaurants);
    };

    if (restaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
            {/* Search & Filter Section */}
            <div className="flex flex-wrap justify-center items-center gap-4 py-8 px-6">
                <input
                    className="border border-gray-300 rounded-full w-80 md:w-1/2 h-12 px-5 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white shadow-sm text-gray-700"
                    type="text"
                    placeholder="🔍 Search for restaurants..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    className="px-5 py-2.5 bg-indigo-500 text-white font-medium rounded-full hover:bg-indigo-600 transition"
                    onClick={handleOnSearch}
                >
                    Search
                </button>
                <button
                    className="px-6 py-2.5 bg-green-400 text-gray-900 font-medium rounded-full hover:bg-green-500 transition"
                    onClick={handleTopRatedRestaurants}
                >
                    ⭐ Top Rated
                </button>
            </div>

            {/* Restaurant Grid */}
            <div className="px-8 pb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
                    {filteredRestaurants.map((restaurant) => (
                        <Link
                            to={`/restaurant/${restaurant.info.id}`}
                            key={restaurant.info.id}
                            className="w-full flex justify-center"
                        >
                            {restaurant?.data?.promoted == null ? <RestaurantCardPromoted data={restaurant.info} /> : <RestaurantCard data={restaurant.info} />}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Body;
