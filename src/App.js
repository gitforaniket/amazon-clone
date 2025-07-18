import { useState, useEffect } from 'react'
import './styles/App.css';
import Header from './components/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import styled from 'styled-components'
import { db, auth } from './firebase/firebase'
import Login from './pages/Login'

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }))

      setCartItems(tempItems);
    })
  }

  const signOut = () => {
      auth.signOut().then(()=>{
          localStorage.removeItem('user')
          setUser(null)
      })
  }

  useEffect(() => {
    getCartItems();
  }, [])


  return (
    <Router>
      {
        !user ? (
          <Login setUser={setUser} />
        ) : (
          <Container>
            <Header 
              signOut={signOut}
              user={user} 
              cartItems={cartItems} />

            <Routes>
              <Route path="/cart" element={<Cart cartItems={cartItems} />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Container>
        )
      }
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #EAEDED;
`