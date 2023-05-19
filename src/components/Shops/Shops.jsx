import React, { useContext, useEffect, useState } from "react";
import { getShops } from "../../services/shopService";
import { AppContext } from "../../context/context";
import Shop from "../Shop/Shop";
import Loader from "../Loader/Loader";

function Shops() {
  const [{ role, activeRole }, dispatch] = useContext(AppContext);
  const [shops, setShops] = useState();

  useEffect(() => {
    async function getData() {
      const shopsData = await getShops();
      setShops(shopsData);
      console.log("render shops: " + shopsData);
    }
    getData();
  }, []);

  if (shops) {
    return (
      <>
        {shops?.map(({ city, rates }, index) => (
          <Shop
            key={index}
            shopId={index}
            city={city}
            rates={rates}
            activeRole={activeRole}
            setShops={setShops}
          />
        ))}
      </>
    );
  } else {
    return <Loader />;
  }
}

export default Shops;
