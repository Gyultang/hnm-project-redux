import React from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    //Form을 쓸때는 preventDefault()로 submit 시 새로고침이 자동으로 되는 것을 막아주자
    console.log("login OK?")
    setAuthenticate(true);
    navigate('/')
  }
  return (
    <Container className="login-page">
        <Form className="formBox" onSubmit={(event)=>loginUser(event)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="secondary" type="submit"> 
          {/* type="submit"형식인 Form에 onClick을 주면 안된다 대신 onSubmit */}
            Submit
          </Button>
       </Form>
    </Container>
  )
}

export default Login