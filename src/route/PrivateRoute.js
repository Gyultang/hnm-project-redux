import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({authenticate}) => {
  return authenticate == true?<ProductDetail></ProductDetail>:<Navigate to = "/login"></Navigate>;
}

export default PrivateRoute