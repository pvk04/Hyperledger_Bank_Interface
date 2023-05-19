import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Likes from "../Likes/Likes";
import { AppContext } from "../../context/context";
import ReviewModal from "../ReviewModal/ReviewModal";

function Shop({ setShops, shopId, city, rates, activeRole }) {
  const [{ login, role }] = useContext(AppContext);
  const [showRates, setShowRates] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <>
      <Card>
        <Card.Header>Магазин №{shopId + 1}</Card.Header>
        <Card.Body>
          <Card.Text>Город: {city}</Card.Text>
          <div style={{ display: showRates ? "block" : "none" }}>
            <Card.Text>Обзоры:</Card.Text>
            {rates.map(({ author, text, rate, likes, comments }, rateId) => (
              <div
                key={rateId}
                style={{
                  padding: "10px",
                  marginBottom: "10px",
                  border: "1px solid black",
                  borderRadius: "5px",
                }}
              >
                <Card.Text>
                  {author} - {rate} из 10
                </Card.Text>
                <Card.Text>{text}</Card.Text>
                <Likes
                  setShops={setShops}
                  likes={likes}
                  shopId={shopId}
                  rateId={rateId}
                />
                {/* передать входные параметры в лайк */}
              </div>
            ))}
          </div>
        </Card.Body>
        <Card.Footer
          style={{
            display: "grid",
            gap: "0px 10px",
            gridTemplateColumns: "200px 200px 200px",
          }}
        >
          {rates.length > 0 ? (
            <Button
              variant="primary"
              onClick={() => {
                setShowRates(!showRates);
              }}
            >
              {showRates ? "Скрыть обзоры" : "Показать обзоры"}
            </Button>
          ) : null}
          <Button
            variant="success"
            style={{ display: role === null ? "none" : "block" }}
            onClick={() => {
              setShow(true);
            }}
          >
            Создать обзор
          </Button>
          <Button
            variant="danger"
            style={{
              marginLeft: "10px",
              display: activeRole == 2 ? "flex" : "none",
            }}
          >
            Удалить магазин
          </Button>
        </Card.Footer>
      </Card>
      <ReviewModal
        setShops={setShops}
        shopId={shopId}
        isShown={show}
        handleHide={() => {
          setShow(false);
        }}
      />
    </>
  );
}

export default Shop;
