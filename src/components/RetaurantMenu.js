import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { json } from "react-router-dom";
import { data } from "@remix-run/router";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  
  const {resId} = useParams();
  

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API+resId
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;

  const { name, city, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;
  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{city}</h2>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessage}</p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((itemName) => (
          <li key={itemName.card.info.id}>{itemName.card.info.name} {" "} - {itemName.card.info.price/100  || itemName.card.info.finalPrice/100}Rs</li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
