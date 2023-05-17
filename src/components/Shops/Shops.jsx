import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { getShops } from "../../services/shopService";
import { AppContext } from "../../context/context";
import Shop from "../Shop/Shop";

function Shops() {
  const [{ role, activeRole }, dispatch] = useContext(AppContext);
  const [shops, setShops] = useState();

  useEffect(() => {
    async function getData() {
      const shopsData = await getShops();
      setShops(shopsData);
      console.log(shopsData);
    }
    getData();
  }, []);

  return (
    <>
      {shops?.map(({ city, rates }, index) => (
        <Shop
          key={index}
          shopId={index}
          city={city}
          rates={rates}
          activeRole={activeRole}
        />
      ))}
    </>
  );
}

export default Shops;
