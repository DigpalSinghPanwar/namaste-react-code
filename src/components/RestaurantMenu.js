import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(MENU_URL + id);
    const json = await data.json();
    setResMenu(json);
  }
  if (resMenu === null) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, avgRatingString } =
    resMenu?.data?.cards[0]?.card?.card?.info;

  const itemCards =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;
  return (
    <div>
      <h2>{name}</h2>
      <h2>
        {costForTwoMessage} - {avgRatingString} Stars
      </h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
