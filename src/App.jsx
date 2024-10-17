import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  if(darkTheme){
    document.querySelector('html').setAttribute('data-theme', 'dark');
  }else{
    document.querySelector('html').setAttribute('data-theme', 'light');
  }
  return (
    <div>
      <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme}/>
    </div>
  )
}

export default App