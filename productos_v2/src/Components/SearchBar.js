import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SearchBar = () => {
  const [productos, setProductos] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput != "") {
      axios
        .get("https://dummyjson.com/products/search", {
          params: {
            q: searchInput,
          },
        })
        .then(function (response) {
          setProductos(response.data.products);
          navigate(`/detalle-producto/${response.data.products[0].id}`);
        });
    } else {
      alert("Type something first");
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <Row style={{alignItems:'center'}}>
          <Col>
            <input
              type="search"
              placeholder="Type your query here..."
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Button type="submit">Search</Button>
          </Col>
        </Row>
      </form>
  );
};

export default SearchBar;
