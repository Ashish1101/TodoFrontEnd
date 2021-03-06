import React, { useEffect } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {connect} from 'react-redux'
import {loginUser} from '../../actions/auth'
import {useHistory} from 'react-router-dom'

const Login = ({loginUser , user : {isAuthenticated , user , error , loading}}) => {
  let history = useHistory()
  useEffect(() => {
    if(isAuthenticated) {
       history.push("/main")
    }
  }, [isAuthenticated , history])  
  const formik = useFormik({
        initialValues: {
          email: "",
          name: "",
          password: ""
        },
    
        // validate,
        validationSchema: Yup.object({
          email: Yup.string().email().required("Email is required"),
          password: Yup.string()
            .required("password is required")
        }),
        onSubmit: (values) => {
          console.log(JSON.stringify(values, null, 2));
          loginUser(values)
        }
      });
   return (
    <div className="w-full  shadow-xl max-w-sm sm:max-w-lg flex justify-center container mx-auto mt-10 sm:mt-20">
   
    <form
      onSubmit={formik.handleSubmit}
      className=" rounded px-8 pt-6 pb-8 mb-4"
    >
         <h1 className="text-blue-600 mb-4 text-4xl pb-4">Login</h1>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          {...formik.getFieldProps("email")}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="text-red-400">{formik.errors.email}</p>
        ) : (
          ""
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <p className="text-red-400">{formik.errors.password}</p>
        ) : (
          ""
        )}
      </div>
      {/* {formik.submitCount >= 2 && (<button>Click to Reset</button>)} */}
      <input
        type="submit"
        value="submit"
        className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
      />
    </form>
  </div>
   )
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps , {loginUser})(Login)
