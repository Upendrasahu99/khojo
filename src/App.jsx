import React, { useState } from 'react'
import Navbar from './components/Navbar'
import AppRoute from './routes/AppRoute';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  if(darkTheme){
    document.querySelector('html').setAttribute('data-theme', 'dark');
  }else{
    document.querySelector('html').setAttribute('data-theme', 'light');
  }
  return (
    <AppRoute>
      <div>
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme}/>
      </div>
    </AppRoute>
  )
}

export default App