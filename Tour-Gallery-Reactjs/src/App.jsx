import './App.css'
import Card from './component/Card'
import array from './component/data';
import { useState } from "react";

function App() {

  let [data, setData] = useState(array);

  function removeCard(id){
    data = data.filter((object) => {
      console.log(id);
      return object.id != id;
    })
    setData(data);
  }

  function Refresh() {
    setData(array);
  }

  if(data.length === 0){
    return(
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={Refresh}>
          Refresh
        </button>
      </div>
    );
  }

  const cardComponents = [];

  for (let item of data) {
    cardComponents.push(<Card key={item.id} {...item} removeCard = {removeCard}/>); 
  }


  return (
    <div className="wrapper">
        <h1 className='title'>Plan Your Trip </h1>
      <div className='container' >  
        {cardComponents}
      </div>
    </div>
  )
}

export default App
