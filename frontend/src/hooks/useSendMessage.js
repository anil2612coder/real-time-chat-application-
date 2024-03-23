import { useState } from "react"
import { useSelectedConversationContext } from "../context/SelectedConversationContext"
import toast from "react-hot-toast"


const useSendMessage = () => {
  const [loading,setLoading] = useState(false)
  const {messages, setMessages,selectedConversation} = useSelectedConversationContext()

  const sendMessage = async (message)=>{
    setLoading(true)
    try {
        let res= await fetch(`/api/message/send/${selectedConversation._id}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({message})

        })
        let data =await res.json()
        if(data.error) throw new Error(data.error)
        setMessages([...messages,data])
        
    } catch (error) {
        toast.error(error.message)
    } finally {
        setLoading(false)
    }
  }
  return {loading,sendMessage}
}

export default useSendMessage