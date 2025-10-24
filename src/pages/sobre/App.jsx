import './App.scss';
import { useState } from 'react'  
import Cabecalho from '../../components/cabecalho/Cabecalho.jsx';
import logo from '../../assets/images/logo.png';


export default function App() {
  return (
    <div>

      <Cabecalho />

      <main className="conteiner">

        <div className="info">
      
          <h1>Sobre Nós</h1>
          <p>Esta plataforma foi desenvolvida com o propósito de facilitar a sua vida e oferecer uma forma prática e intuitiva de entender melhor os custos reais do seu veículo.
          <br/>Aqui, você pode utilizar nossa calculadora inteligente para estimar seus gastos de forma simples e rápida — basta inserir as informações sobre o seu carro, como consumo, manutenção, impostos e outros detalhes que desejar acompanhar.</p>
          <p>Com base nos dados informados, o sistema ajudará você a visualizar o custo total de uso do seu automóvel, permitindo uma análise mais completa sobre quanto ele realmente representa no seu orçamento.</p>
         <p>Nosso objetivo é proporcionar mais transparência, controle e consciência financeira para que você possa tomar decisões mais informadas sobre o seu veículo.</p>
        </div>

        <div className="dev">
          <img src={logo} height={100} />
          <p>Desenvolvido pelo aluno Livia da Silva Pereira
          <br/>turma Informatica B</p>
        </div>


      </main>
    </div>
  );
}