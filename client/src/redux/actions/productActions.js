import axios from "axios"

import * as actionTypes from '../constants/productConstants.js'

const URL = 'http://localhost:8000'

export const getProducts = ()=> async(dispatch)=> {
    try{
        let {data} = await axios.get(`${URL}/products`) 
        dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS ,payload: data })
    }catch(error) {
        dispatch({type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message })
    }
}


// let response = {
//     config: {},
//     data: {},
//     headers: {},
//     status: 200,
//     message: ''
// }

// Here above given is an response object which contains all the fields as shown
// Now if we want to retrieve just the data part then we have 2 ways by which we can do that 

// 1. obj.data
// 2. {data} = obj;