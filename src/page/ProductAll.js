import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { Container,Row, Col, Alert } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import {useNavigate} from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
import {productAction} from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';


const ProductAll = () => {
  // const [productList, setProductList] = useState([]);
  const productList = useSelector((state)=>state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch()
  let [error, setError] = useState("");

  const getProducts=()=>{
 
    let searchQuery=query.get('q') || "";
    console.log("쿼리값은?", searchQuery);
    dispatch(productAction.getProducts(searchQuery))
};


  
  
  useEffect(()=>{
    getProducts()
  },[query])
  return (
    <Container>
      {error?(<Alert variant='dark'>{error}</Alert>):(
        <Row>
        {productList.length>0 && productList.map((menu)=>(
          <Col lg={3}><ProductCard item={menu}></ProductCard></Col>
        ))}
        </Row>
        )}
    </Container>
  );
};

export default ProductAll