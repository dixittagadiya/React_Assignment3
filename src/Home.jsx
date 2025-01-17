import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Stylehome.css'
const Home = () => {
    const navigate = useNavigate();
    const openIntro = () => {
        navigate('/Intro');
      };
    const openJavascript = () => {
        navigate('/Javascript');
    }
    const openHandlingEvent = () =>{
        navigate('/HandlingEvent');
    }
    const openListandKey = () => {
        navigate('/ListandKey');
    }
    const openNavigationBar = () =>{
        navigate('/NavigationBar');
    }
  return (
    <>
    <h1>Assignment Practice:</h1>
    <h2>Click Button</h2>

    <button onClick={openIntro}>Introduction to React.js</button>

    <button onClick={openJavascript}>JSX (JavaScript)</button>
    
    <button onClick={openHandlingEvent}>Handling Events in React</button>

    <button onClick={openListandKey}>Lists and Keys</button>

    <button onClick={openNavigationBar}>Routing in React (React Router)</button>
    </>
  )
}

export default Home