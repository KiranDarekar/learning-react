import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";



const RestroContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterListOfRestaurants, setFilterListOfRestaurants] = useState([]);

  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null');
    // const data = await fetch('https://pastebin.com/raw/0QcdEDBL');
    const json = await data.json()
    console.log(json.data.cards);
    const dataFilter = json.data.cards.filter((each) => {
         if (each?.card?.card?.info) {
           return each?.card?.card?.info
        }
    })
    console.log(dataFilter);
    setListOfRestaurants(dataFilter);
    setFilterListOfRestaurants(dataFilter);
  }

  const [searchTest, setSearchText] = useState("");
 
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restro-wrapper">
      <div className="search">
        <input
          type="text"
          className="search-input"
          value={searchTest}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          type="button"
          onClick={() => {
            const filterListData = listOfRestaurants.filter((resData) => {
              console.log("search click");
              return resData?.card?.card?.info?.name
                .toLowerCase()
                .includes(searchTest.toLowerCase());
            });
            setFilterListOfRestaurants(filterListData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restro-search">
        <button
          onClick={() => {
            const listOfRestaurantsFilter = listOfRestaurants.filter((data) => {
              return data?.card?.card?.info?.avgRating >= 4;
            });
            setListOfRestaurants(listOfRestaurantsFilter);
          }}
          className="filter-btn"
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restro-container">
        {filterListOfRestaurants?.map((restaurantCard) => (
          <RestroCard
            key={restaurantCard?.card?.card?.info?.id}
            resData={restaurantCard}
          />
        ))}
      </div>
    </div>
  );
}

export default RestroContainer;