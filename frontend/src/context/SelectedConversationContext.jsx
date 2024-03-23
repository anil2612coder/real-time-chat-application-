import { createContext, useContext, useState } from "react";

export const SelectedConversationContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSelectedConversationContext = () => {
  return useContext(SelectedConversationContext);
};

export const SelectedConversationContextProvider = ({ children }) => {
  let [selectedConversation, setSelectedConversation] = useState(null);
  let [messages, setMessages] = useState([]);

  return (
    <SelectedConversationContext.Provider
      value={{
        selectedConversation,
        setSelectedConversation,
        messages,
        setMessages,
      }}
    >
      {children}
    </SelectedConversationContext.Provider>
  );
};
