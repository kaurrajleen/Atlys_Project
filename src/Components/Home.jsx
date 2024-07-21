import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup, Image } from 'react-bootstrap';
import { FaEye, FaEyeSlash, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false); 
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [usernameFocused, setUsernameFocused] = useState(false);
  


  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(prevState => !prevState);
  };

  const handleShowPopup = () => {
    setShowPopup(true);
    setShowSignupPopup(false); 
  };
  
  const handleShowSignupPopup = () => {
    setShowSignupPopup(true);
    setShowPopup(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setShowSignupPopup(false); 
  };

  const handleCenterContainerClick = () => {
    setShowSignupPopup(true);
  };

  return (
    <>
   
      <div className="background-container">
        <div className={`pdding ${showPopup || showSignupPopup ? 'blur-background' : ''}`}>
          <div className="mt-5 text-center">
            <h1>Hello Jane</h1>
            <p>How are you doing today? Would you like to share something with the community 🤗</p>
          </div>

          <div className="center-container" onClick={handleCenterContainerClick}>
            <Container>
              <Row>
                <Col id="info">
                  <Card>
                    <Card.Body>
                      <Form id="marg">
                        <Form.Group controlId="createPost">
                          <Form.Label>Create Post</Form.Label>
                          <InputGroup className="mb-3" style={{ borderRadius: '8px' }}>
                            <InputGroup.Text style={{ border: 'none', backgroundColor: 'transparent' }}>
                              <img src="/assets/msg.png" alt="My Custom Icon" style={{ width: '20px', height: '20px' }} />
                            </InputGroup.Text>
                            <Form.Control
                              as="input"
                              placeholder="How are you feeling today?"
                              className="no-blue-focus"
                              style={{
                                border: 'none',
                                borderRadius: '0',
                                backgroundColor: '#191920',
                                color: '#6c757d',
                                marginLeft: '8px',
                              }}
                            />
                          </InputGroup>
                        </Form.Group>
                        <Button variant="primary" className="float-end">Post</Button>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>

            <Container className="p-3 border rounded mt-4">
              <Row className="align-items-center mb-2">
                <Col xs={3} className="text-center">
                  <Image src="/assets/profone.png" roundedCircle style={{ width: '44px', height: '44px', border: '2px solid #ddd' }} />
                </Col>
                <Col xs={8} id="nam">
                  <h5 className="mb-0">Theresa Webb</h5>
                  <small className="text-muted">5 mins ago</small>
                </Col>
                <Col xs={1} className="text-end">
                  <img src="/assets/Shape.png" alt="More" style={{ width: '24px' }} />
                </Col>
              </Row>

              <InputGroup className="mb-3" id="tu" style={{ borderRadius: '8px' }}>
                <Col xs={1} className="text-center">
                  <img src="/assets/hand.png" alt="" />
                </Col>
                <Col xs={11}>
                  <p className="mb-0">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </Col>
              </InputGroup>
              <Row className="pt-2">
                <Col xs={6}>
                  <img src="/assets/comment.png" alt="" /> 24 comments
                </Col>
              </Row>
            </Container>

            <Container className="p-3 border rounded mt-4" id="gy">
              <Row className="align-items-center mb-2">
                <Col xs={3} className="text-center">
                  <Image src="/assets/proff.png" roundedCircle style={{ width: '44px', height: '44px', border: '2px solid #ddd' }} />
                </Col>
                <Col xs={8} id="nam">
                  <h5 className="mb-0">Marvin McKinney</h5>
                  <small className="text-muted">
                    8 mins ago <span className="dot">•</span> Edited
                  </small>
                </Col>
                <Col xs={1} className="text-end">
                  <img src="/assets/Shape.png" alt="More" style={{ width: '24px' }} />
                </Col>
              </Row>

              <InputGroup className="mb-3" id="tu" style={{ borderRadius: '8px' }}>
                <Col xs={1} className="text-center">
                  <img src="/assets/sad.png" alt="" />
                </Col>
                <Col xs={11}>
                  <p className="mb-0">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </Col>
              </InputGroup>
              <Row className="pt-2">
                <Col xs={6}>
                  <img src="/assets/comment.png" alt="" /> 24 comments
                </Col>
              </Row>
            </Container>
          </div>
        </div>

 
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
            <img
    src='/assets/Close.png'
    alt="Close"
    onClick={handleClosePopup}
    style={{
      cursor: 'pointer',
      width: '32px',
      height: '32px',
      float: 'right'
    }}
    
  />
              <h2 className="text-center">WELCOME BACK</h2>
              <p className="text-center">Log into your account</p>
              <form className='pdd'>
                <div className="form-group">
                  <label htmlFor="email">Email or Username</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="email" 
                    placeholder="Enter your email or username" 
                    style={{ 
                      backgroundColor: emailFocused ? 'white' : 'transparent',
                      color: emailFocused ? 'black' : '#7F8084'
                    }}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                  />
                </div>
                <div className="form-group">
                  <div className="d-flex justify-content-between align-items-center">
                    <label htmlFor="password">Password</label>
                    <a href="#forgot-password" className="text-right">Forgot password?</a>
                  </div>
                  <div className="input-group mt-2" style={{ position: 'relative' }}>
                    <input 
                      type={showPassword ? 'text' : 'password'} 
                      className="form-control" 
                      id="password" 
                      placeholder="Enter your password" 
                      style={{ 
                        paddingRight: '3rem',
                        backgroundColor: passwordFocused ? 'white' : 'transparent',
                        color: passwordFocused ? 'black' : '#7F8084'
                      }}
                      onFocus={() => setPasswordFocused(true)}
                    />
                    <span 
                      style={{
                        position: 'absolute',
                        right: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer',
                        color: '#7F8084',
                        zIndex: 999,
                      }}
                      onMouseDown={togglePasswordVisibility} 
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>
                <Link to="/home">
                  <button type="submit" className="btn btn-primary btn-block">Login Now</button>
                </Link>
                <div className="text-left mt-3">
                <a href="#register" className='regu' onClick={handleShowSignupPopup}>
  <span className='not-registered'>Not registered yet?</span> 
  <span className='register'> Register <FaArrowRight /></span>
</a>


                </div>
              </form>
           
            </div>
          </div>
        )}

        {showSignupPopup && (
          <div className="popup">
     
            <div className="popup-conttent">
            <img
    src='/assets/Close.png'
    alt="Close"
    onClick={handleClosePopup}
    style={{
      cursor: 'pointer',
      width: '32px',
      height: '32px',
      float: 'right'
    }}
    
  />
              <h2 className="text-center">SIGN UP</h2>
              
              <p className="text-center">Create an account to continue</p>
              <form className='pdd'>
            <div className="form-group">
              <label htmlFor="signup-email">Email</label>
              <input
                type="email"
                className="form-control"
                id="signup-email"
                placeholder="Enter your email"
                style={{
                  backgroundColor: emailFocused ? 'white' : 'transparent',
                  color: emailFocused ? 'black' : '#7F8084'
                }}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="signup-username">Username</label>
              <input
                type="text"
                className="form-control"
                id="signup-username"
                placeholder="Choose a preferred username"
                style={{
                  backgroundColor: usernameFocused ? 'white' : 'transparent',
                  color: usernameFocused ? 'black' : '#7F8084'
                }}
                onFocus={() => setUsernameFocused(true)}
                onBlur={() => setUsernameFocused(false)}
              />
            </div>
            <div className="form-group">
              <div className="d-flex justify-content-between align-items-center">
                <label htmlFor="password">Password</label>
                <a href="#forgot-password" className="text-right">Forgot password?</a>
              </div>
              <div className="input-group mt-2" style={{ position: 'relative' }}>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  className="form-control" 
                  id="password" 
                  placeholder="Enter your password" 
                  style={{ 
                    paddingRight: '3rem',
                    backgroundColor: passwordFocused ? 'white' : 'transparent',
                    color: passwordFocused ? 'black' : '#7F8084'
                  }}
                  
                  onFocus={() => setPasswordFocused(true)}
                
                />
                <span 
                  style={{
                    position: 'absolute',
                    right: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    color: '#7F8084',
                    zIndex: 999,
                  }}
                  onMouseDown={togglePasswordVisibility} 
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <Link to="/home">
              <button type="submit" className="btn btn-primary btn-block">Sign Up Now</button>
            </Link>
            <div className="text-left mt-3">
            <a href="#login" className='regu' onClick={handleShowPopup}>
  <span className='account-message'>Already have an account?</span> 
  <span className='login-message'> Login <FaArrowRight /></span>
</a>


            </div>
          </form>
        
            </div>
          </div>
        )}

      </div>
    </>
  );
};

export default Home;
