import React from 'react'
import { Col, Container, Row, Table,Button } from 'react-bootstrap'
import {AiFillEye} from 'react-icons/ai'
import {FaUserEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'

const Userlist = () => {
  return (
    <Container fluid className="bg-light ">
      <Row>
        <Col>
        <div className='fw-bold fs-1'>
          Users
        </div>
          <Table responsive="sm" striped bordered hover className='rounded'>
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>
                  First Name
                </th>
                <th>
                  Middle Name
                </th>
                <th>
                  Last Name
                </th>
                <th>
                  Email
                </th>
                <th>
                  Role
                </th>
                <th>
                  options
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Joyadeep</td>
                <td></td>
                <td>Limbu</td>
                <td>jlimbu@deerhold.org</td>
                <td>SUPER ADMIN</td>
                <td className='d-flex justify-content-between fs-3 text-white'>
                   <AiFillEye className='bg-warning rounded p-1 '/>
                   <FaUserEdit className='bg-primary rounded p-1'/>
                   <MdDelete className='bg-danger rounded p-1'/>                  
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ram</td>
                <td>Bahadur</td>
                <td>Gurung</td>
                <td>rbgurung@deerhold.org</td>
                <td>USER</td>
                <td className='d-flex justify-content-between fs-3 text-white'>
                   <AiFillEye className='bg-warning rounded p-1 ' onClick={()=>{alert("clicked")}} />
                   <FaUserEdit className='bg-primary rounded p-1'/>
                   <MdDelete className='bg-danger rounded p-1'/>                  
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Joyadeep</td>
                <td></td>
                <td>Limbu</td>
                <td>jlimbu@deerhold.org</td>
                <td>ORGANIZATION ADMIN</td>
                <td className='d-flex justify-content-between fs-3 text-white'>
                   <AiFillEye className='bg-warning rounded p-1 '/>
                   <FaUserEdit className='bg-primary rounded p-1'/>
                   <MdDelete className='bg-danger rounded p-1'/>                  
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Ram</td>
                <td>Bahadur</td>
                <td>Gurung</td>
                <td>rbgurung@deerhold.org</td>
                <td>USER</td>
                <td className='d-flex justify-content-between fs-3 text-white'>
                   <AiFillEye className='bg-warning rounded p-1 '/>
                   <FaUserEdit className='bg-primary rounded p-1'/>
                   <MdDelete className='bg-danger rounded p-1'/>                  
                </td>
              </tr>
            </tbody>

          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default Userlist