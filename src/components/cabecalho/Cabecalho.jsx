import { Link } from 'react-router'
import './cabecalho.scss'
import logo from '../../assets/images/logo.png'


export default function Cabecalho(){
    return(
        <div>
            <div className="cabecalho">

            <div className="logo">
                <img src={logo} alt="" />
                <h1>Calculadora Auto</h1>
            </div>

                <div className="links">
                    <Link to={'/'}>Calc</Link>
                    <Link to={'/Sobre'}>Sobre</Link>
                </div>

            </div>
        </div>
    )
}


