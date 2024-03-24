import  { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import { useSelectedConversationContext } from '../context/SelectedConversationContext';
import notificationSound from "../assets/sound/notification.mp3"
const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages, setMessages} = useSelectedConversationContext();


    useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			const sound = new Audio(notificationSound);
			sound.play();
			setMessages([...messages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
};

export default useListenMessages