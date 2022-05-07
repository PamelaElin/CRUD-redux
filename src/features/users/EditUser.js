import React from 'react';
import Button from '../../components/Buttons/Button';
import TextField from '../../components/TextField/TextField';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../redux/userSlice';


const EditUser = () => {
  const navigate=useNavigate();
  const params=useParams();
  const users=useSelector(store=>store.users);
  const existingUser=users.filter(user=>user.id===params.id);
  const {name,email}=existingUser[0];
const dispatch=useDispatch();
  
  const [values,setValues]=useState({
      name,
      email,
  });
  const handleEditUser=()=>{
      setValues({name:'',email:''});
      dispatch(editUser({
        id:params.id,
        name:values.name,
        email:values.email,
      }))
  navigate('/')}
return (
  <div className='mt-10 max-w-xl mx-auto'>
      <TextField 
      value={values.name}
      onChange={(e)=>setValues({...values,name:e.target.value})}
      label={'Name'}
      inputProps={{type:'text', placeholder:'Jhon Doe'}}/> 
         <TextField 
          value={values.email}
          onChange={(e)=>setValues({...values,email:e.target.value})}
      label={'Email'}
      inputProps={{type:'email', placeholder:'jhondoe@email.com'}}/> 
      <Button onClick={handleEditUser}>Edit</Button>
  </div>
 
  )
}

export default EditUser