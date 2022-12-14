import { useState, useEffect, createContext } from "react";
import {useNavigate} from 'react-router';
import { Routes, Route, } from 'react-router-dom';
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
import ClientDetail from "./components/ClientDetail";
import CreateClientForm from "./components/CreateClientForm";
import CaseManagerCard from "./components/CaseManagerCard";
// import ThemeProvider from './theme';
// import Navigation from "./components/Navigation";
// import TestForm from './TestForm';
export const AppContext = createContext(null)

function App() {
  const [latestUpload, setLatestUpload] = useState(AppContext)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [clients, setClients] = useState([])
  const [errors, setErrors] = useState(false)
  const [currentCaseManager, setCurrentCaseManager] = useState("");
  
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/authorized_case_manager')
    .then((res)=> {
      if (res.ok) {
        res.json()
        .then((caseManager)=>{
          console.log(caseManager)
          setCurrentCaseManager(caseManager);
          fetchClients()
        })
      }
    })
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

  const deleteClient = (id) => setClients(current => current.filter(c => c.id !== id))

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
    {/* <ThemeProvider> */}
    <AppContext.Provider value={{latestUpload, setLatestUpload}}>

    <NavBar updateCaseManager={updateCaseManager}/>
    {/* { !currentCaseManager? <Login error={'please login'} setCurrentCaseManager={setCurrentCaseManager}/> :  */}
    <Routes>
      {/* <Route>(false ? <Home/> : <LoggedOut/></Route> */}
      
      <Route path="login" element={<Login setCurrentCaseManager={setCurrentCaseManager}/>}/>
      <Route path="signup" element={<SignUp setCurrentCaseManager={setCurrentCaseManager}/>}/>

      <Route path='/clients/new' element={<CreateClientForm addClient={addClient}/>}/>
      <Route path='/clients/:id/edit' element={<ClientForm updateClient={updateClient}/>}/>
      <Route path='/clients/:id' element={<ClientDetail deleteClient={deleteClient}/>}/>

      <Route path='/case_managers/:id' element={<Dashboard setCurrentCaseManager={setCurrentCaseManager}/>}/>

      <Route exact path='/' element={<Home clients={clients} setCurrentCaseManager={setCurrentCaseManager}/>}/>
      {/* <Route path='/'>    
          {isAuthenticated ? <Dashboard logout={logout} /> : <Home setIsAuthenticated={setIsAuthenticated}/>}
      </Route> */}
      
      <Route path="dashboard" element={<Dashboard setCurrentCaseManager={setCurrentCaseManager} currentCaseManager={currentCaseManager}/>}/>
      <Route path="clientform" element={<ClientForm updateCaseManager={updateCaseManager}/>}/>
      <Route path="logout" element={<LoggedOut/>}/>
      <Route path="clients" element={<Clients updateCaseManager={updateCaseManager}/>}/>
      {/* <Route path="case_manager" element={<CaseManagerCard setCurrentCaseManager={setCurrentCaseManager}/>}></Route> */}
      {/* <Route path="update" element={<ClientForm/>}/> */}
      <Route path="appointments" element={<Appointments/>}/>
    </Routes>
    </AppContext.Provider>
    {/* </ThemeProvider> */}
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