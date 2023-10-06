import React from 'react'
import { Layout } from './../../components/Layout';
import { Col, Input, Row ,Form, TimePicker } from 'antd'

export const ApplyDoctor = () => {
//handle form
 const handleFinish = (values) => {
console.log(values)
 }
  return (
    <Layout>
        <h3 className='text-center'>Apply Doctor</h3>
        <br/>
        <Form layout="vertical" onFinish ={handleFinish} className='m-3'>
        <h1 className='text-light'>Personal Details:</h1>
        <br/>
            <Row gutter={20}>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item label="First Name" name ="firstName" required rules={[{required:true}]}>
                        <Input type='text' placeholder='Your Name'/>
                    </Form.Item>
                </Col>
            <Col xs={24} md={24} lg={8}>
                <Form.Item
                    label="Last Name"
                      name="lastName"
                    required
                    rules={[{ required: true }]}
                 >
              <Input type="text" placeholder="your last name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Phone No"
              name="phone"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your contact no" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Email"
              name="email"
              required
              rules={[{ required: true }]}
            >
              <Input type="email" placeholder="your email address" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Website" name="website">
              <Input type="text" placeholder="your website" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Address"
              name="address"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your clinic address" />
            </Form.Item>
          </Col>
        </Row>

        <h4>Professional Details :</h4>
        <br/>

        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Specialization"
              name="specialization"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your specialization" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Experience"
              name="experience"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your experience" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Timings" name="timeings" required>
              <TimePicker.RangePicker format="HH:mm" />
            </Form.Item>
          </Col>
            </Row>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary' type='submit'>
                    Submit
                </button>
            </div>
        </Form>
    </Layout>
  )
}
