import { useState } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import ContactPage from "./components/contactApp/ContactPage";
import InventoryPage from "./components/inventoryApp/InventoryPage";
import {InventoryProvider} from "./context/InventoryProvider";
import UserContext from './context/UserContext';
import ContactProvider from "./context/ContactProvider";
import ProductForm from "./components/inventoryApp/ProductForm";
import NavigationBar from "./components/NavigationBar";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [user, setUser] = useState({name: '', isLoggedIn: false})
  const contacts = [
    {name: "Timmy", lastOnline: 5, email: "Jimmy@test.com", phone: "1234567890"},
    {name: "Bobby", lastOnline: 2, email: "Bobby@test.com", phone: "5555555555"},
    {name: "Johnny", lastOnline: 13, email: "Johnny@test.com", phone: "1010101010"}
  ]

  return (
    <Container className='app-container'>
      <UserContext.Provider value={{user, setUser}}>
        <ContactProvider.Provider value={{contacts}}>
          <InventoryProvider>
            <Router>
              <NavigationBar />
              <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/home' element={<HomePage />}/>
                <Route path='/contacts' element={<ContactPage />}/>
                <Route path='/inventory' element={<InventoryPage />}/>
                <Route path='/add-product' element={<ProductForm />}/>
              </Routes>
            </Router>
          </InventoryProvider>
        </ContactProvider.Provider>
      </UserContext.Provider>
    </Container>
    
  )
}

export default App
