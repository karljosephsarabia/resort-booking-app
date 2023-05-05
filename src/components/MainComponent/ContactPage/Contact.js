import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ContactStyle.css'



function Contact() {
  return (
    <>
      <Container id='Contact'>
        <Row className='mb-5 mt-3'>
          <Col lg='8'>
          <h1 className='display-4 mb-4' id='contact-h1'>
            Contact Us
          </h1>
          </Col>
        </Row>

        <Row className='sec_sp'>
          <Col lg='5' className='mb-5'>
            <h3 className='Color_sec py-4'>Get in touch</h3>
            <address>
              <strong>Email : DORA-D'EXPLORER@gmail.com</strong>
              <br/>
              <br/>
              <p>
                <strong>Phone : +63 902X xXxXXX </strong>
              </p>
            </address>
            <p>
              "Thank you for using our  booking app, and we look
              forward to assisting you!" 
            </p>
          </Col>

          <Col lg='7' className='d-flex align-items-center'>
            <form className='contact_form w-100'>
              <Row>
                <Col lg='6' className='form-group'>
                  <input
                    className='form-control'
                    id='name'
                    name='name'
                    placeholder='Full Name'
                    type='text'
                  />
                </Col>
                <Col lg='6' className='form-group'>
                  <input
                    className='form-control rounded-0'
                    id='email'
                    name='email'
                    placeholder='Email'
                    type='email'
                  />
                </Col>
              </Row>
              <br/>
              <textarea
                        className='form-control rounded-0' id='message'
                        name='message'
                        placeholder='Type your message'
                        rows='5'
              ></textarea>
              <br/>
              <Row>
                <Col lg='12' className='form-group'>
                  <button className='btn btn-primary' type='submit' id='btn-contact'>submit</button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>

      </Container>
    </>
  );
};

export default Contact;

