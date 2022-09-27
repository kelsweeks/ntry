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
import Appointments from './components/Appointments';
// import Navigation from "./components/Navigation";
// import TestForm from './TestForm';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [clients, setClients] = useState([])
  const [errors, setErrors] = useState(false)
  const [currentCaseManager, setCurrentCaseManager] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    fetchClients()
    // fetch('/clients').then((res) => {
    //   if (res.ok) {
    //     res.json().then((case_manager) => {
    //       setCurrentCaseManager(case_manager)
    //       setIsAuthenticated(true)
    //     })
    //   }else {
    //     res.json().then(console.log)
    //   }
    // })
  }, [])

  const fetchClients = () => {
    fetch('/clients')
    .then(res => {
      if(res.ok){
        res.json().then(setClients)
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
  }

  const addClient = (client) => setClients(current => [...current,client])

  const updateClient = (updatedClient) => setClients(current => {
    return current.map(client => {
      if(client.id === updatedClient.id){
        return updatedClient
      }else {
        return client
      }
    })
  })

  const deleteClient = (id) => setClients(current => current.filter(p => p.id !== id))

  const logout = () => {
    setCurrentCaseManager(null)
    setIsAuthenticated(false)
    fetch('/case_managers', {method: 'DELETE'})
    .then(() => navigate.push('/login'))
  }

  const updateCaseManager =(caseManager) => setCurrentCaseManager(caseManager)

  if(errors) return <h1>{errors}</h1>

  return (
    <>
    {/* <Navigation/> */}
    <NavBar currentCaseManager={currentCaseManager} updateCaseManager={updateCaseManager}/>
    <Routes>
      {/* <Route>(false ? <Home/> : <LoggedOut/></Route> */}
      <Route path="login" element={<Login updateCaseManager={updateCaseManager}/>}/>
      <Route path="signup" element={<SignUp updateCaseManager={updateCaseManager}/>}/>

      <Route path='/clients/new' element={<ClientForm addClient={addClient}/>}/>
      <Route path='/clients/:id/edit' element={<ClientForm updateClient={updateClient}/>}/>

      <Route path='/case_managers/:id' element={<Dashboard updateCaseManager={updateCaseManager}/>}/>

      <Route exact path='/' element={<Home clients={clients}/>}/>
      
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="clientform" element={<ClientForm updateCaseManager={updateCaseManager}/>}/>
      <Route path="logout" element={<LoggedOut/>}/>
      <Route path="clients" element={<Clients updateCaseManager={updateCaseManager}/>}/>
      <Route path="update" element={<ClientForm/>}/>
      <Route path="appointments" element={<Appointments/>}/>
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