import { useState } from 'react';
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';

import './App.css'



      


      function App() {
        //Lifting states for every component to be abe to access chatmessages when needed.
        const [chatMessages, setChatMessages] = useState([]);
        //array destructuring
        //const [chatmessages, setChatMessages] = array;
        //const chatMessages = array[0];
        //const setChatMessages = array[1]
        return (
          <div className="app-container">
            <ChatMessages
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }
export default App
