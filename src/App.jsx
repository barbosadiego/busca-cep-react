import React from 'react'
import {FiSearch} from 'react-icons/fi'
import './App.css';

const App = (props) => {
  return (
    <div className='container'>
      <h1 className='title'>Buscador CEP</h1>

      <div className='containerInput'>
        <input type='text' placeholder='Digite seu CEP' />
        <button className='buttonSearch'>
          <FiSearch size={25} color='#fff' />
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 89745347</h2>
        <span>Rua Teste</span>
        <span>Complemento: algum complemento</span>
        <span>Vila Rosa</span>
        <span>Caruaru - PE</span>
      </main>
    </div>
  )
}

export default App
