import React,{useState} from 'react';
import './App.css';
import Layout from './components/Layout/layout';
import { ThemeProvider } from "styled-components";

const LightTheme = {
  pageBackground: "none",
  titleColor: "hsl(227, 35%, 25%)",
  tagLineColor: "black"
};

const DarkTheme = {
  pageBackground: "hsl(227, 35%, 25%)",
  titleColor: " hsl(225, 20%, 60%)",
  tagLineColor: "lavender"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

function App() {
  const [theme, setTheme] = useState("light")
  return (
    <ThemeProvider theme={themes[theme]}>
     {/* <div> */}
     <Layout theme={theme} setTheme={setTheme}/>
    {/* </div> */}
    </ThemeProvider>
  );
}

export default App;
