import * as Yup from 'yup';
import React from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';


import '../Index.css'
import axios from 'axios';

const SignUp = ({onSign}) => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
            email: Yup.string().required("Required"),
            userName: Yup.string().required("Required"),
            password: Yup.string().required("Required"),
            
        }),
        onSubmit: async (values) => {
            try {
                // Make the registration request
                const response = await axios.post('https://4bfb-2407-1400-aa0e-3788-14d7-d2cb-2ca8-4f61.ngrok-free.app/registration', values, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'ngrok-skip-browser-warning': 'true',
                    },
                });

                if (response.data) {
                 
                    onSign(firstName , lastName , userName , password , email)
                    navigate('/dashboard');
                    localStorage.setItem("session", JSON.stringify(response.data));

                   
                } 
            } catch (error) {
                
                console.error('Error during registration:', error);
            }
        },
    });

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 heading">SignUp</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className={`mb-3 d-flex align-items-center ${formik.touched.firstName && formik.errors.firstName ? 'input-error' : ''}`}>
                    <div className="circle"></div>
                    <input
                        type='text'
                        placeholder='Enter First Name ...'
                        className='form-control'
                        {...formik.getFieldProps('firstName')}
                    />
                </div>
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="text-danger text-center pb-1">{formik.errors.firstName}</div>
                ) : null}
                {/* Repeat similar structure for other input fields */}
                <div className={`mb-3 d-flex align-items-center ${formik.touched.lastName && formik.errors.lastName ? 'input-error' : ''}`}>
                    <div className="circle"></div>
                    <input
                        type='text'
                        placeholder='Enter Last Name ...'
                        className='form-control'
                        {...formik.getFieldProps('lastName')}
                    />
                </div>
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="text-danger text-center pb-1">{formik.errors.lastName}</div>
                ) : null}
                {/* Repeat similar structure for other input fields */}
                <div className={`mb-3 d-flex align-items-center ${formik.touched.firstName && formik.errors.firstName ? 'input-error' : ''}`}>
                    <div className="circle"></div>
                    <input
                        type='text'
                        placeholder='Enter User Name ...'
                        className='form-control'
                        {...formik.getFieldProps('userName')}
                    />
                </div>
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="text-danger text-center pb-1">{formik.errors.lastName}</div>
                ) : null}
                {/* Repeat similar structure for other input fields */}
                <div className={`mb-3 d-flex align-items-center ${formik.touched.firstName && formik.errors.firstName ? 'input-error' : ''}`}>
                    <div className="circle"></div>
                    <input
                        type='text'
                        placeholder='Enter Email ...'
                        className='form-control'
                        {...formik.getFieldProps('email')}
                    />
                </div>
                {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger text-center pb-1">{formik.errors.lastName}</div>
                ) : null}
                {/* Repeat similar structure for other input fields */}
                <div className={`mb-3 d-flex align-items-center ${formik.touched.password && formik.errors.password ? 'input-error' : ''}`}>
                    <div className="circle"></div>
                    <input
                        type='password'
                        placeholder='Enter Password ...'
                        className='form-control'
                        {...formik.getFieldProps('password')}
                    />
                </div>
                {formik.touched.password && formik.errors.password ? (
                    <div className="text-danger text-center pb-1">{formik.errors.password}</div>
                ) : null}
                <div className="parent-btn mx-auto">
                    <div className="d-grid  gap-2 mt-4">
                        <button type="submit" className='btn btn-primary btn-logined'>
                            SignUp
                        </button>
                        <p className='text-center mt-3'>
                            Already have an account? <Link to="/login">Login Here!!</Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;