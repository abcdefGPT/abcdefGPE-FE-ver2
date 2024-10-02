import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <div className='App flex h-screen flex-col justify-center'>
        <Router>
          <Routes>
            <Route path='/' element={<MainPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
