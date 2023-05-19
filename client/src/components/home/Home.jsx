import React from 'react'
import {Box, styled } from '@mui/material' 

import { useEffect } from 'react'  // deadMount deadUpdate willUnMount are the 3 React Class Based Hooks that are used to call an API as and when the components are Rendered... Since we are working with React Function Based Components all the above methods are combined together to form the useEffect Hook
import { useDispatch } from 'react-redux'

// components
import Navbar from './Navbar'
import Banner from './Banner'

import { getProducts } from '../../redux/actions/productActions.js'

const Component = styled(Box)`
    padding: 10px 10px;
    background: #F2F2F2;
`


export default function Home() {
  
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getProducts())
  }, [dispatch]) // empty [] indicates that the callback function is to be called when the components are rendered -> its a condition of component - DeadMount

  return (
    <>  
        <Navbar/>
        <Component>
            <Banner/>
        </Component>
    </>
  )
}
