import { useState, useEffect } from "react";
import {useNavigate} from 'react-router';
import { Routes, Route } from 'react-router-dom';
// import {useNavigate} from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import LoggedOut from "./components/LoggedOut";
// import TestForm from './TestForm';


function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [currentUser, setCurrentUser] = useState(null);
  // const navigate = useNavigate()

  // useEffect(() => {
  //   fetch('/'.then((res) => {
  //     if(res.ok) {
  //       res.json().then((user) => {
  //         setCurrentUser(user);
  //         setIsAuthenticated(true);
  //       });
  //     }else {
  //       res.json().then(console.log)
  //     }
  //   }))
  // }, []);

  // const logout = () => {
  //   setCurrentUser(null);
  //   setIsAuthenticated(false)
  //   fetch('/case_managers', {method: "DELETE"})
  //   .then(()=> navigate.push('/login'))
  // }

  return (
    <Routes>
      <Route path="/" element={<Home/>}>
        {/* {isAuthenticated ? <Home logout={logout} /> : <LoggedOut setIsAuthenticated={setIsAuthenticated}/>} */}
      </Route>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<SignUp/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="logout" element={<LoggedOut/>}/>
    </Routes>
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