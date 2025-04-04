import React from "react";
import { useChatState } from "../../Context/ChatProvider";

const ChatInputBody = () => {
  const { selectedChat } = useChatState();

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="bg-blue-500 text-white p-4 rounded-t-md">
        <h2 className="text-lg font-bold">
          {selectedChat
            ? selectedChat.isGroupChat
              ? selectedChat.chatName // Group chat name
              : selectedChat.users[0].name // Individual chat name
            : "Select a Chat"}
        </h2>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 bg-gray-100 p-4 overflow-y-auto">
        {selectedChat ? (
          <p>
            Messages for {selectedChat.chatName || selectedChat.users[0].name}
          </p>
        ) : (
          <p className="text-gray-500">No chat selected</p>
        )}
      </div>

      {/* Chat Input */}
      <div className="bg-white p-4 rounded-b-md">
        {selectedChat && (
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}
      </div>
    </div>
  );
};

export default ChatInputBody;
