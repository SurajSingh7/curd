import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import { apiConnector } from '../services/apiconnector';
import toast from 'react-hot-toast';
import { userEndpoints } from '../services/apis';
import {  deleteUser } from '../services/oprations/UserDetails';


const Home = () => {

    // Fetch data
    const [getAllUser,setGetAllUser]=useState(null);

    useEffect(() => {
      (async () => {
        const toastId = toast.loading("Loading...");
        try {
          const res = await apiConnector("GET", userEndpoints.GET_ALL_USER_API);
          setGetAllUser(res?.data?.data)
        } catch (error) {
          console.log("Could not fetch Categories.", error)
        }
        toast.dismiss(toastId);

      })()
    }, [])


  function deleteHandler(id){

    // backend api function
     deleteUser(id);

     var userLists=getAllUser.filter((user)=>{
            return user._id!==id
          })

     //  for ui update 
     setGetAllUser(userLists); 
  }

   if(getAllUser==null) return (<div> Loading......</div>)


  return (
    <div>

        <div className='flex flex-row justify-end  '>
           <Link to={`/add`}>
             <button className='bg-caribbeangreen-200 mr-32 m-6 p-2 text-lg font-bold  rounded-lg'>Add Data</button>
           </Link>
        </div>

        <div className=' flex flex-row justify-end mr-32'>

             

              <table className='border-2 w-[70%] bg-richblack-5 mr-32 '>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Action1</th>
                    <th>Action2</th>
                    <th>Action3</th>
                    
                </tr>
                

                   {
                    getAllUser.map((data)=>{

                        return(<tr key={data._id} >
                            <td key={data._id}>{data.id}</td>
                            <td  key={data._id}>{data.name}</td>
                            <td  key={data._id}>{data.email}</td>
                            <td  key={data._id}>{data.mobile}</td>

                            <td  key={data._id} > 
                              <Link to={`/view/${data._id}`}>
                                <button className='bg-caribbeangreen-200 rounded-md  p-[6px] font-bold'> View</button>  
                              </Link>   
                            </td>

                            <td  key={data._id} >
                              <Link to={`/edit/${data._id}`}>
                              <button className='bg-brown-25 rounded-md  p-[6px] font-bold'> edit</button>  
                              </Link>    
                            </td>

                            <td  key={data._id} > 
                              <button onClick={()=>{deleteHandler(data._id)}}  className='bg-pink-200 rounded-md  p-[6px] font-bold'> delete</button>     
                            </td>

                           
                            </tr>
                         )



                    })

                   }
            </table>
            
        </div>
        
    </div>
  )
}

export default Home