import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
     <div className="container"></div>
     <form action=""onSubmit={handleSubmit(onSubmit)}>
     <input placeholder='username'{...register("username" ,{ required: true ,minLength:3,maxLength:8 })} type="text" />
     {errors.username && <div className='red'>There is some error in username</div>}
     <br />
     <input placeholder='password' {...register("password" )}type="password"/>
     <br/>
     <input type="submit" value= "Submit" id=""/> 
     </form>   
    </>
  )
}
//9:15

export default App 
