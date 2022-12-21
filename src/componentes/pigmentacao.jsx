import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Pig() {
  const [posts, setPost] = useState([]);
  const apiAndpopint = "http://localhost:3002/pigmentacoes/";
  useEffect(() => {
    const getPost = async () => {
      const { data: res } = await axios.get(apiAndpopint);
      setPost(res);
    };
    getPost();
  }, []);
  //---------------update--------
  const handUpdate = async (post) => {};

  return (
    <>
      <h1>{posts.length}</h1>
      <label>{posts.map}</label>

      <CardGroup className={styles.teste}>
        {posts.map((post) => (
          <Card>
            <Card.Img variant="top" src={post.img} />
            <Card.Body>
              <Card.Title>{post.cor}</Card.Title>
              <Card.Title>{post.tempo}</Card.Title>
            </Card.Body>

            <Button variant="primary">
              <Link to="/agendar">Agendar</Link>
            </Button>
          </Card>
        ))}
      </CardGroup>
    </>
  );
}

export default Pig;
