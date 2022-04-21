import './App.css';
import Tables from './Componets/Tables';
import { Route, Routes } from "react-router-dom";
import Airline from './Componets/Airline';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Tables/>}></Route>
          <Route path="/Airline" element={<Airline/>}/> 
      </Routes>
      
    </div>
  );
}

export default App;
