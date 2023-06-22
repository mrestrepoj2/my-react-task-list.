import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="todoapp stack-large">
      <Header/>
      <Task tipo="checkbox"/>
      <TaskList name="Trapear"/>
      <Task tipo="checkbox"/>
      <TaskList name="Comer"/>
      <Task tipo="checkbox"/>
      <TaskList name="Amar al gato"/>
    </div>
  );
}


function Header(props){
  return (<div>
    <h1>Todo App</h1>
    <form>
    <input type="text" value="Buscar tarea"/>
    
    <button type="submit" className="btn btn__primary btn__lg">
      +
    </button>
  </form>
  </div>
    );
  }


function Task(props) {
  return (<div>
    <input type={props.tipo}/>
  </div>
  ); 
}

  
  function TaskList(props){
    return ( <div>
  <ul>
    <div>
      <label className="todo-label" htmlFor="todo-0">
        {props.name}
      </label>
      <button type="button" className="btn">
        Editar
      </button>
      <button type="button" className="btn btn__danger">
        Borrar
      </button>
    </div>  
   </ul>
  </div>
    );
  } 
export default App