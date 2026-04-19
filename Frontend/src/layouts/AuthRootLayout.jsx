import React from 'react'
import { Outlet } from 'react-router'

const AuthRootLayout = () => {
  return (
    <div>
       <main>
          <Outlet/>
       </main>
    </div>
  )
}

export default AuthRootLayout
