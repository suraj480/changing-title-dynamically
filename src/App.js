import React,{useState} from 'react'
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [alert,setAlert]=useState(null);
  const [mode,setMode]=useState('light');//whether the dark mode is enabled or not
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert('Dark mode has enabled','success')
      document.title='TextUtils --DarkMode'
    }else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert('Light mode has enabled','success')
      document.title='TextUtils --LightMode'
    }
  }

  return (
    
 < >
    
<Navbar title="TEXT CONVERTER" aboutText="About TextUtils" mode={mode}  toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container my-3'>
<TextForm showAlert={showAlert} heading="Result" mode={mode}/>
</div> 
{/* <About/> */}
    </>
  );
}

export default App;
