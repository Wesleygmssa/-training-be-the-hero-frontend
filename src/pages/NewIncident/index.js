import React from 'react';
import './styles.css';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg  from '../../assets/logo.svg';

const NewIncident = () =>{
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>


                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                      Voltar para home
                 </Link>
                </section>

                <form action="">
                    <input type="text" placeholder="Título do caso"/>
                    <textarea type="email" placeholder="descrição"></textarea>

                    <input type="text" placeholder="valor em reais" style={{width: 200}}/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default NewIncident