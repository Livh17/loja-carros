import './App.scss';
import { useState } from 'react'  
import Cabecalho from '../../components/cabecalho/Cabecalho.jsx';
import carro from '../../assets/images/carro.png'

export default function App() {
  const [resultado, setResultado] = useState(0)
  const [valor, setValor] = useState()
  const [parcelas, setParcelas] = useState()
  const [desconto, setDesconto] = useState()

  function calcularParcelas() {

    let total = (Number(valor) - Number(desconto)) / Number(parcelas)

    setResultado(total)
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
        <input type="text" placeholder='0' value={valor} onChange={(e) => setValor(e.target.value)}/>

        <h2>Desconto</h2>
        <input type="text" placeholder='0' value={desconto} onChange={(e) => setDesconto(e.target.value)} />

        <h2>Quantidade de Parcelas</h2>
        <input type="text" placeholder='0' value={parcelas} onChange={(e) => setParcelas(e.target.value)}/>

        <button onClick={calcularParcelas}>CALCULAR</button>

        <p>Parcelas de R$ {resultado.toFixed(2)} </p>

      </div>

      </div>


    </main>


    </div>
  );
}