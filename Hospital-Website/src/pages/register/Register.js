import React from 'react'
import {Form, message } from 'antd'
import {useDispatch} from 'react-redux'
import { hideLoading, showLoading } from '../../redux/features/alertSlice';
import './Register.css'
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom';
//import { Login } from './Login';

//const useNavigate = useNavigate()
//form handler


export const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onFinshHandler = async(values) => {
        try{
            dispatch(showLoading())
            const res = await axios.post('/api/v1/user/register',values)
            dispatch(hideLoading())
            if(res.data.success){
                message.success('Register Successfully')
                navigate('/login')
            }else{
                message.error(res.data.message);
            }
        }catch(error){
            dispatch(hideLoading())
            console.log(error)
            message.error('Something Went Wrong')
        }
    };
  return (
    <>
    <div className='form-container'>
        <Form layout='vertical' onFinish={onFinshHandler} className='register-form'>
            <h3 className='text-center'>Register Form</h3>
            <Form.Item label = 'Name' name='name'>
                <input type='text ' required/>
            </Form.Item>
            <Form.Item label = 'Email' name='email'>
                <input type='email' required/>
            </Form.Item>
            <Form.Item label = 'Password' name='password'>
                <input type='password' required/>
            </Form.Item>
           <Link to ='/Login' className='m-2'>Already user login here</Link>
            <button className='btn btn-primary' type='submit'>Register</button>
        </Form>
    </div>
    </>
  )
}
export default Register