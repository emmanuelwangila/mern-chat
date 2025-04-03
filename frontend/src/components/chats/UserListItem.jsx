import React from "react";

const UserListItem = ({ handleChats, user }) => {
  return (
    <div>
      <div className="m-2 mr-8  flex-col  justify-start  p-2 bg-green-200 rounded-md ">
        <img src={user.pic} className="w-5 h-3 rounded-md bg-white" />
        <div className="flex flex-col ">
          <span className="text-sm font-sans text-yellow-500">
            {user.name}{" "}
          </span>
          <span className="text-sm font-sans text-blue-500">{user.email} </span>
        </div>
        <button
          onClick={handleChats}
          className="text-sm font-sans rounded-md  text-white bg-blue-500"
        >
          {" "}
          Open Chat
        </button>
      </div>
    </div>
  );
};

export default UserListItem;
