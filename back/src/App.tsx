import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from "./hooks/useDetalhesData";

export default function App(){
  const [user, setUser] = useState();
  
  useEffect(() => {
    api
      .get("/presente")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("Ops, ocorreu um erro!" + err);
      });
  }, []);

  return(
    <div className='App'>
      <p>Nome: {user?.['nome']}</p>
      <p>Loja: {user?.['loja']}</p>
    </div>
  )
}












/*
import { Detalhes } from './components/detalhes/detalhes';
import { DetalhesData } from './interface/DetalhesData';
import { useDetalhesData } from './hooks/useDetalhesData';

function App() {
  const { data } = useDetalhesData();

  return (
    <>
      <div className="container">
        <h1>Presente</h1>
        <div className="detalhes-grid">
          {data?.map(detalhesData => <Detalhes nome={detalhesData.nome} preco={detalhesData.preco} loja={detalhesData.loja} />)}
        </div>
      </div>
    </>
  )
}

export default App
*/