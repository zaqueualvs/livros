import logo from '../../assets/2702154 1logo.png';
import buscar from '../../assets/search.png';
import Inicio from "../../components/inicio/inicio.jsx";
import QueroDoar from "../../components/quero-doar/quero-doar.jsx";
import Doados from "../../components/doados/doados.jsx";
import './header.scss'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

export default function Header() {
    return (
        <BrowserRouter>
            <header>
                <section className={`logo`}>
                    <img src={logo} alt="logo"/>
                    <h1>Livros Vai na Web</h1>
                </section>
                <nav className={`menu`}>
                    <ul>
                        <li><Link to={"/"}>Inicio</Link></li>
                        <li><Link to={"/doados"}>Livros Doados</Link></li>
                        <li><Link to={"/queroDoar"}>Quero Doar</Link></li>
                    </ul>
                </nav>
                <section className={`input`}>
                    <input placeholder={'O que você procura?'}/>
                    <img src={buscar} alt="lupa de pesquisa"/>
                </section>
            </header>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/doados' element={<Doados/>}/>
                <Route path='/queroDoar' element={<QueroDoar/>}/>
            </Routes>
        </BrowserRouter>
    );

}