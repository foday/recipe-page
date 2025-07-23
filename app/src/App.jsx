import { useState } from 'react'
import Home from './components/Home'
import {Divider, Container, Box} from "@mui/material";
import "../src/style/main.css";
import Header from './components/Header';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <div>
        <Container style={{alignContent: "center"}}>
          <Box style={{backgroundColor: "white", borderRadius: "10px", padding: "20px"}}>
          <Header/>
          <Home />
        <Divider/>
        <Footer/>
          </Box>
        </Container>
        
      
      </div>
      
    </>
  )
}

export default App
