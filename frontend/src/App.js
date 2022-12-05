import './App.css';
import React from 'react';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"; //everything that we need for routing (have to check if material ui has routing support) 
import SignUp from './SignUpPage';
import SignInPage from './SignInPage';
import DecisionPage from './DecisionPage';
import SubmissionPage from './SubmissionPage';
import UpdatePersonalInfo from './updatePersonalInfo';


function App() {
  return (
    <div data-testid="comp" className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<DecisionPage/>}/> {/*Use the element tag, the component one expired, and we also have to call the thing we passed as a component*/}
          <Route exact path='/signup' element={<SignUp/>}></Route>
          <Route exact path='/signin' element={<SignInPage/>}></Route>
          <Route exact path='/main' element={<SubmissionPage/>}></Route>
          <Route exact path='/userUpdate' element={<UpdatePersonalInfo/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Route exact path='/' component={decisionPage}/> */}
    </div>
  );
}

export default App;

//works as of now