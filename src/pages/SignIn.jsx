import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import {useDispatch,useSelector} from 'react-redux';
// import { signinFaliure,signinStart,signinSuccess } from '../redux/user/userSlice';
// import OAuth from '../components/OAuth';




export default function SignIn() {

    const[formData,setformData]=useState({});
    // const[error,setError]=useState(null);
    // const[loading,setLoading]=useState(false);

    // const{loading,error} = useSelector((state)=>state.user)
    const navigate =useNavigate();
    // const dispatch=useDispatch();

    const handelChange=(e)=>{
        setformData({
            ...formData,
            [e.target.id]:e.target.value
        })
    }

    const handelSubmit=async(e)=>{
        e.preventDefault();
        try{
        //    dispatch(signinStart())
        const res=await fetch('/api/auth/signin',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(formData),
        })
        const data=await res.json();
        console.log(data);
        if(data.success===false){
            // dispatch(signinFaliure(data.message))
            return;
        }
    //    dispatch(signinSuccess(data))
        navigate('/')

    }
    catch(error){
        // dispatch(signinFaliure(error.message))

    }
}
    

  return (
    <div className='p-3 max-w-lg mx-auto'>
     <h1 className='text-3xl text-center font-bold my-7'>Sign In</h1>
     <form onSubmit={handelSubmit} className='flex flex-col gap-4'>
       

         <input type="email" placeholder="email" 
        className='border p-3 rounded-lg'
        id='email'onChange={handelChange}/>

        <input type="password" placeholder="password" 
        className='border p-3 rounded-lg'
        id='password'onChange={handelChange}/> 

        <button  
        // disabled={loading}
        className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-55'>
            {/* {loading?'loading...':'Sign In'} */}
            SignIn
            </button> 
            {/* <OAuth />       */}
     </form>

     <div  className='flex gap-2 mt-3'>
        <p>Dont have an Account?</p>
        <Link to={'/sign-up'}>
        <span className='text-blue-500 '>Sign up</span>
        </Link>
     </div>
     {/* {error && <p className='text-red-500 mt-5'>{error}</p>} */}
    </div>
  )
}