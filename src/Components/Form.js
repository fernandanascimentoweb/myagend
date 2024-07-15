import React, { useState } from 'react'


const Form = ( { addContato } ) => {

    const [photo, setPhoto] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [category, setCategory] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!photo || !name || !email || !telefone || !category) return;
        addContato(photo, name, email, telefone, category);

        setPhoto("");
        setName("");
        setEmail("");
        setTelefone("");
        setCategory("");
    }

  return (
    <>
    <div className='Form'>
        <h2>Incluir Contato 🖋️ </h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='Coloque a foto'
                value={photo} onChange={(e) => setPhoto(e.target.value)}  />
            <input 
                type="text" 
                placeholder='Digite o nome completo'
                value={name} onChange={(e) => setName(e.target.value)} />
            <input 
                type="email" 
                placeholder='Digite o E-mail' 
                value={email} onChange={(e) => setEmail(e.target.value)}  />
            <input 
                type="text" 
                placeholder='Digite o telefone' 
                value={telefone} onChange={(e) => setTelefone(e.target.value)}  />
            
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione uma categoria</option>
                <option value="Amigo">Amigo</option>
                <option value="Familia">Familia</option>
                <option value="Trabalho">Trabalho</option>
            </select>
            <button type="submit">
                <i class="fa-solid fa-plus"> Cadastrar </i>
            </button>
        </form>
    </div>
    </>
  )
}

export default Form;