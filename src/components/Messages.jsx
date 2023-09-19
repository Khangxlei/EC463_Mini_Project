// Import necessary components
import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

// Message components 
const Messages = () => {
  const [messages, setMessages] = useState([]); // State for storing messages
  const { data } = useContext(ChatContext); // Accessing data from ChatContext

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages); // Updates messages when data changes
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log(messages) // Log messages to console 

  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;





