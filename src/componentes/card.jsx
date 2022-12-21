import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import styles from "./card.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

function GroupExample() {
  const [posts, setPost] = useState([]);
  const apiAndpopint = "http://localhost:3002/cortes";
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
      <label>{posts.map}</label>

      <CardGroup className={styles.teste}>
        {posts.map((post) => (
          <Card>
            <Card.Img variant="top" src={post.imagem} />
            <Card.Body>
              <Card.Title>{post.nome}</Card.Title>
              <Card.Title>{post.preco}</Card.Title>
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

export default GroupExample;
