
import React from 'react'

import {useFormik} from "formik"

import * as Yup from 'yup'//validation library to validate inputs


const Form = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            address: "",
            password: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().max(30, "Must be more than 10 chracter").required("REQUIRED"),
            email: Yup.string().email().max(30, "Must be less than 30 chracter").required("REQUIRED"),
            phone: Yup.string().max(10, "Must be 10 chracter").min(10, "Must be 10 chracter").required("REQUIRED"),
            password: Yup.string().min(6, "Must be more  than 6 chracter").required("REQUIRED"),
            address: Yup.string().required("compulsory")

        }),

        onSubmit: (values) => {
            console.log(values)
        },
    })
    //console.log(formik.touched)


    const myCss = {
        width: "50%", 
        height: "auto"
    }
    return (
            <div className='container' style={myCss}>
                <form onSubmit={formik.handleSubmit} className="border border-secondary" >
                    <div className="mb-3" >
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        
                        <input type="name" className="form-control" id="nameInputEmail1" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
                        <span className="text-danger">
                                        {
                                            formik.touched.name && formik.errors.name?<p>{formik.errors.name}</p>:null
                                        }
                                    </span>
                    </div>
                    <div className="mb-3" >
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email"   onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                        <span className="text-danger">
                                        {
                                            formik.touched.email && formik.errors.email?<p>{formik.errors.email}</p>:null
                                        }
                                    </span>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password"   onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                        <span className="text-danger">
                                        {
                                            formik.touched.password && formik.errors.password?<p>{formik.errors.password}</p>:null
                                        }
                                    </span>
                    </div>
                    <div className="mb-3" >
                        <label htmlFor="phoneno" className="form-label">Phone</label>
                        <input type="number" className="form-control" id="phoneInput" name="phone"   onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur} />
                        <span className="text-danger">
                                        {
                                            formik.touched.phone && formik.errors.phone?<p>{formik.errors.phone}</p>:null
                                        }
                                    </span>
                    </div>
                    
                    <div className="mb-3" >
                        <label htmlFor="exampleInputadd" className="form-label">Address</label>
                        <input type="name" className="form-control" id="nameInputadd" name="address"   onChange={formik.handleChange} value={formik.values.address} onBlur={formik.handleBlur} />
                        <span className="text-danger">
                                        {
                                            formik.touched.address && formik.errors.address?<p>{formik.errors.address}</p>:null
                                        }
                                    </span>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
    )
}

export default Form