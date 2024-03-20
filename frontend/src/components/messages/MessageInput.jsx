import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className="px-4 my-3 relative">
      <div className="w-full">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
        />
        <button type="submit" className="absolute right-8 top-4">
          <BsSend className="text-white" />
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
