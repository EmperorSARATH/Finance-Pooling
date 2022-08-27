
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import UserDashboard from './Components/UserDashboard';
//import UserDashboard from './Components/UserDashboard';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path='/register' element={ <Register/>}/>
       <Route exact path='/login' element={ <Login/>}/>
    
       <Route exact path='/userdashboard' element={ <UserDashboard />}/>

      </Routes>
      </Router>
      


        
    </div>
  );
}

export default App;
