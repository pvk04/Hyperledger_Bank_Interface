import React, { useEffect, useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { like } from "../../services/shopService";
import { AppContext } from "../../context/context";

function Likes({ likes, shopId, rateId }) {
  const [{ login }] = useContext(AppContext);
  const [likesAmount, setLikesAmount] = useState(0);
  const [dislikesAmount, setDislikesAmount] = useState(0);

  useEffect(() => {
    function countAmount() {
      const likesCount = 0;
      const dislikesCount = 0;
      for (const user in likes) {
        if (likes[user].isLike) likesCount++;
        else dislikesCount++;
      }
      setLikesAmount(likesCount);
      setDislikesAmount(dislikesCount);
    }
    countAmount();
  }, []);

  async function handleLike(shopId, rateId, isLike) {
    const shops = await like(login, shopId, rateId, isLike);
    console.log(shops);
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Card.Text>{likesAmount}</Card.Text>
        <Button
          variant="success"
          onClick={() => {
            handleLike(shopId, rateId, true);
          }}
        >
          +
        </Button>
      </div>
      <div style={{ display: "flex" }}>
        <Card.Text>{dislikesAmount}</Card.Text>
        <Button
          variant="danger"
          onClick={() => {
            handleLike(shopId, rateId, false);
          }}
        >
          -
        </Button>
      </div>
    </div>
  );
}

export default Likes;
