const RestaurantCard = (props) => {

    const {
        name,
        cuisines,
        avgRating: ratings,
        sla,
        cloudinaryImageId,
    } = props.data;

    const image = cloudinaryImageId
        ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${cloudinaryImageId}`
        : "https://via.placeholder.com/300x200.png?text=Restaurant";

    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 cursor-pointer w-[280px] overflow-hidden">
            <img
                className="w-full h-48 object-cover"
                src={image}
                alt={name}
            />

            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
                <p className="text-sm text-gray-500 mt-1 truncate">{cuisines.join(", ")}</p>

                <div className="flex items-center justify-between mt-3 text-sm font-medium text-gray-700">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-xs font-semibold">
                        ⭐ {ratings}
                    </span>
                    <span className="bg-green-100 text-gray-500">⚡️ Delivers in {sla.deliveryTime} mins</span>
                </div>
            </div>
        </div>
    );
};

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="relative">
                <label className="absolute font-normal border-1 text-center rounded-lg w-20 h-7 text-gray-900 bg-amber-300">promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;
