import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //Local State variable - Superpowerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    return (
      <div className="body">
        <div className="filter" onClick={() => {const filteredList = listOfRestaurants.filter(
          (res) => res.info.avgRating > 4.5
        );
        setListOfRestaurants(filteredList);
         }}>
            <button>Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {
              listOfRestaurants.map((restaurant) =>(
                  <RestaurantCard key={restaurant.info.id} resData ={restaurant}/>
              ))
          }
        </div>
      </div>
    );
  };
  export default Body;