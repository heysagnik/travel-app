import React, { useEffect, useState } from "react";
import { AvatarGenerator } from "random-avatar-generator";
import { Link } from "react-router-dom";
import { UserPlus } from "iconoir-react";
import axios from "axios";

const UserCard = ({ userName, name }) => {
  const generator = new AvatarGenerator();
  return (
    <div className="flex justify-between mb-2 w-[200px] px-2 hover:bg-slate-100 rounded-lg">
      <div className="flex items-center">
        <img
          src={generator.generateRandomAvatar()}
          className="w-8 h-8 rounded-full"
        />
      <div className="ml-4 text-xs">
          <p className="font-bold">{name}</p>
          <p className="text-gray-500">@{userName}</p>
      </div>
      </div>
      <div className="">
      <Link to="/profile" className="text-orange-500 p-1">
        <UserPlus />
      </Link>
      </div>
    </div>
  );
};

const NewUsersCard = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get("http://localhost:3000/api/users");
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="px-2 py-6 mb-4 flex flex-col ">
      <div className="mb-4 space-y-4">
        <header className="text-center text-lg  text-gray-600">
          Make <i>new</i> mates
        </header>
      </div>
      <div className="flex flex-col items-start">
      {users.map((user) => (
        <UserCard userName={user.username} name={user.name} key={user._id} />
      ))}
    </div>
    </div>
  );
};

export default NewUsersCard;
