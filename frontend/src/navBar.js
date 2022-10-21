import React from "react";
import Typography from '@material-ui/core/Typography'; //this is required for the better moving and typography of the page
import AppBar from '@material-ui/core/AppBar'; //this is the app bar, which is the bar at the top of the page
import Toolbar from '@material-ui/core/Toolbar'; //this for the tool bar
import IconButton from '@material-ui/core/IconButton'; //this for a button with an icon on it
import MenuIcon from '@material-ui/icons/Menu'; //and this is the actual icon that we need
import { ThemeProvider, createTheme } from '@material-ui/core/styles'; //import for styles and themes
import Button from '@material-ui/core/Button';

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
    }
  });

const NavBar = () => {
    return (
        <div>
            <AppBar color="primary" style={{padding: '2px'}}>
                <Toolbar>
                    <IconButton color='primary'>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{fontFamily: '', color: 'white', fontSize: 20}}>
                        BLOOD BANK MANAGEMENT SYSTEM
                    </Typography>
                    <Toolbar style={{marginLeft: '45%'}}>
                        <Button id="HomeButton" variant="outlined" size="large" style={{alignItems: 'right', color:'white'}} href="/"> Home </Button>
                        <Button id="signUpButton" variant="outlined" size="large" style={{alignItems: 'right', color:'white', marginLeft: 20}} href="/signup"> Sign Up </Button>
                        <Button id="signInButton" variant="outlined" size="large" style={{alignItems: 'right', color:'white', marginLeft: 20}} href="/signin"> Sign In </Button>
                    </Toolbar>
                </Toolbar>
          </AppBar>
        </div>
    )
}

export default NavBar;