import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import "../Index.css";
import axios from "axios";
import Swal from "sweetalert2";


const Login = ({onLogin}) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      const data = await axios.post(
        "https://4bfb-2407-1400-aa0e-3788-14d7-d2cb-2ca8-4f61.ngrok-free.app/login",
        {
          userName: values.username,
          password: values.password,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      if (data.data) {
        
        onLogin(values.username, values.password);

        navigate("/dashboard");
        localStorage.setItem("session", JSON.stringify(data.data));
        Swal.fire({
          title: "Welcome To the Dashboard!",
        });
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="container mt-5">
      <h1 className="text-center mb-4 heading">Login</h1>

      <div className="mb-3 d-flex align-items-center">
        <div className="circle mx-5"></div>
        <input
          type="text"
          placeholder="Enter Username ..."
          className="form-control"
          {...formik.getFieldProps("username")}
        />
      </div>
      {formik.touched.username && formik.errors.username ? (
        <div className="text-danger text-center pb-3">
          {formik.errors.username}
        </div>
      ) : null}

      <div className="mb-3 d-flex align-items-center">
        <div className="circle mx-5"></div>
        <input
          type="password"
          placeholder="Enter Password ..."
          className="form-control mt-3"
          {...formik.getFieldProps("password")}
        />
      </div>
      {formik.touched.password && formik.errors.password ? (
        <div className="text-danger text-center pb-3">
          {formik.errors.password}
        </div>
      ) : null}

      <div className="parent-btn mx-auto">
        <div className="d-grid  gap-2 mt-4">
          <button type="submit" className="btn btn-primary btn-logined">
            Login
          </button>
          <p className="text-center mt-3">
            Don't have an account? <Link to="/signup">Sign Up Here!!</Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;
