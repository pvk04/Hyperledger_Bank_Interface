import React from "react";
import Profile from "../../components/Profile/Profile";
import Card from "react-bootstrap/Card";
import NavBar from "../../components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Shops from "../../components/Shops/Shops";
import Requests from "../../components/Requests/Requests";

function MainPage() {
  return (
    <>
      <Profile />
      <Card>
        <Card.Header style={{ padding: "0" }}>
          <NavBar />
        </Card.Header>
        <Card.Body>
          <Routes>
            <Route path="/shops" element={<Shops />} />
            <Route path="/createRequest" element={<Requests />} />
          </Routes>
        </Card.Body>
      </Card>
    </>
  );
}

export default MainPage;
