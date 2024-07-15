
import { useState } from 'react';
import './App.css';
import Contatos from './Components/Contatos';
import Form from './Components/Form';
import Search from './Components/Search';

function App() {

  const [contatos, setContatos] = useState([
    {
        id: 1,
        photo: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
        name: "Maria da Silva",
        email: "maria@test.com",
        telefone: "(21)94780-8878",
        category: "Familia"
    },
    {
        id: 2,
        photo: "https://cdn-icons-png.freepik.com/512/219/219986.png",
        name: "Joao Paulo da Silva",
        email: "joaopaulo@test.com",
        telefone: "(21)90080-8178",
        category: "Amigo"
    },
    {
        id: 3,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvJ14anYdkKq4d0LRhRh0a_u_Kh6DUQGHsQ&s",
        name: "Joana Nunes Alves",
        email: "jonunes@test.com",
        telefone: "(21)95550-8878",
        category: "Amigo",
    },
    {
        id: 4,
        photo: "https://cdn-icons-png.freepik.com/512/219/219986.png",
        name: "Paulo Santos Coimbra",
        email: "coims@test.com",
        telefone: "(21)953870-8878",
        category: "Familia",
    },
    {
        id: 5,
        photo: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
        name: "Bianca Gomes dos Santos",
        email: "bibi@test.com",
        telefone: "(21)987880-8878",
        category: "Trabalho",
    },
]);

  const [search, setSearch] = useState("");

  const addContato = ( photo, name, email, telefone, category) => {

    const newContatos = [...contatos, {
      id: Math.floor(Math.random() * 10000),
      photo,
      name,
      email,
      telefone,
      category,
    },
  ];

  setContatos(newContatos);

  };

  const removeContatos = (id) => {
    const newContatos = [...contatos]
    const filteredContatos = newContatos.filter(contato => contato.id !== id ? contato : null)
    setContatos(filteredContatos)
  }


  return (
    <>
    <div className='app'>
        <div className='nav'>
          <p> Agenda - Contatos </p>
          <div className='pesquisa'>
            <Search search={search} setSearch={setSearch} />
          </div>
        </div>
        <div className='formulario'>
          <Form addContato={addContato} />
        </div>
        <div className='cont-list'>
          <h2>Contatos </h2>
          {contatos
            .filter((contato) =>
             contato.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((contato) => (
              <Contatos
                key={contato.id}
                contato={contato}
                removeContatos={removeContatos}/>
            ))}
        </div>
    </div>
    </>
  );
}

export default App;
