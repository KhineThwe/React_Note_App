import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import NotesListPage from './pages/NotesListPage';
function App() {
  return (
    <div className='App'>
      <Header/>
      <NotesListPage/>
      <Footer/>
    </div>
  );
}

export default App;
