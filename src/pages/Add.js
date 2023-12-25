import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUser } from '../services/oprations/UserDetails'

const Add = () => {

  const navigate = useNavigate();
  const back="<< Back"

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    address:"",
    deliveryNo: "",
  })


  const { id, name, email, phone, address,deliveryNo } = formData;

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault()

    const apiCall=createUser( id, name, email, phone, address,deliveryNo);
     apiCall(navigate);

    // Reset
    setFormData({
      id: "",
      name: "",
      email: "",
      phone: "",
      address:"",
      deliveryNo: "",
    })

  }



  return (
    <div className='w-[50%] bg-richblack-900 m-auto mt-5 p-4 shadow-[10px_-5px_35px_-5px] shadow-blue-200 rounded-md'>

       <div className='flex flex-row justify-start  '>
           <Link to={`/`}>
             <button className='bg-pink-200 mr-32 m-4 p-2 text-lg font-bold  rounded-lg'> {back} </button>
           </Link>
           <div className=' font-bold text-2xl text-richblack-25 flex flex-row justify-center mb-5 '> Add UserDetails</div>
        </div>
     

      {/* Form */}
      <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
        <div className="flex gap-x-4">

          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              id <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="id"
              value={id}
              onChange={handleOnChange}
              placeholder="Enter id"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>


          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="name"
              value={name}
              onChange={handleOnChange}
              placeholder="Enter name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>

        </div>

        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
           email <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </label>

         <div className="flex gap-x-4">

          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              phone <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="phone"
              value={phone}
              onChange={handleOnChange}
              placeholder="Enter id"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>


          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              address <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="address"
              value={address}
              onChange={handleOnChange}
              placeholder="Enter name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>

          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            deliveryNo <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="deliveryNo"
              value={deliveryNo}
              onChange={handleOnChange}
              placeholder="Enter name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>

        </div>

        <button type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-bold text-richblack-900 m-auto" 
        >
          Create Account
        </button>

       
      </form>

    </div>
  )




  
}

export default Add