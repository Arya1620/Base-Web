import React from 'react'
import Login from './Login'
import Dashboard from './Sidebar'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter  } from 'react-router-dom'
import Sidebar from './Sidebar'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
        },
        {
            path: "/dashboard",
            element: <Dashboard/>,

        },
    ])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
