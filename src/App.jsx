import  { useState } from 'react'
import Navbar from './components/Navbar'
import AppRoute from './routes/AppRoute';

const App = () => {

  return (
    <AppRoute>
      <div>
        <Navbar />
      </div>
    </AppRoute>
  )
}

export default App