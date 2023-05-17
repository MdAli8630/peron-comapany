import React, { useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
 import { useNavigate} from "react-router-dom"
 import axios from 'axios'
 import "./Navbar.css"



function CompanyAdd() {
    const navigate = useNavigate();
    const [inputField, setInputField] = useState({
        name: "",
        email: "",
        address:""
    })

  

    const [errField, setErrField] = useState({
        nameErr: "",
        emailErr: "",
        addressErr:""
    })

    const inputHandler = (e) => {
        setInputField({ ...inputField, [e.target.name]: e.target.value  })
    }

   


    const submitButton = (e) => {
        const {name,email,password} = inputField;
        console.log('inputField',inputField)
        e.preventDefault()
    
        if (validForm()) {
               let url = 'http://localhost:8000/company'

                     axios.post(url,inputField)
                    navigate("/home")
                      
        } else {
            console.log('invalid')
        }
        setInputField("")
    }

    const validForm = () => {
        let formIsValid = true
        const validEmailRegex = RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        setErrField({
            nameErr: "",
            emailErr: "",
             addressErr:""
        })
        if (inputField.name === '') {
            formIsValid = false
            setErrField(prevState => ({
                ...prevState, nameErr: "** Please Enter Name"
            }))
        }
        if (inputField.email === '') {
            formIsValid = false
            setErrField(prevState => ({
                ...prevState, emailErr: "** Please Enter Email"
            }))
        }
        if (inputField.email != '' && !validEmailRegex.test(inputField.email )) {
            formIsValid = false
            setErrField(prevState => ({
                ...prevState, emailErr: "** Please Enter valid Email"
            }))
        }

        if (inputField.address === '') {
            formIsValid = false
            setErrField(prevState => ({
                ...prevState, addressErr: "** Please Enter Address"
            }))
        }
       
        return formIsValid
    }

    



    return (
        <>
            <div className='container'>
                <div className='row login'>
                    <h3 className='heading' style={{ marginTop: "20px" }}>Company</h3><br />
                    <div className='col-md-2'>
                    </div>
                    <div className='main'>
                       
                        <form autoComplete='off' action="/login-user" method='post'>
                            <div className='name input-box'>
                                <label className='form-label'> Name</label>
                                <input type="text" className="form-control" name='name' value={inputField.name} onChange={inputHandler} />
                                {
                                    errField.nameErr.length > 0 && <span className='error'>{errField.nameErr}</span>
                                }
                            </div>
                            <div className='email input-box'>
                                <label className='form-label'>Email</label>
                                <input type="email" className="form-control" name='email' autoComplete='off' value={inputField.email} onChange={inputHandler} />
                                {
                                    errField.emailErr.length > 0 && <span className='error'>{errField.emailErr}</span>
                                }
                            </div>
                            <div className='email input-box'>
                                <label className='form-label'>Address</label>
                                <input type="text" className="form-control" name='address' autoComplete='off' value={inputField.address} onChange={inputHandler} />
                                {
                                    errField.addressErr.length > 0 && <span className='error'>{errField.addressErr}</span>
                                }
                            </div>
                            <div>
                                <button type="submit" className='btn btn-primary' onClick={submitButton}>Add </button>&nbsp;
                               
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </>
    )
}
export default CompanyAdd;