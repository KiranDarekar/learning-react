import { resList } from "../utils/mockData";
import RestroCard from "./RestroCard";
import { useState } from "react";



const RestroContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="restro-wrapper" >
      <div className="restro-search" >
        <button onClick={() => {
            const listOfRestaurantsFilter = listOfRestaurants.filter( (data) => {
                return data.card.card.info.avgRating >= 4;
            });
            setListOfRestaurants(listOfRestaurantsFilter);
        }} className="filter-btn">Top Rated Restaurant</button>
      </div>
      <div className="restro-container">
        {listOfRestaurants.map((restaurantCard) => ( 
          <RestroCard key={restaurantCard.card.card.info.id} resData={restaurantCard} /> 
        ) )}
      </div>
    </div>
  )
}

export default RestroContainer;