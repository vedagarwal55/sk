
import React from 'react'
import {Form ,message} from 'antd'
import './Login.css'
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { hideLoading, showLoading } from '../../redux/features/alertSlice';



export const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
//form handlar
  const onFinshHandler = async(values) => {
    try{
      dispatch(showLoading())
      const res = await axios.post('/api/v1/user/login',values)
      window.location.reload();
      dispatch(hideLoading())
      if(res.data.success){
        localStorage.setItem("token",res.data.token);
        message.success('Login Successfully')
        navigate('/dashboard')
      }else{
        message.error(res.data.message)
      }
    }catch(error){
      dispatch(hideLoading())
      console.log(error)
      message.error('something went wrong')
    }
  };
  return (
    <>
    <div className='form-container'>
        <Form layout='vertical' onFinish={onFinshHandler} className='register-form'>
            <h3 className='text-center'>Login Form</h3>
            <Form.Item label = 'Email' name='email'>
                <input type='email' required/>
            </Form.Item>
            <Form.Item label = 'Password' name='password'>
                <input type='password' required/>
            </Form.Item>
           <Link to ='/Register' className='m-2'>Not a user register here</Link>
            <button className='btn btn-primary' type='submit'>Log in</button>
        </Form>
    </div>
    </>
  )
}
export default Login