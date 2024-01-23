import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Easy from './components/Easy';
import Medium from './components/Medium';
import Hard from './components/Hard';

function App() {
  return (
    <div className="App">
      <h1>Hello Welcome to React Gi Week 3</h1>

      <Router>

        <nav>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/easy'>Easy</Link>
                </li>
                <li>
                  <Link to='/medium'>Medium</Link>
                </li>
                <li>
                  <Link to='/hard'>Hard</Link>
                </li>
              </ul>

            </nav>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/easy' element={<Easy />} />
              <Route path='/medium' element={<Medium />} />
              <Route path='/hard' element={<Hard />} />
            </Routes>


      </Router>
    
      
    </div>
  );
}

export default App;
