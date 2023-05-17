import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import "./Navbar.css"
//import "./home.css"

function Home(){
    const [data, setData] = useState([])

 
    useEffect(()=>{
        loadUser()
    },[])

           const loadUser=async ()=>{
               const result = await axios.get("http://localhost:8000/company")
               if(result.status === 200){
                   setData(result.data)
               }
           }
         

           const onDeleteUser=async (id) =>{
               alert(id);
               if(window.confirm("Are you sure that you want to delete user Record")){
                   const response = await axios.delete(`http://localhost:8000/company/${id}`)
                   if(response.status===200){
                       toast.success(response.data)
                       loadUser();
                   }
               }
           }

    return(
        <>
             <div style={{marginTop:"150px"}}>
                
                 <div className='row'>
                 <ToastContainer/>
                 <table className='style-table'>
                     <thead>
                         <tr>
                             <th >No</th>
                             <th >Name</th>
                             <th>Email</th>
                             <th >Address</th>
                             <th >Action</th>
                         </tr>
                     </thead>
                     <tbody>
                         {data && data.map((item,index)=>{
                           
                             return(
                                 <tr key={index}>
                                     <th scope='row'>{index+1}</th>
                                     
                                     <td>{item.name}</td>
                                      <td>{item.email}</td> 
                                     <td>{item.address}</td>
                                     
                                     <td>
                                         <Link to={`/update/${item._id}`}>
                                             <button className='btn btn-edit btn-outline-primary m-2'>Edit</button>
                                         </Link>
                                         <button className='btn btn-delete btn-danger m-2'  onClick={()=>onDeleteUser(item._id)}>Delete</button>
                                         <Link to={`/homeperson`}>
                                             <button className='btn btn-edit btn-outline-primary m-2'>View</button>
                                         </Link>
                                     </td>

                                 </tr>
                             )
                         })}
                     </tbody>

                 </table>


                 </div>
             </div>
        </>
    )
} 
export default Home;