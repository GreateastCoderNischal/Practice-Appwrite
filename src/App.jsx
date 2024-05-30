import "./App.css"
import { UserProvider } from './Lib/Context/User.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './Lib/Components/Home.jsx'
import Login from './Lib/Components/Auth/Login.jsx'
import { AuthLayout } from './Lib/Components/Auth/AuthLayout.jsx'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const isLogIn = window.location.pathname == "/login"
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route element={<AuthLayout />}>
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </UserProvider>

    </>
  )
}

export default App
