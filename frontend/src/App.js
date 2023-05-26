


import './App.css';

import Student from './Components/Student';
import Adds from './Components/Adds';
import Nav from './Components/Nav';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element = {<Student/>} />
        <Route path='/a' element= {<Adds data={{sname:"",sgrade:""}} method = "post" />}/>
      </Routes>
      
    </div>
  );
}

export default App;
