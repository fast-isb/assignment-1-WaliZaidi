import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"; //everything that we need for routing (have to check if material ui has routing support) 
import SignUp from './SignUpPage';
import LoginPage from './LoginPage';
import DecisionPage from './DecisionPage';


function App() {
  return (
    <div className="App">
      {/* <Route exact path='/' component={decisionPage}/> */}
      <Routes>
        <Route exact path='/' element={<DecisionPage/>}/>
        <Route exact path='/SignUp' element={<SignUp/>}></Route>
        <Route exact path='/LoginPage' element={<LoginPage/>}></Route>
      </Routes>
      {/* <AppBar color="primary" style={{padding: '2px'}}>
            <Toolbar>
              <IconButton color='white'>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" style={{fontFamily: '', color: 'white', fontSize: 20}}>
                BLOOD BANK MANAGEMENT SYSTEM
              </Typography>
            </Toolbar>
          </AppBar> */}
    </div>
  );
}

export default App;
