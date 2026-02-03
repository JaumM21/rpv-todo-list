import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);
  //criar um novo estado para verificar se o número de count é par ou ímpar e mostrar na tela
  const [paridade, setParidade] = useState<string>("");

  useEffect(() => {
    const texto = count % 2 === 0 ? "PAR" : "ÍMPAR";
    setParidade(texto);
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>count is {count}</button>
      <p>{paridade}</p>
    </>
  );
}

export default App;
