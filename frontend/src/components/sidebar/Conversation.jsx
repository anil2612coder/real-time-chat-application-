import { useSelectedConversationContext } from "../../context/SelectedConversationContext";

const Conversation = ({ conversation, emoji, lastIdx }) => {
  let { selectedConversation, setSelectedConversation } =
    useSelectedConversationContext();
  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-blue-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-10 bg-gray-400 rounded-full">
            <img
              src={
                conversation.gender === "male" ? "/man.png" : "/girlProfile.png"
              }
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider bg-gray-300  my-1 py-0 h-[.5px]" />}
    </>
  );
};
export default Conversation;
