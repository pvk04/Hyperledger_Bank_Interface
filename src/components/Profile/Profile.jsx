import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AppContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(AppContext);

  function handleLogout() {
    dispatch({ type: "SET_LOGOUT" });
    console.log(state);
  }

  return (
    <Card bg="primary" border="light" text="white">
      <Card.Header>Профиль</Card.Header>
      <Card.Body>
        <Card.Text
          style={
            state.login || state.id ? { display: "flex" } : { display: "none" }
          }
        >
          Логин: {state.login}
        </Card.Text>
        <Card.Text>
          Роль:{" "}
          {state.role == "0"
            ? "Пользователь"
            : state.role == "1"
            ? "Продавец"
            : state.role == "2"
            ? "Админ"
            : state.role == "3"
            ? "Банк"
            : state.role == "4"
            ? "Поставщик"
            : state.id
            ? "Магазин"
            : "Не авторизированный пользователь"}
        </Card.Text>
        <Card.Text
          style={
            state.login || state.id ? { display: "flex" } : { display: "none" }
          }
        >
          Баланс: {state.balance}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button
          style={
            state.login || state.id ? { display: "flex" } : { display: "none" }
          }
          variant="danger"
          onClick={handleLogout}
        >
          Выход
        </Button>
        <Button
          style={
            !state.login && !state.id
              ? { display: "flex" }
              : { display: "none" }
          }
          variant="danger"
          onClick={() => {
            navigate("/login");
          }}
        >
          Вход
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default Profile;
