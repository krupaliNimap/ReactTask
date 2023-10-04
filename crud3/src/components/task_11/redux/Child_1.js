import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCakeAction, buyIcecreamAction } from "./cakeActions";
import { useState } from "react";
import cake from "../../../assets/images/birthday-cake.png";
import ice_cream from "../../../assets/images/ice-cream.png";
import { toast } from "react-hot-toast";

const Child_1 = () => {
  const dispatch = useDispatch();
  const [cakes, setCakes] = useState(1);
  const [icecream, setIcecream] = useState(1);
  const numOfCakes = useSelector((state) => state.cakeReducer.numOfCakes);
  const numOfIceCreams = useSelector(
    (state) => state.iceCreamReducer.numOfIceCreams
  );
  const buyCake = () => {
    if (cakes < numOfCakes) dispatch(buyCakeAction(cakes));
    else
      toast.error(`OOPS!! Only ${numOfCakes} cakes remaining`, {
        icon: "😥",
        position: "top-right",
        style: {
          border: "1px solid #713200",
          padding: "10px",
          backgroundColor: "#FF6969",
          color: "#000000",
        },
      });
  };
  const buyIceCream = () => {
    if (icecream < numOfIceCreams) dispatch(buyIcecreamAction(icecream));
    else
      toast.error(`OOPS!! Only ${numOfIceCreams} Ice creams remaining`, {
        icon: "😥",
        position: "top-right",
        style: {
          border: "1px solid #713200",
          padding: "10px",
          backgroundColor: "#FF6969",
          color: "#000000",
        },
      });
  };
  return (
    <>
      <p>Redux Example with payload</p>
      <p className="shop-title">Cakes and Ice-Cream shop</p>
      <div className="cake-icecream-shop">
        <div className="shop-containers hover-container">
          <img alt="cake" src={cake} height="230px" />
          Number of Cakes : {numOfCakes}
          <input
            type="number"
            value={cakes}
            onChange={(e) => setCakes(e.target.value)}
          />
          <button className="shop-button" onClick={buyCake}>
            Buy {cakes} cake
          </button>
        </div>
        <div className="shop-containers hover-container">
          <img alt="icecream" src={ice_cream} height="230px" />
          Number of Icecream : {numOfIceCreams}
          <input
            type="number"
            value={icecream}
            onChange={(e) => setIcecream(e.target.value)}
          />
          <button className="shop-button" onClick={buyIceCream}>
            Buy {icecream} cake
          </button>
        </div>
      </div>
    </>
  );
};

export default Child_1;
