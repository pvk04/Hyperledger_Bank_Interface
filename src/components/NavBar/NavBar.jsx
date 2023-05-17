import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { AppContext } from "../../context/context";
import { Link } from "react-router-dom";

const links = [
  { name: "Магазины", href: "/shops", access: "012null" },
  { name: "Запросы", href: "/createRequest", access: "01" },
//   { name: "", href: "/requests", access: "2" },
//   { name: "", href: "", access: "" },
];

function NavBar() {
  const [{ activeRole }] = useContext(AppContext);
  return (
    <Navbar
      collapseOnSelect
      style={{ paddingLeft: "16px", paddingRight: "16px" }}
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Nav>
        {links.map((elem, index) => {
          if (elem.access.includes(activeRole)) {
            return (
              <Nav.Link key={index} as={Link} to={elem.href}>
                {elem.name}
              </Nav.Link>
            );
          }
        })}
      </Nav>
    </Navbar>
  );
}

export default NavBar;
