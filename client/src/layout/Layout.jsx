import React from 'react'
import {Outlet} from "react-router-dom"
import { Wrapper } from './Layout.styles'
const Layout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  )
}

export default Layout