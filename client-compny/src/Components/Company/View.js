import React,{useState,useEffect} from "react"
import {useParams,Link} from "react-router-dom"
import axios from 'axios'
function View(){
    const [user,setUser] = useState(null)
    const {id} = useParams()


    useEffect(()=>{
        loadUser(id)
    },[])

    const loadUser =async (id) =>{
        const result = await axios.get(`http://localhost:8000/person/${id}`)
        console.log(result)
        setState(result.data)
    }
    

    return(
        <>

        </>
    )
}
export default View