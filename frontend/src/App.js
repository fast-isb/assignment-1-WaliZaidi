import './App.css';
import Button from '@material-ui/core/Button';
import { Box, ButtonGroup} from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles'; //import for styles and themes
import React from 'react';
import Typography from '@material-ui/core/Typography'; //this is required for the better moving and typography of the page
import AppBar from '@material-ui/core/AppBar'; //this is the app bar, which is the bar at the top of the page
import Toolbar from '@material-ui/core/Toolbar'; //this for the tool bar
import IconButton from '@material-ui/core/IconButton'; //this for a button with an icon on it
import MenuIcon from '@material-ui/icons/Menu'; //and this is the actual icon that we need
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom"; //everything that we need for routing (have to check if material ui has routing support) 

const theme = createTheme({ //this is how you create a theme, and then you can use it within the theme provider
  palette: { //is how colors are changed
    primary: { //the changing of the primary color in this 
      main: '#00695c', //and then the values of the color that you want to change, with the weight of the color in the braces
    },
    secondary: {
      main:'#d50000', //secondary
    }
  },
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15, //this is how you change the typography of the page, and then you can call it within the typography component
    }
  }
})

const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
    </div>
  )
}

const SignUp = () => {
  return (
    <div>
      <h1>Sign Up Page</h1>
    </div>
  )
}

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}> {/*this is how you use the theme provider*/}
      <div className="App">
        <header className="App-header">
          <AppBar color="primary" style={{padding: '2px'}}>
            <Toolbar>
              <IconButton color='white'>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" style={{fontFamily: '', color: 'white', fontSize: 20}}>
                BLOOD BANK MANAGEMENT SYSTEM
              </Typography>
            </Toolbar>
          </AppBar>
          {/*this is the main stuff that we need*/}
          <div id='main' className='main'>
            <Box component="container" id='leftBox' sx={{
                width: '50%',
                height: 1200,
                backgroundColor: 'primary',
              }}>
              <Typography variant="h2" style={{fontFamily: 'Rockwell', color: 'white', fontSize: 36, marginTop: 450, marginLeft: 0}}>
                New Here? Sign up today! 
              </Typography>
              <ButtonGroup variant="contained" color="secondary.light" style={{fontSize: 20, marginTop: 120}} >
                <Button size="large" style={{fontSize: 20}}>Sign up</Button>
              </ButtonGroup>
            </Box>
            <Box id='rightBox' sx={{
                width: '50%',
                height: 1200,
                backgroundColor: 'primary',
              }}>
              <Typography variant="h2" style={{fontFamily: 'Rockwell', color: 'white', fontSize: 36, marginTop: 450, marginLeft: 0}}>
                Already a member?  
              </Typography>
              <ButtonGroup variant="contained" color="primary.light" style={{fontSize: 20, marginTop: 120}} >
                <Button size="large" style={{fontSize: 20}}>Login now</Button>
              </ButtonGroup>
            </Box>
          </div>
          {/* <div id='backgroundImage' style={{backgroundImage: 'url("")'}}>

          </div> */}
        </header>
      </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
