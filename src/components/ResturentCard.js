const ResturentCard = () => {
  const card = {
    name: "Burger King",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/23/949089a2-6871-4737-ab28-f696d6cdf6be_874794.jpg",
    loc: ["Bihara", "patna"],
    rating: "4.2",
  };
  return (
    <div className="flex">
      <div className="p-5 border border-red-500 m-5">
        <img className="w-[200px] h-[200px] p-3 rounded-md" src={card.img}  alt="img"/>

        <h2>{card.name}</h2>
        <h3>{card.loc.join(" ,")}</h3>
        <h4>{card.rating} stars</h4>
      </div>
     
      <div className="p-5 border border-red-500 m-5">
        <img className="w-[200px] h-[200px] p-3 rounded-md" src={card.img} alt="img" />

        <h2>{card.name}</h2>
        <h3>{card.loc.join(" ,")}</h3>
        <h4>{card.rating} stars</h4>
      </div>
      <div className="p-5 border border-red-500 m-5">
        <img className="w-[200px] h-[200px] p-3 rounded-md" src={card.img} alt="img" />

        <h2>{card.name}</h2>
        <h3>{card.loc.join(" ,")}</h3>
        <h4>{card.rating} stars</h4>
      </div>
    </div>
  );
};
export default ResturentCard;
