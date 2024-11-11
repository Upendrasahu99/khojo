import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Result from '../components/Result'
const AppRoute = () => {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {index: true, element: <Navigate to={'/search'}/>},
        { path: '/search', element: <Result /> },
      ]
    }
  ])
  return (
    <RouterProvider router={route}/>
  )
}

export default AppRoute