import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  
  const { register, handleSubmit, setError, formState: { errors ,isSubmitting } } = useForm();
  const delay = (d)=>{ // to generate delay
    return new Promise((resolve , reject)=>{
      setTimeout(()=>{
        resolve()  //simulating network delay
      },d*1000) 
    })
  }
  const onSubmit = async(data) => {
    //await delay(2);
    let r = await fetch("http://localhost:3000/",{
      method :"POST" ,
      headers :{
        "Content-Type" :"application/json"
      },
      body : JSON.stringify(data)
    })
    let res = await r.text();
    console.log(data,res);
    // if(data.username!== "amrit"){
    //   setError("myform"  ,{ message:"Credentials are invalid"})
    // }
    //  if(data.username == "rohan"){
    //   setError("blocked" ,{message: "Sorry this user is Blocked"})
    // }
  }
  return (
    <>
    {isSubmitting && <div>Loading...</div> }
     <div className="container"></div>
     <form action=""onSubmit={handleSubmit(onSubmit)}>
     <input placeholder='username'{...register("username" ,{ required: {value:true ,message:"This is required"} ,minLength:{value:3 ,message:"Min length is 3"},maxLength:{value: 8 ,message:"Max length is 8"} })} type="text" />
     {errors.username && <div className='red'>{errors.username.message}</div>}
     <br />
     <input placeholder='password' {...register("password" ,{minLength:{value:7 ,message:"Min length of password is 7"}} )}type="password"/>
     <br/>
     {errors.password && <div className='red'>{errors.password.message}</div>}
     <input disabled={isSubmitting} type="submit" value= "Submit" id=""/> 
     {errors.myform && <div className='red'>{errors.myform.message}</div>}
     {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
     </form>   
    </>
  )
}
//9:15

export default App 
