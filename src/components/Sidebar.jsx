// Import necessary components 
import React from "react";
import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"

// Sidebar component
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar/>
      <Search/>
      <Chats/>
    </div>

  )
}

export default Sidebar
