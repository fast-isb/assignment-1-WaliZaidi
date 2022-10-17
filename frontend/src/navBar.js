import React from "react";

const navBar = () => {
    return(
        <AppBar color="primary" style={{padding: '2px'}}>
            <Toolbar>
                <IconButton color='white'>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{fontFamily: '', color: 'white', fontSize: 20}}>
                    BLOOD BANK MANAGEMENT SYSTEM
                </Typography>
                <Toolbar style={{marginLeft: 1000}}>
                  <Button id="HomeButton" variant="outlined" size="large" style={{alignItems: 'right', color:'white'}} href="/"> Home </Button>
                  <Button id="signUpButton" variant="outlined" size="large" style={{alignItems: 'right', color:'white', marginLeft: 20}} href="/signup"> Sign Up </Button>
                  <Button id="signInButton" variant="outlined" size="large" style={{alignItems: 'right', color:'white', marginLeft: 20}} href="/signin"> Sign In </Button>
                </Toolbar>
            </Toolbar>
          </AppBar>
    );
}

export default navBar;