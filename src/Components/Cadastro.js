import { useState, useEffect } from "react";

function Cadastro() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState(["estudar", "comer"]);
  const [nome, setNome] = useState("");

  const [cor, setCor] = useState("");
  const tarefasStorage = localStorage.getItem("@tarefa");

  const changeName = () => {
    const name = prompt("Qual o seu nome? ");
    setNome(name);
  };
  useEffect(() => {
    changeName();
  }, []);
  localStorage.setItem("@nome", JSON.stringify(nome));

  useEffect(() => {
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@tarefa", JSON.stringify(tarefas));
  }, [tarefas]);

  function handleRegistro(e) {
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput("");
  }
  const selectColor = (e)=>{
    setCor(e.target.value);
  }
  return (
    <div style={{backgroundColor:cor,minWidth:"100vw", minHeight:"100vh"}}>
      <h1 key={nome}>{nome}, Sua lista de tarefas </h1>
      <form onSubmit={handleRegistro}>
        <label>Nome da tarefa: </label>
        <br />
        <input
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />

        <button type="submit">Adicionar tarefa</button>
      </form>
      <br></br>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>


      <form onChange={selectColor}>

      
      <input type="radio" name="cor" value="blueviolet"/>
      <label htmlFor="">blueviolet</label>

      <input type="radio" name="cor" value="cadetblue"/>
      <label htmlFor="">cadetblue</label>

      <input type="radio" name="cor" value="cornsilk"/>
      <label htmlFor="">cornsilk</label>

      </form>
    </div>
  );
}
export default Cadastro;
