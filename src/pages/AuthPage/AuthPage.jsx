import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { login } from "../../services/authService.js";
import { useContext } from "react";
import { AppContext } from "../../context/context.js";
import { Navigate, useNavigate } from "react-router";

function AuthPage() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(AppContext);
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e, org = "org1") {
    e.preventDefault();
    try {
      const user = await login(address, password, org);
      user.login = address;
      await dispatch({ type: "SET_USER", payload: await user });
      navigate("/");
    } catch (e) {
      alert("error");
      console.log(e);
    }
  }

  function handleHide() {
    navigate("/");
  }

  return (
    <Modal show={true} centered onHide={handleHide}>
      <Modal.Header closeButton>
        <Modal.Title>Вход</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Логин</Form.Label>
            <Form.Control
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Войти как пользователь
            </Button>
            <Button
              variant="primary"
              onClick={(e) => {
                handleSubmit(e, "org2");
              }}
            >
              Войти как магазин
            </Button>
            <Link to="/registration">Регистрация</Link>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AuthPage;
