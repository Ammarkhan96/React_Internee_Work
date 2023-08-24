import React, { useState } from 'react'
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
     setAlert({
      message: message,
      type: type
     })
     setTimeout(() => {
      setAlert(null);
     }, 1500);
  }
  
  const toggleMode = () =>{
    if(mode=== 'light'){
     setMode('dark');
     document.body.style.backgroundColor = 'grey';
     showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
    <>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
  <TextForm  showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>

    </div> 
   </>
 
  )
}

export default App