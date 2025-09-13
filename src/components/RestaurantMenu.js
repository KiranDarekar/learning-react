import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState({});
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5288974&lng=73.8665321&restaurantId=41981&catalog_qa=undefined&query=Shawarma&submitAction=ENTER');
        const jsonData = await data.json();
        setResInfo(jsonData.data);
        console.log("in res info ojk" , resInfo)
    }

console.log("out sie -", );
    const {name, costForTwoMessage, cuisines, locality } = resInfo?.cards[2]?.card?.card?.info;
    return resInfo === null ? ( <Shimmer />) : (
        <div className="Menu" >
            <h1> {name} </h1>
            <h2> {costForTwoMessage} </h2>
            <h3> {cuisines.join(',')}</h3>
            <h3> {locality}</h3>
            <ul>
                <li>menu 1</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;