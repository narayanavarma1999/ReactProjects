const RestaurantCard = (props) => {
    const { name, cuisines, avgRating: ratings, slaString: minutes, cloudinaryImageId } = props.data
    const image = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/5/28/5d955208-7037-4ff5-9f54-0bbbec6aa92d_11f789f0-80ad-4a9b-8458-441e9ea81726.jpeg`
    console.log(`image:${image}`)
    return (
        <div className="res-card">
            <img className="res-logo" src={image} />
            <p>{name}</p>
            <p>{cuisines.join(", ")}</p>
            <p>{ratings} ⭐</p>
            <p>{minutes}</p>
        </div>
    )
}

export default RestaurantCard