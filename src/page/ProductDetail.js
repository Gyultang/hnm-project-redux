import React,{useEffect, useState} from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom' //숫자 피라미터값을 읽어줌
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



const ProductDetail = () => {
    let {id} = useParams();
    let [product,setProduct]=useState(null)
  const getProductDetail = async()=>{
    let url = `https://my-json-server.typicode.com/Gyultang/hnm-project/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    console.log(data);
    setProduct(data)
  }
  useEffect(()=>{
    getProductDetail();
  },[]);
  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img}></img>
        </Col>
        <Col>
          <div className='product-title'>{product?.title}</div>
          <div className='product-price'>₩ {product?.price}</div>
          <div>{product?.choice==true?"Conscious choice":" "}</div>
          <DropdownButton className='size-btn' variant='outline-secondary' id="dropdown-basic-button" title="사이즈 선택">
            <Dropdown.Item href="#/action-1">S</Dropdown.Item>
            <Dropdown.Item href="#/action-2">M</Dropdown.Item>
            <Dropdown.Item href="#/action-3">L</Dropdown.Item>
          </DropdownButton>
          <div className='add-btn'>추가</div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail