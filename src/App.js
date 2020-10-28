import { Route, Switch } from 'react-router-dom'
import './index.css'
import Home from './components/Home'
import About from './components/About'
import API from './components/API'
import Error from './components/Error'
import React, { createContext, useReducer } from "react";
import Navbar from './components/Navbar'
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { initialState, reducer } from "./reducer";

export const AppContext = createContext();

export default function App(props) {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentTheme } = state;

  return (
    <ThemeProvider theme={currentTheme}>
      <AppContext.Provider value={{ ...state, dispatch }}>
        <GlobalStyles />
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact></Route>
          <Route path='/home' component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/api' component={API}></Route>
          <Route component={Error}></Route>
        </Switch>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    font-family: sans-serif;
  }
`;