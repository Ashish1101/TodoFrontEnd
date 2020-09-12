import React from 'react'
import { connect  } from 'react-redux'
import {addTask} from '../../actions/task'
import * as Yup from 'yup'
import {useFormik} from 'formik'
const Search = ({addTask , task}) => {
  
    const formik = useFormik({
      initialValues : {
        title : ''
      },
      
      validationSchema : Yup.object({
        title : Yup.string().required('Text required')
      }),

      onSubmit: (values) => {
        console.log(values)
        console.log(JSON.stringify(values, null, 2));
        addTask(values)
      }

    })
  
    return (
        
            <form onSubmit={formik.handleSubmit}>
                <input type="text"
                  name="title"
                  placeholder="Add Task"
                  {...formik.getFieldProps("title")}
                  className="shadow appearance-none border placeholder-indigo-600 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <input type="submit" className="bg-blue-700 shadow-lg min-w-full py-2" value="Add" />
                {formik.touched.title && formik.errors.title ? (
          <p className="text-red-400">{formik.errors.title}</p>
        ) : (
          ""
        )}
            </form>
      
    )
}

const mapStateToProps = state => ({
    task : state.task
})

export default connect(mapStateToProps , {addTask})(Search)
// export default Search