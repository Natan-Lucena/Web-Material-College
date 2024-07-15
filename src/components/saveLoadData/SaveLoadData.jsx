import { useState } from "react";

export const SaveLoadData = () => {
  const Aluno = {
    nome: "João",
    idade: 25,
    curso: "Engenharia de Software",
  };

  const [alunoStorage, setAlunoStorage] = useState();
  function saveData() {
    localStorage.setItem("Aluno", JSON.stringify(Aluno));
    alert("Salvo com sucesso");
  }
  function loadData() {
    const inMemoryAluno = localStorage.getItem("Aluno");
    setAlunoStorage(JSON.parse(inMemoryAluno));
  }
  return (
    <div>
      <h1>Save Load Data</h1>
      <h2>{JSON.stringify(alunoStorage)}</h2>
      <button onClick={saveData}>Save Data</button>
      <button onClick={loadData}>Load Data</button>
    </div>
  );
};
