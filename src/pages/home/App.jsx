import './App.scss';
import { useState } from 'react'  
import Cabecalho from '../../components/cabecalho/Cabecalho.jsx';
import carro from '../../assets/images/carro.png'

export default function App() {
  const [count, setCount] = useState(0)

  function calcularParcelas() {
    
  }




  return (
    <div>


    <Cabecalho />

    <main>
      <div className="conteiner-principal">

        <div className="imagem">
          <img src={carro}/>
        </div>

      <div className="calculo">
        <h1>Informações</h1>

        <h2>Valor do Carro</h2>
        <input type="text" />

        <h2>Desconto</h2>
        <input type="text" />

        <h2>Quantidade de Parcelas</h2>
        <input type="text" />

        <button>CALCULAR</button>

        <p>Parcelas de </p>

      </div>

      </div>


    </main>


    </div>
  );
}