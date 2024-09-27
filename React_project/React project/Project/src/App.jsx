import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { View } from './components/View';
import { Login } from './components/Login';
import { useState } from 'react';
import { Profile } from './components/Profile';
import { BuyNow } from './components/BuyNow';

function App() {
  const [cart, setCart] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header cart={cart} />
        <div className='container'>
          <Routes>
            <Route path="/Home" element={<Home cart={cart} setCart={setCart} />} />
            <Route path="/View" element={<View cart={cart} setCart={setCart} />} />
            {/* <Route path='/Login' element={<Login 
              username={username} setUsername={setUsername}
              email={email} setEmail={setEmail}
              password={password} setPassword={setPassword} 
              isSignUp={isSignUp} setIsSignUp={setIsSignUp} 
            />} /> */}
            <Route path="/Profile" element={<Profile username={username} email={email} />} />
            <Route path="/buy-now" element={<BuyNow cart={cart} setCart={setCart}/>} />
          </Routes>  
        </div> 
      </BrowserRouter>
    </>
  );
}

export default App;
