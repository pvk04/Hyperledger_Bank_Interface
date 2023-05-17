import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { registration } from "../../services/authService";
import { AppContext } from "../../context/context";
import { useNavigate } from "react-router";

function RegistrationPage() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(AppContext);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const user = await registration(name, address, password);
      user.login = address;
      await dispatch({ type: "SET_USER", payload: await user });
      navigate("/");
    } catch (e) {
      alert("Error");
      console.log(e);
    }
  }

  function handleHide() {
    navigate("/");
  }

  return (
    <Modal show={true} centered onHide={handleHide}>
      <Modal.Header closeButton>
        <Modal.Title>Регистрация</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Имя</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Логин</Form.Label>
            <Form.Control
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
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
              Зарегистрироваться
            </Button>
            <Link to="/login">Вход</Link>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default RegistrationPage;
