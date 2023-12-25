import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import View from './pages/View';
import Edit from './pages/Edit';
import Add from './pages/Add';

function App() {
  return (
    <div className="">

      <Navbar/>

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/view/:userId' element={<View/>}/>
        <Route path='/edit/:userId' element={<Edit/>}/>
        <Route path='/add' element={<Add/>}/>



      </Routes>
     
    </div>
  );
}

export default App;
