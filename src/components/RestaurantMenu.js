import Shimmer from "./shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestrauntMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();

    let resInfo = useRestaurantMenu(resId);
    console.log("resInfo -" , resInfo);
    if(resInfo === null) return  <Shimmer />; 
 console.log("out sie -", resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log("itemCards -", itemCards);
    return  (
        <div className="Menu" >
            <ul>
            {itemCards.map( (item)=> (
                <li key={item.card.info.id}>
                    {item.card.info.name}  - {" Rs."}
                    {item.card.info.price}
                </li>
            ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;