import React, { useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import inputs from '../utils/RegFormAtts';
import {appendErrors, useForm, UseFormRegister} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema=yup.object().shape({
    fname:yup.string().required("First name cannot be empty").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    mname:yup.string(),
    lname:yup.string().required("Last name cannot be empty").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email:yup.string().email("Enter valid email").required("Email cannot be empty"),
    password:yup.string().required("password cannot be empty").min(8,"minimu 8 characters is required").max(15,"15 characters is limit"),
    role:yup.string().required("role cannot be empty")
})

const RegisterUSer = () => {

    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema),mode:'onSubmit'
    })

    
      // const submitEvent = (data:any) => {
      //   alert("data saved!!")
      //   console.log(data);
      // };
      const submitEvent=()=>{
        return alert("dsfasdf");
      }
    
 
      return (
        <div className="App">
          <Container fluid>
            <Row>
              <Col
                sm={4}
                className="mx-auto mt-3 mb-3 border border-black rounded-3 pb-2 bg-light shadow"
              >
                <Form onSubmit={handleSubmit(submitEvent)}>
                  <div className="text-center">
                    <p className="fs-1 fw-bold text-dark">Register</p>
                  </div>
                  {
                    inputs.map((item,index)=>{
                      return (
                        <FormGroup key={index} className="mb-0">
                        <Form.Label className="m-0">{item.label}</Form.Label>
                      <Form.Control
                        type={item.type}
                        placeholder={item.placeholder}
                        {...register(`${item.name}`)}
                        className={errors[item.name] && "border border-danger"}
                      />
                      <div className='text-danger' style={{fontSize:"11px", height:"13px"}}>{errors[item.name]?.message}</div>
                        </FormGroup>
                      )
    
                    })
                  }
                  
                  
                  <FormGroup>
                    <Form.Label>Select User Type</Form.Label>
                    <Form.Select>
                      <option>Select User Type</option>
                      <option value="org_admin">ORGANIZATION ADMIN</option>
                      <option value="canteen_admin">CANTEEN ADMIN</option>
                      <option value="user">USER</option>
                    </Form.Select>
                    <small className="text-danger invisible">Error here</small>
                  </FormGroup>
                  <div className="text-center w-full">
                    <Button variant="primary" type="submit" className="px-2 fs-6 fw-bold">
                      Register
                    </Button>
                  </div>
                </Form>
    
              </Col>
            </Row>
          </Container>
        </div>
      );
}

export default RegisterUSer