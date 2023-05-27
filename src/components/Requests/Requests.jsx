import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getShops } from "../../services/shopService";
import Loader from "../Loader/Loader";
import { AppContext } from "../../context/context";
import {
  setRequest,
  getRequests,
  answerRequest,
} from "../../services/requestService";

function Requests() {
  const [{ login, role }] = useContext(AppContext);
  const [shops, setShops] = useState();
  const [selectedShop, setSelectedShop] = useState();
  const [requests, setRequests] = useState();

  useEffect(() => {
    async function getData() {
      console.log(role);
      const data = await getShops();
      setShops(data);
      setSelectedShop(0);

      const requestsData = await getRequests();
      setRequests(requestsData);
      console.log(requestsData);
    }
    getData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const newRole = role == 0 ? 1 : 0;
      console.log({ login, newRole, selectedShop });
      const result = await setRequest(login, newRole, selectedShop);
      setRequests(result);
      console.log("Requests: ", result);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleAnswer(e, id) {
    const answer = e.target.value;
    try {
      const requestsData = await answerRequest(login, id, answer);
      setRequests(requestsData);
    } catch (e) {
      console.log(e);
    }
  }

  if (!shops || !requests) {
    return <Loader />;
  } else {
    return (
      <>
        <Card style={{ display: role != 2 ? "block" : "none" }}>
          <Card.Body>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Text>Создать запрос на изменение роли</Form.Text>
              <Form.Group>
                <Form.Text style={{ display: role == 0 ? "none" : "flex" }}>
                  Стать пользователем
                </Form.Text>
                <Form.Text style={{ display: role == 0 ? "flex" : "none" }}>
                  Стать продавцом
                </Form.Text>
              </Form.Group>
              <Form.Group style={{ display: role == 0 ? "block" : "none" }}>
                <Form.Text>Магазин</Form.Text>
                <Form.Select
                  value={selectedShop}
                  onChange={(e) => {
                    setSelectedShop(e.target.value);
                  }}
                >
                  {shops?.map(({ city }, index) => (
                    <option value={index}>
                      Магазин №{index + 1} ({city})
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Card.Footer>
                <Button type="submit">Отправить</Button>
              </Card.Footer>
            </Form>
          </Card.Body>
        </Card>
        <div style={{ display: role == 2 ? "block" : "none" }}>
          <Card.Text>Запросы: </Card.Text>
          {requests.map(({ user, role, shop, status }, id) => {
            if (status == 0) {
              return (
                <Card>
                  <Card.Header>{user}</Card.Header>
                  <Card.Body>
                    <Card.Text>Желаемая роль: {role}</Card.Text>
                    <Card.Text
                      style={{ display: role == 1 ? "block" : "none" }}
                    >
                      В магазине №{parseInt(shop) + 1}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      variant="success"
                      value={true}
                      onClick={(e) => {
                        handleAnswer(e, id);
                      }}
                    >
                      Принять
                    </Button>
                    <Button
                      variant="danger"
                      value={false}
                      onClick={(e) => {
                        handleAnswer(e, id);
                      }}
                    >
                      Отклонить
                    </Button>
                  </Card.Footer>
                </Card>
              );
            }
          })}
        </div>
      </>
    );
  }
}

export default Requests;
