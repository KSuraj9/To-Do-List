import { useState } from 'react';
import './App.css';
import Todoitems from './components/todoitems'
 
function App() {
  const [inputText, setInputText]= useState("");
  const [item, setItem]= useState([]);

  function handleChange(event){
    const newvalue=event.target.value;
    setInputText(newvalue);
  }

  function addItem(){
    setItem(prevItems =>{
      return [...prevItems, inputText];
    })
    setInputText("");
  }
  
  function deleteItem(id){
    setItem(prevItems =>{
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
        <div className='container'>
          <div className='heading'>
            <h1>To-Do List</h1>
          </div>
          <div className='form'>
            <input onChange={handleChange}type='text' value={inputText}/>
            <button onClick={addItem}>
              <span>+</span>
            </button>
          </div>
          <div>
            <ul>
               {item.map( (todoItem,index)=>(
               <Todoitems
               key={index}
               id={index}
               text={todoItem}
               onChecked={deleteItem}
               //this functio is packed and send to todoitems file
               />
               ))
               }
            </ul>
          </div>
        </div>
    </div>
  );
}

export default App;
