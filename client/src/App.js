import { useState, useEffect } from "react";
import {useNavigate} from 'react-router';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import LoggedOut from "./components/LoggedOut";
import Clients from './components/Clients';
import ClientForm from "./components/ClientForm";
// import TestForm from './TestForm';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentCaseManager, setCurrentCaseManager] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/').then((res) => {
      if (res.ok) {
        res.json().then((case_manager) => {
          setCurrentCaseManager(case_manager)
          setIsAuthenticated(true)
        })
      }else {
        res.json().then(console.log)
      }
    })
  }, [])

  const logout = () => {
    setCurrentCaseManager(null)
    setIsAuthenticated(false)
    fetch('/case_managers', {method: 'DELETE'})
    .then(() => navigate.push('/login'))
  }

  const updateCaseManager =(caseManager) => setCurrentCaseManager(caseManager)

  return (
    <>
    <NavBar currentCaseManager={currentCaseManager}/>
    <Routes>
      {/* <Route>(false ? <Home/> : <LoggedOut/></Route> */}
      <Route path="login" element={<Login updateCaseManager={updateCaseManager}/>}/>
      <Route path="signup" element={<SignUp updateCaseManager={updateCaseManager}/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="logout" element={<LoggedOut/>}/>
      <Route path="clients" element={<Clients/>}/>
      <Route path="update" element={<ClientForm/>}/>
    </Routes>
    </>
  );
}

export default App;

// function App() {

//   return (
//     <div className="App">
//       <div>
//         <h1>This is the homepage</h1>
//       </div>
//       <Login/>
//       <SignUp/>
//       {/* <TestForm /> */}
//       {/* <h1>Page Count: {count}</h1> */}
//     </div>
//   );
// }