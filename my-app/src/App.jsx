
import React from 'react'
import './App.css'
import Trada from './assets/hero.png'


function Header(props) {
  console.log(props)
  return (
    <header>
      <h1>{props.name}</h1>
      <p> Copyright {props.year}</p>
    </header>
  )
}
const items = [
  "Drole de Dame",
  "Sousou",
  "Toto Et Ninetta"
];
const dishObject =  items.map((dish, i) => ({ 
    id: i, 
    title: dish 
  }));
  console.log(dishObject)

function Main({ dishes }) {
  return (
<>
    <div>
      <h2>Mes Sons prefere par moi</h2>
    </div>
    <main>
    <img src={Trada} height="300" alt= "Une photo de je ne sais quoi" />
    <ul>
      {dishes.map((dish) => (
        <li key={dish.id} style={{ listStyle: 'none' }}>
          {dish.title}
          </li>
      ))}
    </ul>
    </main>
    </>
  )
}
function App() {
  return ( 
    <div className="app-shell">
      <Header name="D'or Et de Platine" year={new Date().getFullYear()} />
      <Main dishes={dishObject} />
    </div>
  )
}

export default App
