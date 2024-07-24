import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./../css/crud.css";

const Create = () => {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [titulacao, setTitulacao] = useState("");

  const submitForm = (event) => {
    console.log("Nome: ", nome, "Curso: ", curso, "Titulacao: ", titulacao);
  };

  return (
    <div>
      <h1>Criar professor</h1>
      <form onSubmit={submitForm}>
        <div className="mb-3">
          <label className="form-label" htmlFor="inputNome">
            Nome:
          </label>
          <input
            onChange={(event) => setNome(event.target.value)}
            className="form-control"
            type="text"
            name="nome"
            placeholder="nome do professor"
            id="inputNome"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="inputCurso">
            Curso:
          </label>
          <input
            onChange={(event) => setCurso(event.target.value)}
            className="form-control"
            type="text"
            name="curso"
            placeholder="curso"
            id="inputCurso"
          />
        </div>
        <label className="form-label" htmlFor="selectTitulacao">
          Titulacao:
        </label>
        <div>
          <select
            className="form-select"
            id="selectTitulacao"
            onChange={(event) => {
              setTitulacao(event.target.value);
            }}
          >
            <option value="GRADUADO">Graduado</option>
            <option value="MESTRADO">Mestrado</option>
            <option value="DOUTORADO">Doutorado</option>
          </select>
        </div>
        <div className="buttonSubmit">
          <button className="btn btn-primary" type="submit">
            Criar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
