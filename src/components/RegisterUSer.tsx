import React, { useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";

import {appendErrors, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema=yup.object().shape({
    fname:yup.string().required("First name cannot be empty"),
    mname:yup.string(),
    lname:yup.string().required("Last name cannot be empty"),
    email:yup.string().email().required("Email cannot be empty"),
    password:yup.string().required("password cannot be empty"),
    role:yup.string().required("role cannot be empty")
})

const RegisterUSer = () => {

    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema),mode:'all'
    })


    // const [register, setRegister] = useState({
    //     fname: "",
    //     mname: "",
    //     lname: "",
    //     email: "",
    //     password: "",
    //     role: "",
    //   });
    
    //   const handleChange = (e: any) => {
    //     setRegister({ ...register, [e.target.name]: e.target.value });
    //   };
    
      const submitEvent = (data:any) => {
        console.log(data);
      };
    
 
      const inputs = [
        {
          label:"First Name",
          type: "text",
          placeholder: "First Name",
          name: "fname",
        },
        {
          label:"Middle Name",
          type: "text",
          placeholder: "Middle Name",
          name: "mname",
          },
        {
          label:"Last Name",
          type: "text",
          placeholder: "Last Name",
          name: "lname",
          },
        {
          label:"Email",
          type: "email",
          placeholder: "Email",
          name: "email",
          },
        {
          label:"Password",
          type: "password",
          placeholder: "Password",
          name: "password",
          },
      ];
    
      return (
        <div className="App">
          <Container fluid>
            <Row>
              <Col
                sm={4}
                className="mx-auto mt-3 mb-5 border border-black rounded-3 pb-2 bg-light shadow"
              >
                <Form onSubmit={handleSubmit(submitEvent)}>
                  <div className="text-center">
                    <p className="fs-1 fw-bold text-dark">Register</p>
                  </div>
                  {
                    inputs.map((item,index)=>{
                      return (
                        <FormGroup key={index}>
                        <Form.Label>{item.label}</Form.Label>
                      <Form.Control
                        type={item.type}
                        placeholder={item.placeholder}
                        {...register(`${item.name}`)}
                        className={errors.email && "border border-danger"}
                      />
                      <div className='text-danger' style={{fontSize:"10px", height:"12px"}}>{errors.email?.message}</div>
                        </FormGroup>
                      )
    
                    })
                  }
                  
                  
                  <FormGroup>
                    <Form.Label>Select Admin</Form.Label>
                    <Form.Select
                    //   onChange={handleChange}
                    //   name="role"
                    //   value={register.role}
                    //   required
                    >
                      <option>Select Admin</option>
                      <option value="org_admin">ORGANIZATION ADMIN</option>
                      <option value="canteen_admin">CANTEEN ADMIN</option>
                      <option value="user">USER</option>
                    </Form.Select>
                    <small className="text-danger invisible">Error here</small>
                  </FormGroup>
                  <div className="text-center w-full">
                    <Button variant="primary" type="submit" className="px-2 fs-6">
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