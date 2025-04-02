import React from "react";
import { useChatState } from "../../Context/ChatProvider";

const ProfileModel = ({ isOpen, onClose }) => {
  const { user } = useChatState();

  if (!isOpen) return null;
  return (
    <div className="fixed insert-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-md p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-sans text-blue-500">Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            x
          </button>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={user?.pic}
            alt={user?.name}
            className="w-32 h-32 rounded-md mb-4"
          />
          <h3 className="text-md font-sans"> {user?.name} </h3>
          <p className="text-gray-300 "> {user?.email} </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileModel;
