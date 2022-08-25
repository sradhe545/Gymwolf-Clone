import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import D from './Components/D';


function App() {
  return (
    <div className="App">
     <Navbar/>
      <AllRoutes/>
     
      
    </div>
  );
}

export default App;
