import './App.css';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
import About from './components/About'
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode]=useState('light');
  const[alert, setAlert]=useState(null);
  const showAlert = (massage, type) =>{
    setAlert({
        msg : massage,
        type: type
    })

    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }

    const removeBodyClasses=()=>{
      document.body.classList.remove('bg-primary')
      document.body.classList.remove('bg-success')
      document.body.classList.remove('bg-danger')
      document.body.classList.remove('bg-warning')
      document.body.classList.remove('bg-light')
      document.body.classList.remove('bg-dark')

    }

    const toggleMode = (cls) =>{
      removeBodyClasses();
      console.log(cls);
      document.body.classList.add('bg-'+cls);
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled", "success!");
      document.title= "TextUtils-Light Mode";
      // setInterval(() => {
      //   document.title= "TextUtils-is Amazing";
  
      // }, 2000);
  
      // setInterval(() => {
      //   document.title= "install Now";
  
      // }, 1500);
    }else{
      setMode('dark');
      document.body.style.backgroundColor ='#061936';
      showAlert('Dark mode has been enabled',  'success!');
      document.title= "TextUtils-Dark Mode";

    }
    
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils8" About="About Us" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    

<div className="container">
<Routes>
          <Route exact path="/about" element={<About mode={mode}/>}></Route>
            
          
          <Route  exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
} ></Route>
          
</Routes>
</div> 
    
</BrowserRouter>  
</>
  );
}

export default App;
