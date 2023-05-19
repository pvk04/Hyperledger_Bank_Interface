import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Requests() {
  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Text>Создать запрос на изменение роли</Form.Text>
          <Form.Group>
            <Form.Text>Магазин</Form.Text>
            <Form.Select></Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Text>Стать пользователем</Form.Text>
          </Form.Group>
          <Card.Footer>
            <Button>Отправить</Button>
          </Card.Footer>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Requests;
