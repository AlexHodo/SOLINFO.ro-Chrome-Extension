import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About } from "./routes/About";
import Home from "./routes/Home";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#546BE5',
    },
    secondary: {
      main: '#151719',
    },
  },
});

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Switch>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </ThemeProvider>
    )
};
