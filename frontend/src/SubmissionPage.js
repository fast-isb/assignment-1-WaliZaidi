import React from "react";
import Typography from '@material-ui/core/Typography'; //this is required for the better moving and typography of the page
import Button from '@material-ui/core/Button';
import { Box, ButtonGroup, Grid} from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles'; //import for styles and themes
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
  } from "react-router-dom";
import NavBar from "./navBar";

const theme = createTheme({ //this is how you create a theme, and then you can use it within the theme provider
  palette: { //is how colors are changed
    primary: { //the changing of the primary color in this 
      main: '#37474f', //and then the values of the color that you want to change, with the weight of the color in the braces
    },
    secondary: {
      main:'#FFA630', //secondary
    }
  },
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15, //this is how you change the typography of the page, and then you can call it within the typography component
    }
  }
});

const SubmissionPage = () => {
    return(
        <ThemeProvider theme={theme}>
            <div className="App">
                <header className="App-header">
                    <Box component="container" display="flex" flexDirection="column" className="CenterBox" style={{
                    minHeight: '10vh',
                    width: '50vw',
                    position: 'absolute',
                    right: '25%',
                    top: '140px',
                    alignItems: 'center',
                    color: 'primary',
                    }}>
                        <Typography className="welcomeHead" align="center" color="secondary" component="h2" style={{fontFamily: 'Rockwell', fontSize: 46, marginLeft: 0, zIndex: 1}}>
                            Welcome Back! Please choose one option from below
                        </Typography>
                    </Box>
                    <NavBar/>

                    <Grid>
                        <Grid>
                            <Button color="secondary" href="/userUpdate">Update User Information</Button>
                        </Grid>
                    </Grid>
                    <ButtonGroup variant="text" color="primary" aria-label="contained primary button group" style={{marginTop: '15px'}}>
                        <Button color="secondary" href="/">Go Back</Button>
                    </ButtonGroup>
                </header>
            </div>
        </ThemeProvider>
    )
}

export default SubmissionPage;