import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../Index.css'

const SignUp = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            userName: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            console.log('Form submitted with values:', values);
            navigate('/dashboard')
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
                            Already have an account? <a href="./login">Login Here!!</a>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;