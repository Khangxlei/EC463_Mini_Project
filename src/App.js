// Import the required components
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import "./style.scss" // Import styling file
import {BrowserRouter,Routes,Route, Navigate,} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  // Get the currentUser from AuthContext
  const {currentUser} = useContext(AuthContext)

  console.log(currentUser) // Log the currentUser
  
  const ProtectedRoute = ({children}) => {
    // If currentUser does not exist, redirect user to login page
    if (!currentUser){
      return <Navigate to="/login"/>
    }

    return children
  }
  return (
    // Set up application routing
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route 
            index 
            element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            }
          /> 
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
