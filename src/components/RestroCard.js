import { CDN_URL } from "../utils/constants";

const RestroCard = (props) =>{
  const { resData } = props;
  const {
    costForTwo,
    cloudinaryImageId,
    name,
    avgRating,
    cuisine,
    areaName
  } = resData?.card?.card?.info;

  console.log(resData);
  return (
    <div className="restro-card">
      <div>
        <div className="restro-img">
          <img
            src={CDN_URL + cloudinaryImageId}
            alt="The Biryani Life"
          />
        </div>
        <div className="restro-details">
          <div>{costForTwo}</div>
          <div>{name}</div>
          <div>
            <span>{avgRating} </span>
          </div>

          <div>
            {cuisine}
          </div>
          <div>{areaName}</div>
        </div>
      </div>
    </div>
  );
}

export default RestroCard;