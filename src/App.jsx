import './App.css';
import LandingPage from './pages/LandingPage';
import LeadResult from './pages/LeadResult';
import  {Routes,Route} from 'react-router-dom';

function App() {
  

  return (
    <>
    
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/results' element={<LeadResult/>}/>
    </Routes>
    </>
  )
}

export default App
