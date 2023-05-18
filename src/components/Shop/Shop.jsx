import React, { useState, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Likes from "../Likes/Likes";
import { AppContext } from "../../context/context";
import ReviewModal from "../ReviewModal/ReviewModal";

function Shop({ shopId, city, rates, activeRole }) {
  const navigate = useNavigate();
  const [{ login }] = useContext(AppContext);
  const [showRates, setShowRates] = useState(false);

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
                <Likes likes={likes} />
                {/* передать входные параметры в лайк */}
              </div>
            ))}
          </div>
        </Card.Body>
        <Card.Footer>
          <Button
            onClick={() => {
              navigate(`/${shopId + 1}`);
            }}
          >
            Создать обзор
          </Button>
          {rates.length > 0 ? (
            <Button
              variant="primary"
              onClick={() => {
                setShowRates(!showRates);
                console.log(showRates);
              }}
            >
              {showRates ? "Скрыть обзоры" : "Показать обзоры"}
            </Button>
          ) : null}
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

      <Routes>
        <Route path=":shopId" element={<ReviewModal />} />
      </Routes>
    </>
  );
}

export default Shop;
