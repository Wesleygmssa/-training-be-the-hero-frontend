import React from 'react';
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg  from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';

const Logon = () => {
    return (
        <div className="logon-container">
            <section className="form">
            <img src={logoImg} alt=""/>

            <form action="">
                <h1>Faça seu Logon</h1>

                <input type="text" placeholder="Sua ID"/>
                <button type="submit" className="button">Entrar</button>

                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#E02041"/>
                      Não tenho cadastro
                 </Link>
            </form>
            </section>
            <img src={heroesImg} alt=""/>
        </div>
    )
}

export default Logon;