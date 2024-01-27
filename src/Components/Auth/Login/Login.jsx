import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import '../Index.css'

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      console.log('Form submitted with values:', values);
      navigate('/dashboard');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='container mt-5'>
      <h1 className='text-center mb-4 heading'>Login</h1>

      <div className='mb-3 d-flex align-items-center'>
        <div className="circle mx-5"></div>
        <input
          type='text'
          placeholder='Enter Email ...'
          className='form-control'
          {...formik.getFieldProps('email')}
        />
      </div>
      {formik.touched.email && formik.errors.email ? (
        <div className="text-danger text-center pb-3">{formik.errors.email}</div>
      ) : null}

      <div className='mb-3 d-flex align-items-center'>
        <div className="circle mx-5"></div>
        <input
          type='password'
          placeholder='Enter Password ...'
          className='form-control mt-3'
          {...formik.getFieldProps('password')}
        />
      </div>
      {formik.touched.password && formik.errors.password ? (
        <div className="text-danger text-center pb-3">{formik.errors.password}</div>
      ) : null}

      <div className="parent-btn mx-auto">
        <div className="d-grid  gap-2 mt-4">
          <button type="submit" className='btn btn-primary btn-logined'>
            Login
          </button>
          <p className='text-center mt-3'>
            Don't have  an account? <a href="./signup">Sign Up Here!!</a>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;