import './App.css';
import axios from "axios"; // makes grabbing from DB easier
import { useEffect, useState } from 'react'; // to make on page refresh

function App() {

    const[listNodeMod, setNodeMod] = useState([]);

    useEffect(() =>{
      axios.get("http://localhost:3001/NodeMod").then((response) => {
      setNodeMod(response.data)
      })
    }, []);

  return(
    <div className="App">
       {listNodeMod.map((value, key) => {
        return <div className='post'> 

         <div className='id'>{value.id}</div>
         <div className='title'>{value.title}</div>
         <div className='body'>{value.nodeModText}</div>
         <div className='images'>{value.images}</div>
         <div className='graphs'>{value.graphs}</div>
        </div>;
      })}
    </div>
  );

}

export default App;
