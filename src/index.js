// Import necessary components
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js' // Main app file
import { AuthContextProvider } from './context/AuthContext.js';
import { ChatContextProvider } from './context/ChatContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<AuthContextProvider>
  <ChatContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChatContextProvider>
</AuthContextProvider>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
