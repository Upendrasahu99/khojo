import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RoutesElement from "./components/Routes";

const App = () => {

  const [darkTheme, setDarkTheme] = useState(false);

  return(
    <div className={darkTheme ? 'dark' : ''}>

      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <RoutesElement/>
        <Footer/>
      </div>
    </div>
  )
}

export default App;