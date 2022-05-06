import {AiOutlineEdit,AiOutlineDelete} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/Buttons/Button';
import { deleteUser } from './userSlice';


export  const UserList = () => {
    const dispatch=useDispatch();
    const users=useSelector(store=>store.users);
  const handleRemoveUser=(id)=>{
dispatch(deleteUser({id}))}
    const renderCard=()=>users.map(user=>(
    <div key={user.id} className="bg-gray-300 p-5 flex items-center justify-between">
        <div>
            <h3 className="font-bold text-lg text-gray-700">{user.name}</h3>
            <span className="font-normal text-gray-600">{user.email}</span>
        </div>
        <div className='flex gap-4'>
            <Link to={`edit-user/${user.id}`}>  <button><AiOutlineEdit/></button></Link>
         <button onClick={()=>handleRemoveUser(user.id)}><AiOutlineDelete/></button>
            

        </div>
    </div>))
  return (<div>
      <Link to='/add-user'><Button>Add User</Button></Link>
      
     <div className="grid gap-5 md:grid-cols-2">
        {users.length ? renderCard() :<p className="text-center col-span-1text-gray-700 font-semibold">No user</p>}
    </div> 
  </div>
    
  )
}
