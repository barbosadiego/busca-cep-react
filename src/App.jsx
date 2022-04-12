import React from 'react';
import { FiSearch } from 'react-icons/fi';
import './App.css';
import api from './Services/api';

const App = (props) => {
  const [input, setInput] = React.useState('');
  const [cep, setCep] = React.useState({});

  async function handleSearch() {
    if (input === '') {
      alert('Insira um CEP válido');
    }
    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput('');
    } catch (erro) {
      alert('Ops, deu erro');
      setInput('');
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu CEP"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff" />
        </button>
      </div>
      {Object.keys(cep).length > 0 && (
        <main className="main">
        <h2>CEP: {cep.cep}</h2>
        <span>{cep.logradouro}</span>
        <span>Complemento: {cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade} - {cep.uf}</span>
      </main>
      )}
    </div>
  );
};

export default App;
