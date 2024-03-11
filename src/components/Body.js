import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData.js";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);

  // 2) useState
  // const arr = useState(resList);
  // const [listOfRestaurants, setListOfRestaurant] = arr;

  // 3)  useState
  // const arr = useState(resList);
  // const listOfRestaurants = arr[0];
  // const setListOfRestaurant = arr[1];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
