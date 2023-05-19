import React, { useState, useEffect, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AppContext } from "../../context/context";
import { createReview } from "../../services/shopService";

function ReviewModal({ setShops, shopId, isShown, handleHide }) {
  const [{ login }, dispatch] = useContext(AppContext);
  const [rate, setRate] = useState(1);
  const [review, setReview] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const shopsData = await createReview(login, shopId, rate, review);
      setShops(shopsData);
      console.log("set review shops: " + shopsData);
      setRate(1);
      setReview("");
      handleHide();
    } catch (e) {
      alert("error");
    }
  }

  return (
    <Modal show={isShown} onHide={handleHide}>
      <Modal.Header closeButton>
        Создать обзор на магазин №{shopId + 1}
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Текст обзора:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={review}
              onChange={(e) => {
                setReview(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Оценка: {rate} </Form.Label>
            <Form.Range
              type="range"
              min="1"
              max="10"
              step="1"
              value={rate}
              onChange={(e) => {
                setRate(e.target.value);
              }}
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="success" type="submit">
              Создать
            </Button>
            <Button variant="danger" onClick={handleHide}>
              Отмена
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ReviewModal;
