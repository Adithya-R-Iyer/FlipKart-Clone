import React from 'react'
import {Box, styled } from '@mui/material' 

// components
import Navbar from './Navbar'
import Banner from './Banner'


const Component = styled(Box)`
    padding: 10px 10px;
    background: #F2F2F2;
`


export default function Home() {
  return (
    <>  
        <Navbar/>
        <Component>
            <Banner/>
        </Component>
    </>
  )
}
