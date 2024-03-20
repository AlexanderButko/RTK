import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routes/routes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";


function App() {


  return (
    <div className="App">
            <BrowserRouter>
                <div className="wrapper">
                    <Navbar/>
                    <div className='main'>
                        <AppRouter/>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
    </div>
  );
}

export default App;
