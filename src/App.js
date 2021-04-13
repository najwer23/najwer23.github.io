import Aos from 'aos';
import "aos/dist/aos.css";
import { Component, useEffect, React } from "react"
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import RootInfo from './Components/RootInfo';
import './CSS/index.css';

function InitAOS() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
}

function App() {
    InitAOS()

    return (
        <>
            <Nav />
            <RootInfo />
            <Footer />
        </>
    )
}

export default App;


