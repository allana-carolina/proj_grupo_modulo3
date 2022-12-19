import { useState } from "react";
import "./index.css";

/*6 - controlled inputs */
const MyForm = ({ user }) => {
  {
    /* 3 - gerencimento de valores */
  }
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState("");

  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  console.log(name);

  console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando form");
    console.log(name, email, bio, role);
    {
      /* 7 - limpar form */
    }
    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div>
      {/* 5 - envio de form */}
      <form onSubmit={handleSubmit}>
        {/* 1 - criacao form */}
        <div>
          <label htmlFor="name"><h4>NOME</h4></label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2 - label envovendo o input */}
        <label>
        <h4>E-MAIL</h4>
          {/* 4 - simplificando alteracao de state */}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* 8 - textarea */}
        <label>
        <h4>DESCRIÇÃO</h4>
          <textarea
            name="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Detalhe do corte"
          ></textarea>
        </label>
        {/* 9 - select */}
        <label>
        <h4>Cortes</h4>
          <select name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="user">Tipo do Corte</option>
            <option value="americano">Americano</option>
            <option value="jaca">Jaca</option>
            v<option value="asa delta">Asa Delta</option>
            <option value="militar">Militar</option>
            <option value="moicano">Moicano</option>
            
          </select>
        </label>
        <input type="submit" value="Vaga" />
      </form>
    </div>
  );
};

export default MyForm;