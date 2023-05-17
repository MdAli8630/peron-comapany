import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom';
import {  ToastContainer,toast } from 'react-toastify';
import axios from 'axios'
import "./Navbar.css"
//import "./AddEdit.css"



function EditFields() {

    const [state, setState] = useState({
        name: "",
        mobile: "",
        address: ""

    })
    const { name, mobile, address } = state

    const navigate = useNavigate();
    const { id } = useParams()

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setState({ ...state, [e.target.name]: e.target.value })



    }
    useEffect(()=>{
        loadUser(id)
    },[])

const handleSubmit =async (e)=>{
    e.preventDefault()
   const response =  await axios.put(`http://localhost:8000/person/${id}`,state)
   console.log(">>>>>response>>>>>>>",response)
        navigate("/homeperson")
        if(response.status===200){
            toast.success(response.message)
        }
       
        //console.log(response)

}


const loadUser =async (id) =>{
    const result = await axios.get(`http://localhost:8000/person/${id}`)
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",result)
    setState(result.data)
}





    return (
        <>
            <div  className="main_edit">
            
                    <form>
                    
                    <div className='nam common_list'>
                        <label className='form-label'> Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter Name..."
                            onChange={e => handleInputChange(e)}
                            value={name}
                        />
                    </div>
                    <div  className='mob common_list'>
                        <label className='form-label'>Mobile</label>
                        <input
                            type="number"
                            id="mobile"
                            name="mobile"
                            placeholder="Enter Mobile..."
                            onChange={e => handleInputChange(e)}
                            value={mobile}
                        />
                    </div>
                    <div className='add common_list'>
                        <label className='form-label'>Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Enter address..."
                            onChange={e => handleInputChange(e)}
                            value={address}
                        />
                    </div>



                    {/* <input type="submit" value={"update"} /> */}
                    {/* <input style={{ width: "50%", background: "orange", color: "white", padding: "5px", margin: "6px" }}
                        type="submit"
                        value={id ? "Update" : "Add "}
                      
                        /> */}

                    <div>              
                           <Link to="/homeperson">
                                <button type="submit" className='btn btn-primary' onClick={e=>handleSubmit(e)}>Update </button>

                         </Link>
                               
                            </div>

                </form>

            </div>
        </>
    )
}
export default EditFields;