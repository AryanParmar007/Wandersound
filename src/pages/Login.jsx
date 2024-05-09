import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from 'react-router-dom';
import "../styles/login.css";
import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "./../context/AuthContext";
import { BASE_URL } from "./../utils/config";

const Login = () => {

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const [touchedFields, setTouchedFields] = useState({
    email: false,
    password: false
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => {
    const { id, value } = e.target;
    setCredentials(prev => ({ ...prev, [id]: value }));
  };

  const handleBlur = (field) => {
    setTouchedFields(prev => ({ ...prev, [field]: true }));
  };

  const handleClick = async e => {
    e.preventDefault();

    dispatch({ type: 'LOGIN_START' });

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(credentials)
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);

      console.log(result.data);
      dispatch({ type: 'LOGIN_SUCCESS', payload: result.data });
      navigate('/');
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
    }
  };

  const isEmailValid = () => {
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(credentials.email);
  };

  const isPasswordValid = () => {
    // Regular expression for password validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(credentials.password);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="email" placeholder='Email' required id="email" onChange={handleChange} onBlur={() => handleBlur('email')} />
                    {touchedFields.email && !isEmailValid() && <p className="error-msg">Please enter a valid email address</p>}
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Password' required id="password" onChange={handleChange} onBlur={() => handleBlur('password')} />
                    {touchedFields.password && !isPasswordValid() && <p className="error-msg">Password must be at least 8 characters long and contain at least one letter and one number</p>}
                  </FormGroup>

                  <Button className='btn secondary__btn auth__btn' type='submit' onClick={handleClick} disabled={!isEmailValid() || !isPasswordValid()}>Login</Button>
                </Form>

                <p>Don't have an account? <Link to='/register'>Create Account</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Login;
