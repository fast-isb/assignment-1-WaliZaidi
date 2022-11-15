import React from "react";
import { ThemeProvider, createTheme } from '@material-ui/core/styles'; //import for styles and themes
import NavBar from "./navBar";
import { Box, Button, ButtonGroup, TextField, Typography } from "@material-ui/core";

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


function SignUp() {
    return (
        <ThemeProvider theme={theme}> {/*this is how you use the theme provider*/}
            <div data-testid="comp" className="App">
                <header className="App-header">
                    <Box component='grid' noValidate autoComplete="off" sx={{width: 400, flexDirection:'column', textAlign: 'left', justifyContent: 'left' }}>
                      <Typography data-testid="dataShow" variant="h2" component="h2" style={{marginBottom: '15px'}}>Please enter your details below:</Typography>
                      <Box component='grid' padding='150' sx={{width: 400, flexDirection:'column', maxWidth: '100%'}}>
                        <Typography data-testid="firstNameShow" variant="subtitle1" component="h2" style={{marginTop: '3', textAlign: 'left'}}>First Name</Typography>
                        <TextField fullWidth id="textField1" variant="filled" sx={{input: {color: 'white'}}}/>
                        <Typography variant="subtitle1" component="h2" style={{marginTop: '3', textAlign: 'left'}}>Last Name</Typography>
                        <TextField fullWidth id="textField2" variant="filled" />
                        <Typography variant="subtitle1" component="h2" style={{marginTop: '3', textAlign: 'left'}}>UserName</Typography>
                        <TextField fullWidth id="textField4"  variant="filled" />
                        <Typography variant="subtitle1" component="h2" style={{marginTop: '3', textAlign: 'left'}}>Password</Typography>
                        <TextField fullWidth id="textField4" type="password" variant="filled" />
                        <Typography variant="subtitle1" component="h2" style={{marginTop: '3', textAlign: 'left'}}>Email</Typography>
                        <TextField fullWidth id="textField3"  variant="filled" />
                        <Typography variant="subtitle1" component="h2" style={{marginTop: '3', textAlign: 'left'}}>Phone Number</Typography>
                        <TextField fullWidth id="textField4"  variant="filled" />
                        <Typography variant="subtitle1" component="h2" style={{marginTop: '3', textAlign: 'left'}}>Address</Typography>
                        <TextField fullWidth id="textField4"  variant="filled" />
                        <Typography variant="subtitle1" component="h2" style={{marginTop: '3', textAlign: 'left'}}>Domicile</Typography>
                        <TextField fullWidth id="textField4"  variant="filled" />
                        <ButtonGroup variant="text" color="primary" aria-label="contained primary button group" style={{marginTop: '15px'}}>
                          <Button color="secondary" href="/">Go Back</Button>
                          <Button color="secondary" style={{marginTop: '3'}}>Submit</Button>
                        </ButtonGroup>
                      </Box>
                    </Box>
                    <NavBar />  
                </header>
            </div>
        </ThemeProvider>
    );
}



export default SignUp;

//works as of now