import React from "react";
import Typography from '@material-ui/core/Typography'; //this is required for the better moving and typography of the page
import { Box, ButtonGroup} from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles'; //import for styles and themes
import TextField from "@material-ui/core/TextField";
import NavBar from "./navBar";
import Button from "@material-ui/core/Button";
import axios from 'axios';


const theme = createTheme({ //this is how you create a theme, and then you can use it within the theme provider
    palette: { //is how colors are changed
      primary: { //the changing of the primary color in this 
        main: '#37474f', //and then the values of the color that you want to change, with the weight of the color in the braces
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
    },
  });

  const innerTheme = createTheme({
    palette: {
      primary: {
        main: '#FABC2A',
      },
      secondary: {
        main: '#FFA630',
      },
    },
    typography: {
      h2: {
        fontSize: 36,
        marginBottom: 2,
        color: 'white' //this is how you change the typography of the page, and then you can call it within the typography component
      },
      h6: {
        fontSize: 22,
        marginBottom: 2,
        color: 'white' //this is how you change the typography of the page, and then you can call it within the typography component
      }
    },
  });

class SignInPage extends React.Component {
  
  constructor() { 
    super() //this is how you call the constructor
      this.state = {
        username: "walizaidi34@gmail.com",
        password: "uwudaddy",
        TheMessage: "",
      }
      this.sendInfo = this.sendInfo.bind(this);
  };
  
  
  sendInfo(event)
  {

    console.log("Sending info");
    console.log(this.state.username);
    console.log(this.state.password);
    event.preventDefault()
    const appliedUser = {
      username: this.state.username,
      password: this.state.password,
    }
    axios.post('http://localhost:8000/app/request', appliedUser)
    .then(res => console.log(res.data));

    window.location = "/main";

  }

  render() {
    return (
      <ThemeProvider theme={theme}> {/*this is how you use the theme provider*/}
        <div className="App">
          <header className="App-header">
            {/*this is the main stuff that we need*/}
            <NavBar />
            <ThemeProvider theme={innerTheme}>
              <Box component="container" display="flex" flexDirection="column" className="CenterBox" style={{
                  backgroundColor: '#f0544f6a',
                  minHeight: '80vh',
                  width: '50vw',
                  position: 'absolute',
                  right: '25%',
                  top: '140px',
                  alignItems: 'justify',
                  color: 'secondary.main',
              }}>
                
                <div style={{marginTop:60}}>
                  <Typography variant="h2" component="h2" style={{marginBottom: '15px'}}>Welcome Back. Sign in!</Typography>
                </div>
                <div style={{marginTop:100, direction: 'flex', flexDirection: 'column'}}>
                  <Typography variant="h6" component="h6" align="center"  style={{marginBottom: '15px'}}>Email</Typography>
                  <TextField id="outlined-basic" color="secondary" label="Email" variant="outlined" style={{marginBottom: '15px'}} />
                </div>
                <div style={{marginTop:30, direction: 'flex', flexDirection: 'column'}}>
                  <Typography variant="h6" component="h6" align="center"  style={{marginBottom: '15px'}}>Password</Typography>
                  <TextField id="outlined" color="secondary" label="Password" type="password" variant="outlined" style={{marginBottom: '15px'}} />
                </div>
                <div style={{marginTop:30, direction: 'flex', flexDirection: 'column'}}>
                  <ButtonGroup size="large" variant="text" color="secondary" aria-label="contained primary button group" style={{marginBottom: '15px'}}>
                    <Button href="/">Go Back</Button>
                    <Button href="/main" onClick={this.sendInfo}>Sign In</Button>
                  </ButtonGroup>
                </div>
              </Box>
            </ThemeProvider>
          </header>
        </div>
      </ThemeProvider>
    );
  }
}

export default SignInPage;

//works as of now