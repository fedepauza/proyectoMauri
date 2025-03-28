
// import NavBar from './components/navBar/navBar'
import Login from './components/login/Login'
import Home from './components/itemList/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import appFireBase from './credencialesFirebase/credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'
import NavBar from './components/navBar/navBar'
import Registro from './components/registro/Registro'

const auth = getAuth(appFireBase)

      function App() {

        const [user, setUser] = useState(null)

        onAuthStateChanged(auth, (userFireBase) =>  {
          if (userFireBase){
            setUser(userFireBase)
          }
          else {
            setUser(null)
          }
                  })

        return (

            <BrowserRouter>
            
                <NavBar/>
                { user ? <Home correoUsuario = {user.email} /> : <Login/>}
                <Routes>
                  <Route path='/registro' element={<Registro/>}/>
                </Routes>

            </BrowserRouter> 

        )
      }

export default App 
