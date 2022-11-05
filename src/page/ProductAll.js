import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { Container,Row, Col, Alert } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import {useNavigate} from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';


const ProductAll = () => {
 
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  let [error, setError] = useState("");

  const getProducts=async()=>{
 try{
    let searchQuery=query.get('q') || "";
    console.log("쿼리값은?", searchQuery);
    let url = `https://my-json-server.typicode.com/Gyultang/hnm-project/products?q=${searchQuery}`
    let response = await fetch(url);
    let data = await response.json()
    if(data.length < 1){
      if(searchQuery!==""){
        setError(`${searchQuery}와 일치하는 상품이 없습니다`);
      }else{
        throw new Error("결과가 없습니다");
      }
    }
    setProductList(data)
  } catch(err){
    setError(err.message)
  }
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