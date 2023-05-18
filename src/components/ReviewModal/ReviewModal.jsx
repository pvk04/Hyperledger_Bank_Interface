import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AppContext } from "../../context/context";

function ReviewModal() {
  const { shopId } = useParams();
  const [{ login }, dispatch] = useContext(AppContext);
  const [rate, setRate] = useState(1);
  const [review, setReview] = useState("");

  async function handleSubmit() {}
  async function handleHide() {}

  return (
    <Modal>
      <Modal.Header closeButton>
        Создать обзор на магазин №{shopId}
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Оценка</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group>
            <Form.Label>Текст обзора</Form.Label>
            <Form.Control type="range" min="1" max="10" step="1" />
          </Form.Group>
          <Modal.Footer>
            <Button type="submit">Создать</Button>
            <Button>Отмена</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ReviewModal;
