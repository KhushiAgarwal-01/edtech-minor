import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import OAuth from '../components/OAuth';

export default function SignUp() {

    const[formData,setformData]=useState({});
    const[error,setError]=useState(null);
    const[loading,setLoading]=useState(false);
    const navigate =useNavigate();

    const handelChange=(e)=>{
        setformData({
            ...formData,
            [e.target.id]:e.target.value
        })
    }

    const handelSubmit=async(e)=>{
        e.preventDefault();
        try{
            setLoading(true);
        const res=await fetch('/api/auth/signup',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(formData),
        })
        const data=await res.json();
        console.log(data);
        if(data.success===false){
            setLoading(false);
            setError(data.message);
            return;
        }
        setLoading(false);
        setError(null);
        navigate('/sign-in')

    }
    catch(error){
        setLoading(false);
        setError(error.message);
    }
}
    

  return (
    <div className='p-3 max-w-lg mx-auto'>
     <h1 className='text-3xl text-center font-bold my-7'>Sign Up</h1>

     <form onSubmit={handelSubmit} className='flex flex-col gap-4'>
       
<input type="text" placeholder="username" 
className='border p-3 rounded-lg'
id='username'onChange={handelChange}/>

 <input type="email" placeholder="email" 
className='border p-3 rounded-lg'
id='email'onChange={handelChange}/>

<input type="password" placeholder="password" 
className='border p-3 rounded-lg'
id='password'onChange={handelChange}/> 

<button  
disabled={loading}
className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-55'>
    {loading?'loading...':'Sign Up'}</button>  
    {/* <OAuth />      */}
</form>

<div  className='flex gap-2 mt-3'>
<p>Already have an Account?</p>
<Link to={'/sign-in'}>
<span className='text-blue-500 '>Sign in</span>
</Link>
</div>
{error && <p className='text-red-500 mt-5'>{error}</p>}
    
    </div>
  )
}


