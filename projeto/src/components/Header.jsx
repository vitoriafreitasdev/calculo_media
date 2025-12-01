import { Link } from "react-router-dom"
import icone from "../img/icone1.png"
import "./Header.css"
const Header = () => {
  return (
    <header>
        <div className="header-title-icon">
          <img className="icone-header" src={icone} alt="imagem" />
          <h3>Cálculo de Média</h3>
        </div>
        <div className='links-header'>
            <Link className='links' to={"/"}>Home</Link>
        </div>
    </header>
  )
}

export default Header