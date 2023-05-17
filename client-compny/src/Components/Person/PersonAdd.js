import React, { useState } from 'react'
 import { ToastContainer, toast } from 'react-toastify';
 import { useNavigate} from "react-router-dom"
 import axios from 'axios'
 import "./Navbar.css"



function CompanyAdd() {
    const navigate = useNavigate();
    const [inputField, setInputField] = useState({
        name: "",
        mobile: "",
        address:""
    })

  

    const [errField, setErrField] = useState({
        nameErr: "",
        mobileErr: "",
        addressErr:""
    })

    const inputHandler = (e) => {
        setInputField({ ...inputField, [e.target.name]: e.target.value })
    }

   


    const submitButton = (e) => {
        const {name,number,password} = inputField;
        console.log('inputField',inputField)
        e.preventDefault()
    
        if (validForm()) {
               let url = 'http://localhost:8000/person'

            const response = axios.post(url,inputField)
                    navigate("/homeperson")
                    if(response.status===200){
                        toast.success(response.message)
                        
                    }
                      
        } else {
            console.log('invalid')
        }
        setInputField("")
    }

    const validForm = () => {
        let formIsValid = true
       
        setErrField({
            nameErr: "",
            mobileErr: "",
             addressErr:""
        })
        if (inputField.name === '') {
            formIsValid = false
            setErrField(prevState => ({
                ...prevState, nameErr: "** Please Enter Name"
            }))
        }
        if (inputField.number === '') {
            formIsValid = false
            setErrField(prevState => ({
                ...prevState, mobileErr: "** Please Enter Mobile Number"
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
                <ToastContainer/>
                    <h3 className='heading' style={{ marginTop: "20px" }}>Person</h3><br />
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
                                <label className='form-label'>Mobile</label>
                                <input type="number" className="form-control" name='mobile'  value={inputField.mobile} onChange={inputHandler} />
                                {
                                    errField.mobileErr.length > 0 && <span className='error'>{errField.mobileErr}</span>
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