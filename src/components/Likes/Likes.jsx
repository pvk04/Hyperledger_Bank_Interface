import React, { useEffect, useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { like } from "../../services/shopService";
import { AppContext } from "../../context/context";

function Likes({ setShops, likes, shopId, rateId }) {
  const [{ login, role }] = useContext(AppContext);
  const [likesAmount, setLikesAmount] = useState(0);
  const [dislikesAmount, setDislikesAmount] = useState(0);

  useEffect(() => {
    function countAmount() {
      let likesCount = 0;
      let dislikesCount = 0;
      for (const user in likes) {
        if (likes[user].isLike == "true") {
          likesCount++;
        } else if (likes[user].isLike == "false") {
          dislikesCount++;
        }
      }
      setLikesAmount(likesCount);
      setDislikesAmount(dislikesCount);
    }
    countAmount();
  }, []);

  async function handleLike(isLike) {
    try {
      setShops();
      const shopsData = await like(login, shopId, rateId, isLike);
      console.log("new likes: " + shopsData);
      setShops(shopsData);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex" }}>
        <Card.Text style={{ display: "flex", margin: "auto" }}>
          {likesAmount}
        </Card.Text>
        <Button
          variant="success"
          onClick={() => {
            handleLike(true);
          }}
          disabled={role == null ? true : false}
        >
          +
        </Button>
      </div>
      <div style={{ display: "flex" }}>
        <Card.Text style={{ display: "flex", margin: "auto" }}>
          {dislikesAmount}
        </Card.Text>
        <Button
          variant="danger"
          onClick={() => {
            handleLike(false);
          }}
          disabled={role == null ? true : false}
        >
          -
        </Button>
      </div>
    </div>
  );
}

export default Likes;
