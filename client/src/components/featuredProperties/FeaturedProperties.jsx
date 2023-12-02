import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const {data,loading, error} = useFetch("/hotels?featured=true&limit=4") 
  return (
    <div className="fp">
      {loading ?"Loading" : <>
      {data.map(item=>(<div className="fpItem" key={item._id}>
        <img
          src={item.photo[0]}
          alt=""
          className="fpImg"
        />
        <span className="fpName">{item.name}</span>
        <span className="fpCity">{item.city}</span>
        <span className="fpPrice">Starting from {item.cheapestPrice}</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      ))
      }
      </>}
     
    </div>
  );
};

export default FeaturedProperties;
