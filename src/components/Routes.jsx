import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Results from './Results';
import Search from './Search';

const RoutesElement = () => {
  return (
    <div className='p-4'>
      <Routes>
        <Route exact path="/" element={<Search/>}/>
        {['/search', '/images', '/news', '/video'].map(path => <Route key={path} exact path={path} element={<Results/>}/>)}
      </Routes>
    </div>
  )
}

export default RoutesElement