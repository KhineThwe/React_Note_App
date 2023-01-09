import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header/>
        <Routes>
        <Route path='/' element={<NotesListPage/>}/>
        <Route path='/note/:id' element={<NotePage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
