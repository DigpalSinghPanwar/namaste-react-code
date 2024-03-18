import { useNavigate } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

export default RestaurantCard = (props) => {
  const navigate = useNavigate();
  const { resData } = props;
  const { cloudinaryImageId, avgRating, name, cuisines, costForTwo, sla } =
    resData?.info;
  return (
    <div
      onClick={() => navigate(`/restaurants/${resData.info.id}`)}
      className="res-card"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};
