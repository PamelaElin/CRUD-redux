import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import { deleteUser } from "../../redux/userSlice";
export const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  };
  const renderCard = () => users.map((user) => (
      <div
        key={user.id}
        className=" p-5 flex items-center justify-between"
      >
        <div className="w-96">
          <h3 className="font-bold text-lg text-purple-900 text-center">{user.name}</h3>
          <span className="font-normal text-black flex justify-center">{user.email}</span>
        </div>

        <div className="flex gap-4 ">
          <Link to={`edit-user/${user.id}`}>
            <button>
              <AiOutlineEdit />
            </button>
          </Link>
          <button onClick={() => handleRemoveUser(user.id)}>
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    ));

  return (
    <div>
      <Link to="/add-user">
        <Button>Add User</Button>
      </Link>

      
        <div className="bg-gradient-to-r md:grid md:grid-cols-2 gap-2  from-fuchsia-500 to-rose-100  "> 
        {users.length ? (
          renderCard()
        ) : (
          <p className="  font-semibold text-center col-span-2 text-gray-700 ">
            No user
          </p>
        )}</div>
       
      
    </div>
  );
};
