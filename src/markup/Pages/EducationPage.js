import React, { useState } from "react";
import Header from "./../Layout/Header";
import Footer from '../Layout/Footer';
import { Link } from "react-router-dom";
import {  Form } from 'react-bootstrap';

function EducationPage() {
    const [conversations, setConversations] = useState([
        {
            id: 1,
            name: "Question1",
            questions: [
                { question: "What is your highest level of education?", type: "input" },
                { question: "Did you attend any specialized training or certification programs?", type: "checkbox" }
            ]
        },
        {
            id: 2,
            name: "Question2",
            questions: [
                { question: "What is your current job title?", type: "input" },
                { question: "List your previous employers.", type: "input" },
                { question: "What was your job role in your previous employment?", type: "input" }
            ]
        },
        {
            id: 3,
            name: "Question3",
            questions: [
                { "question": "What programming languages are you proficient in?", "type": "checkbox" }
            ]
        },
        {
            id: 4,
            name: "Question4",
            questions: [
                { "question": "Please provide the contact information for your references.", "type": "input" },
                { "question": "How long have you known your primary reference?", "type": "input" },
                { "question": "Can you provide a reference from your previous employer?", "type": "checkbox" }
            ]
        },
        {
            id: 5,
            name: "Question5",
            questions: [
                { "question": "What is your date of birth?", "type": "input" },
                { "question": "Are you legally eligible to work in this country?", "type": "checkbox" }
            ]
        }

    ]);

    const [currentConversation, setCurrentConversation] = useState(1);

    const currentConversationObj = conversations.find(conv => conv.id === currentConversation);
    const currentConversationName = currentConversationObj?.name;

    return (
        <>
            <Header />
            <div className="page-content bg-white">
                <div className="content-block">
                    <div className="section-full bg-white p-t50 p-b20">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5 m-b30">
                                    <div className="sticky-top">
                                        <div className="candidate-info company-info">
                                            <div className="candidate-detail text-center">
                                                <div className="candidate-title">
                                                    <h4 className="m-b5">
                                                        <Link to={"#"}>Sections</Link>
                                                    </h4>
                                                </div>
                                            </div>
                                           
                                             <ul
                                                 className="job-list-container"
                                                 style={{
                                                     maxHeight: "calc(100vh - 200px)",
                                                     overflowY: "auto",
                                                 }}>
                                                 {conversations.map((conversation) => (
                                                     <li key={conversation.id}>
                                                         <Link to={"#"} className={`conversation-item ${conversation.id === currentConversation ? "active" : ""}`} onClick={() => setCurrentConversation(conversation.id)}>
                                                             <h6 className="mb-0"> {conversation.name}</h6>

                                                         </Link>
                                                     </li>
                                                 ))}
                                             </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-7 m-b30">
                                    <div className="job-bx submit-resume " style={{padding:"100px 35px"}}>
                                        <h4>{currentConversationName}</h4>
                                        <Form>
                                            {currentConversationObj.questions.map((question, index) => (
                                                <Form.Group key={index}>
                                                    <Form.Label>{question.question}</Form.Label>
                                                    {question.type === "input" ? (
                                                        <Form.Control type="text" placeholder="Type your answer here..." />
                                                    ) : (
                                                        <div className="d-flex justify-conent-between align-items-center">
                                                            <Form.Check
                                                                type="checkbox"
                                                                label="Yes"
                                                                
                                                            />
                                                              <Form.Check
                                                                type="checkbox"
                                                                label="No"
                                                                className="ml-5"
                                                            />
                                                        </div>
                                                    )}
                                                </Form.Group>
                                            ))}
                                        </Form>
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

export default EducationPage;
