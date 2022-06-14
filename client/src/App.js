import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Login from './pages/Welcome-Login/Login';
import Register from './pages/Welcome-Login/Register';
import HomeContainer from './pages/Home/HomeContainer';
import NavBar from './pages/NavBar/Navbar';
import { GlobalStyle } from './Styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<HomeContainer />} />
      </Routes>
    </>
  );
}

export default App;
