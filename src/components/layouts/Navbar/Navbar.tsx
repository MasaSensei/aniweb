"use client";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSearch } from "@/lib/context/SearchContext";

const NavScrollExample = () => {
  const { searchQuery, setSearchQuery } = useSearch();

  const handleSearch = (e: any) => {
    e.preventDefault();
    setSearchQuery(e.target.search.value);
  };
  return (
    <Navbar expand="lg" bg="dark" sticky="top" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-between">
          <Nav
            className=" my-2 my-lg-0"
            style={{ maxHeight: "150px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Movies</Nav.Link>
            <Nav.Link href="#action2">Animes</Nav.Link>
            <Nav.Link href="#action2">Genres</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              name="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavScrollExample;
