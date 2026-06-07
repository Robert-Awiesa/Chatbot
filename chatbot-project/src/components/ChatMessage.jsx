import userProfileImage from '../assets/user.png'
import robotProfileImage from '../assets/user.png'
import './ChatMessage.css'


function ChatMessage({ message, sender }) {
        //const message = props.message;
        //const sender = props.sender;
        //const {message, sender} = props;

        /*if(sender === 'robot'){
        return(
          <div>
            
            {message}
          </div>
      )
      }
      */

        return (
          //position of messages
          //adding a ternary operator class to target bot user and robot classes
          <div
            className={
              sender === "user" ? "chat-message-user" : "chat-message-robot"
            }
          >
            {sender === "robot" && (
              <img src={robotProfileImage} className="chat-message-profile" />
            )}
            <div className="chat-messages-text">{message}</div>

            {sender === "user" && (
              <img src={userProfileImage} className="chat-message-profile" />
            )}
          </div>
        );
      }
      export default ChatMessage;