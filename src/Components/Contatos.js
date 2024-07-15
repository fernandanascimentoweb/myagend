import React from "react";
import './Contato.css';


const Contatos = ( { contato, removeContatos }) => {
    return (
        <>
       <section className="card">
            <div className="card-bloco">
                    <img src={contato.photo} alt="" />       
                <div className="card-texto">
                    <h3>{contato.name}</h3>
                    <p>{contato.email}</p>
                    <p>{contato.telefone}</p>
                    <p className="category">{contato.category}</p>
                    <button className='remove' onClick={() => removeContatos(contato.id)}>
                     Excluir<i class="fa-solid fa-trash-can"></i> 
                    </button>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contatos;