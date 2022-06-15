import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import HomeContainer from './pages/Home/HomeContainer';
import NavBar from './pages/NavBar/Navbar';
import { GlobalStyle } from './Styles/GlobalStyle';
import WelcomeLogin from './pages/Welcome-Login/WelcomeLogin';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`/api/users/me`)
  .then( res => res.json())
  .then( data => setUser(data))
  },[])

  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<WelcomeLogin />} />
        <Route path='/home' element={<HomeContainer />} />
      </Routes>
    </>
  );
}

export default App;
