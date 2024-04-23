import React, { useEffect, useState } from "react";
import Header from "./../Layout/Header";
import Footer from "../Layout/Footer";
import "../../css/Profile.css";
import { Link } from "react-router-dom";
import { socket } from "../../socket/Socket";

function Messages() {
  useEffect(() => {
    function onConnect() {
      console.log("connected");
    }

    function onDisconnect() {
      console.log("disconnected");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: "Sandeep Kumar",
      messages: [
        { text: "Hello Anita Chouhan,", isUser: false },
        { text: "I am representing Spring Edge...", isUser: false },
        // Add more messages here
      ],
    },
    {
      id: 2,
      name: "A Kumar",
      messages: [
        { text: "Hello Anita Chouhan,", isUser: false },
        { text: "I am representing ....", isUser: false },
        // Add more messages here
      ],
    },
    {
      id: 3,
      name: "B Kumar",
      messages: [
        { text: "Hello Anita Chouhan,", isUser: false },
        { text: "I am representing ....", isUser: false },
        // Add more messages here
      ],
    },
    {
      id: 4,
      name: "C Kumar",
      messages: [
        { text: "Hello Anita Chouhan,", isUser: false },
        { text: "I am representing ....", isUser: false },
        // Add more messages here
      ],
    },
    {
      id: 5,
      name: "D Kumar",
      messages: [
        { text: "Hello Anita Chouhan,", isUser: false },
        { text: "I am representing ....", isUser: false },
        // Add more messages here
      ],
    },
  ]);
  const [currentConversation, setCurrentConversation] = useState(1);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      const updatedConversations = conversations.map((conversation) => {
        if (conversation.id === currentConversation) {
          return {
            ...conversation,
            messages: [
              ...conversation.messages,
              { text: inputText, isUser: true },
            ],
          };
        }
        return conversation;
      });
      setConversations(updatedConversations);
      setInputText("");
    }
  };

  const currentConversationName = conversations.find(
    (conv) => conv.id === currentConversation
  )?.name;

  const lastMessage = conversations
    .find((conv) => conv.id === currentConversation)
    ?.messages.slice(-1)[0]?.text;

  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white p-t50 p-b20">
            <div className="container">
              <div className="row">
                <div className="col-lg-9">
                  <div className="row">
                    <div className="col-xl-4 col-lg-5 m-b30">
                      <div className="candidate-info company-info">
                        <div
                          className="candidate-detail "
                          style={{ padding: "15px 0px" }}>
                          <div className="candidate-title mt-0">
                            <div className="pl-3">
                              <h4>Messaging</h4>
                            </div>

                            <ul className="job-list-container">
                              {conversations.map((conversation) => (
                                <li key={conversation.id}>
                                  <Link
                                    to={"#"}
                                    className={`conversation-item ${
                                      conversation.id === currentConversation
                                        ? "active"
                                        : ""
                                    }`}
                                    onClick={() =>
                                      setCurrentConversation(conversation.id)
                                    }>
                                    <h6 className="mb-0">
                                      {" "}
                                      <i
                                        className="fa fa-user-o"
                                        aria-hidden="true"></i>{" "}
                                      {conversation.name}
                                    </h6>
                                    <p className="mb-0 ml-3">
                                      {" "}
                                      {conversation.messages.slice(-1)[0]?.text}
                                    </p>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-7 m-b30">
                      <div className="chatbox" style={{ paddingTop: "240px" }}>
                        <div>
                          <div className="chatbox-header">
                            <h5>{currentConversationName}</h5>
                          </div>
                          {conversations.map((conversation) => (
                            <div
                              key={conversation.id}
                              className={`chat ${
                                conversation.id === currentConversation
                                  ? "active"
                                  : ""
                              }`}>
                              {conversation.messages.map((message, index) => (
                                <div
                                  key={index}
                                  className={`message ${
                                    message.isUser
                                      ? "user-message"
                                      : "bot-message"
                                  }`}>
                                  {message.isUser ? (
                                    <div className="user-name">you</div>
                                  ) : (
                                    <div className="bot-name">
                                      {message.isUser
                                        ? currentConversationName
                                        : conversation.name}
                                    </div>
                                  )}
                                  <div className="message-text">
                                    {message.text}
                                  </div>
                                </div>
                              ))}
                              <div className="message-input">
                                <input
                                  type="text"
                                  value={inputText}
                                  onChange={(e) => setInputText(e.target.value)}
                                  placeholder="Type your message..."
                                />
                                <button
                                  onClick={handleSendMessage}
                                  className="site-button">
                                  Send
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="profile-summary">
                    <div className="p-content">
                      <div className="profile-card">
                        <img
                          src="/static/media/pic1.63e5cf4e.jpg"
                          alt="Profile"
                          className="cover-picture"
                          style={{ height: "100px" }}
                        />
                        <img
                          src="/static/media/pic1.63e5cf4e.jpg"
                          alt="Profile"
                          className="profile-picture"
                          style={{
                            height: "100px",
                            width: "100px",
                            marginTop: "-45px",
                            borderRadius: "10px",
                          }}
                        />
                      </div>
                      <div style={{ padding: "10px 30px" }}>
                        <h6 className="mb-0">State Bank of India</h6>

                        <p>
                          LinkedIn Member, grow your career by following State
                          Bank of India
                        </p>
                        <p
                          className="mb-0"
                          style={{
                            color: "#1c2957",
                            fontSize: "13px",
                            lineHeight: "20px",
                          }}>
                          Keep up with interesting, relevant update
                        </p>
                        <div className="job-time m-t15 m-b10 text-center">
                          <a className="mr-1 " href="#">
                            <span
                              style={{
                                padding: "5px 20px",
                                borderRadius: "100px",
                                width: "200px",
                              }}>
                              {" "}
                              Follow
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Messages;
