import React from "react";
import { ThemeProvider, createTheme } from '@material-ui/core/styles'; //import for styles and themes
import NavBar from "./navBar";

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
function SignUp() {
    return (
        <ThemeProvider theme={theme}> {/*this is how you use the theme provider*/}
            <div className="App">
                <header className="App-header">
                {/*this is the main stuff that we need*/}
                <NavBar />
                <div id='main' className='main'>
            
                </div>
                {/* <div id='backgroundImage' style={{backgroundImage: 'url("")'}}>

          </div> */}
                </header>
            </div>
        </ThemeProvider>
    );
}

export default SignUp;