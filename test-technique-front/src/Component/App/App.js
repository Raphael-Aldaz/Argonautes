
import Header from '../Header/Header';
import Input from '../Input/Input';
import List from '../List/List';
import axios from 'axios';
import './App.scss';
import { useEffect, useState } from 'react';

function App() {
  const[list, setList] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:8080/index.php')
    .then((result) => setList(result.data) )
    .catch((error)=>{console.log(error,'error axios')})
  }, [])
  return (
    <div className="App">
      <Header />
      <Input />
      <List list= {list} />
    </div>
  );
}

export default App;
