import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_CARDS_URL } from "../utils/constants";
import Shimmer from "./Shimmer"

const MenuCard = () => {
    const [menuCards, setMenuCards] = useState([]);

    const { resId } = useParams()

    const fetchMenuCards = async () => {
        const res = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.6332169&lng=74.8671763&restaurantId=" + resId)
        const menudata = await res.json();
        setMenuCards(menudata.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
    };



    useEffect(() => {
        fetchMenuCards();
    }, []);

    return menuCards.length === 0 ?
        <div className="flex flex-wrap gap-6 p-4 justify-center">
            {[...Array(2)].map((_, index) => (
                <Shimmer key={index} />
            ))}
        </div> : (
            <div className="w-full flex flex-col items-center">
                {menuCards.map((data, index) => {
                    const { info } = data.card;
                    const { description, finalPrice, name, imageId, price, defaultPrice, id } = info;

                    return (
                        <div
                            key={id}
                            className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 mb-6"
                        >
                            <div className="flex-1">
                                <h1 className="text-xl font-bold text-gray-800 mb-2">
                                    {name}
                                </h1>

                                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                                    {description}
                                </p>

                                <span className="text-lg font-semibold text-green-600">
                                    ₹{finalPrice / 100 || price / 100 || defaultPrice / 100}
                                </span>
                            </div>

                            <div className="w-40 h-40">
                                <img
                                    className="w-full h-full object-cover rounded-xl shadow-md"
                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
                                    alt={name}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        );
};

export default MenuCard;