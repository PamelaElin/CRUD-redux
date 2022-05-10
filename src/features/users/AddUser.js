import React from 'react';
import Button from '../../components/Buttons/Button';
import TextField from '../../components/TextField/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/userSlice';

const AddUser = () => {
  const dispatch=useDispatch();
    const navigate=useNavigate();
    const [values,setValues]=useState({
        name:'',
        email:'',
    });
 
    const handleAddUser=()=>{
        setValues({name:'',email:''});
        dispatch(addUser({
         
          id:uuidv4(),
          name:values.name,
          email:values.email,
         
        }) ); 
    navigate('/');
 
}
  return (
    <div className='mt-10  mx-auto   '>
      
        <TextField 
        
        value={values.name}
        onChange={(e)=>setValues({...values,name:e.target.value})}
        label={'Name'}
        inputProps={{type:'text', placeholder:'Name'}}/> 
           <TextField 
            value={values.email}
            onChange={(e)=>setValues({...values,email:e.target.value})}
        label={'Email'}
        inputProps={{type:'email', placeholder:'email@email.com'}}/> 
        
        <Button onClick={handleAddUser }>Submit</Button>
        
    </div>
   

  )
}

export default AddUser