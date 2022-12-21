import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import styles from "./card.css";
import { useState, useEffect } from "react";
import axios from "axios";

function MudaPreco() {
  const [posts, setPosts] = useState([]);
  const [nome1, setNome] = useState("");
  const [preco1, setPreco] = useState("");
  const [imagem1, setImagem] = useState("");

  const apiAndpopint = "http://localhost:3002/cortes";
  useEffect(() => {
    const getPost = async () => {
      const { data: res } = await axios.get(apiAndpopint);
      setPosts(res);
    };
    getPost();
  }, []);

  //---------------------post-------------

  const handPost = async () => {
    const post = { nome: nome1, preco: preco1, imagem: imagem1 }
    await axios.post(apiAndpopint, post)
    setPosts([post, ...posts])
  };
  //---------------update--------
  // const handUpdate = async (post) => {

  // }

  const andNome = (e) => {
    setNome(e.target.value);
  };
  const andPreco = (e) => {
    setPreco(e.target.value);
  };
  const andImagem = (e) => {
    setImagem(e.target.value);
  };

  return (
    <>
      <div className="container">
        <h3>{posts.length}</h3>
        <label>Nome</label>
        <input onChange={(e) => andNome(e)} />
        <label>Preço</label>
        <input onChange={(e) => andPreco(e)} />
        <label>Imagem</label>
        <input onChange={(e) => andImagem(e)} />
        {"  "}
        <button onClick={handPost} className="btn btn-info btn-sm">  Postar </button>
      </div>
    </>
  );
}

export default MudaPreco;
