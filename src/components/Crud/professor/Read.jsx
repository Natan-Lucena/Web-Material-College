import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./../css/crud.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Read = () => {
  const [professores, setProfessores] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/professores").then((response) => {
      setProfessores(response.data);
    });
  }, []);
  const listProfessores = professores.map((professor) => (
    <tr>
      <td>{professor.id}</td>
      <td>{professor.nome}</td>
      <td>{professor.idade}</td>
      <td>{professor.curso}</td>
      <td>{professor.titulacao}</td>
      <div>
        <button className="btn btn-secondary">Editar</button>
        <button className="btn btn-danger">Excluir</button>
      </div>
    </tr>
  ));
  return (
    <>
      <h1>Lista de professores</h1>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Idade</th>
              <th scope="col">Curso</th>
              <th scope="col">Titulação</th>
            </tr>
          </thead>
          <tbody>{listProfessores}</tbody>
        </table>
      </div>
    </>
  );
};

export default Read;
