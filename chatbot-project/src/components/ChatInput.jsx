import { useState } from "react";
import { Chatbot } from "supersimpledev";
import './ChatInput.css'

function ChatInput({ chatMessages, setChatMessages }) {
        const [inputText, setInputText] = useState("");

        function saveInputText(event) {
          setInputText(event.target.value);
        }

        async function sendMessage() {
          if (!inputText.trim()) {
            return;
          }
          //User message
          const newMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender: "user",
              id: crypto.randomUUID(),
            },
          ];
          setInputText("");

          // while async await is fetching the message online this shows a loading message
          setChatMessages([
            ...newMessages,
            {
              message: "Loading...........",
              sender: "robot",
              id: "Loading....",
            },
          ]);

          //After the response arrives, the loading message is replaced by the robots response
          const response = await Chatbot.getResponseAsync(inputText);
          setChatMessages([
            ...newMessages,
            {
              message: response,
              sender: "robot",
              id: crypto.randomUUID(),
            },
          ]);
        }
        // An event lister for enter key to send message.
        function keyPress(event) {
          const key = event.key;
          if (key === "Enter") {
            sendMessage();
          } else if (key === "Escape") {
            setInputText("");
          }
        }
        return (
          <div className="chat-input-container">
            <input
              className="chat-input"
              placeholder="Send a message to chatbot"
              size="30"
              onChange={saveInputText}
              value={inputText}
              onKeyDown={keyPress}
            />
            <button className="send-button" onClick={sendMessage}>
              Send
            </button>
          </div>
        );
      }
      export default ChatInput;