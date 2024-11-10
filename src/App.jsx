// import  { useState } from 'react'
// import Navbar from './components/Navbar'
import AppRoute from './routes/AppRoute';
import ResultContextProvider from './context/ResultContextProvider';

const App = () => { 
  
  return (
    <ResultContextProvider>
      <AppRoute/>
    </ResultContextProvider>
  )
}

export default App