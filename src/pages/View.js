import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { userEndpoints } from '../services/apis';
import { apiConnector } from '../services/apiconnector';

const View = () => {

  // Fetch data
 const {userId}=useParams();
 const [getUser,setGetUser]=useState(null);

  useEffect(() => {
    (async () => {
     const toastId = toast.loading("Loading...");
     try {
       const res = await apiConnector("GET", `${userEndpoints.GET_SINGLE_USER_API_ID}/${userId}`);
       setGetUser(res?.data?.data)
     } catch (error) {
       console.log("Could not fetch Categories.", error)
     }
     toast.dismiss(toastId);

   })()
 }, [])



if(getUser==null) return (<div className='animate-pulse text-richblack-5'>Loading......</div>)

const {id,name,email,phone,address,deliveryNo}=getUser;

  return (
    <div className='w-[50%] bg-richblack-900 m-auto mt-5 p-4 shadow-[10px_-5px_35px_-5px] shadow-blue-200 rounded-md'>

       <div className='flex flex-row justify-start  '>
           <Link to={`/`}>
             <button className='bg-pink-200 mr-32 m-4 p-2 text-lg font-bold  rounded-lg'> {"<< Back"} </button>
           </Link>
           <div className=' font-bold text-2xl text-richblack-25 flex flex-row justify-center mb-5 '> Single UserDetails</div>
        </div>
     

      {/* details fill */}
      <div className='bg-richblack-25'>
        <div className='text-2xl font-bold m-2 p-2'>1. Id: {id}</div>
        <div className='text-2xl font-bold m-2 p-2'>2. Name:  {name}</div>
        <div className='text-2xl font-bold m-2 p-2'>3. Email:  {email}</div>
        <div className='text-2xl font-bold m-2 p-2'>4. Phone:  {phone}</div>
        <div className='text-2xl font-bold m-2 p-2'>5. Address:  {address}</div>
        <div className='text-2xl font-bold m-2 p-2'>6. DeliveryNo:  {deliveryNo}</div>
      </div>
      

    </div>
  )

  
}

export default View