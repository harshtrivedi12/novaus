import React, { useState, useEffect } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";

function AccessibilityCenter() {
    return (
        <>
            <Header />
            <div className="page-content bg-white">
                <div className="content-block">
                    <div className="section-full bg-white p-t50 p-b20">
                        <div className="container">
                            <div className="m-b30">

                                <div className="job-bx">
                                    <h1 className="m-b5 " style={{ fontSize: "clamp(24px, 5vw, 30px)", fontWeight: 'bold' }}>Accessibility Center </h1>

                                    <p className="mb-0">At Nova US Jobs, we are committed to ensuring that our platform is accessible to all users, including those with disabilities. Our Accessibility Center is dedicated to promoting accessibility and providing equal access to our services for everyone. Here's how we prioritize accessibility:

                                    </p>
                                    <div className="candidate-title">
                                        <h2 className="mb-0" style={{ fontSize: "22px" }}>Accessible Design and Development:</h2>
                                        <div>

                                            <ul className="ml-5">
                                                <li>
                                                    <p className="mb-2">  We design and develop our platform with accessibility principles in mind, following best practices and standards such as the Web Content Accessibility Guidelines (WCAG).
                                                    </p>
                                                </li>
                                                <li>

                                                    <p className="mb-2"> Our website and mobile applications are designed to be navigable and usable by individuals with various disabilities, including visual, auditory, motor, and cognitive impairments.
                                                    </p>

                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="candidate-title">
                                        <h2 className="mb-0" style={{ fontSize: "22px" }}>Screen Reader Compatibility:</h2>
                                        <div>

                                            <ul className="ml-5">
                                                <li>

                                                    <p className="mb-2">We ensure that our platform is compatible with screen reader software used by individuals who are blind or visually impaired.

                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="mb-2">
                                                        Our website and applications are designed to provide meaningful and descriptive text alternatives for images, buttons, links, and other interface elements, enabling screen reader users to navigate and interact with our platform effectively.

                                                    </p>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="candidate-title">
                                        <h2 className="mb-0" style={{ fontSize: "22px" }}>Keyboard Navigation:</h2>
                                        <div>

                                            <ul className="ml-5">
                                                <li>

                                                    <p className="mb-2">
                                                        We optimize keyboard navigation on our platform to accommodate users who cannot use a mouse or other pointing device.

                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="mb-2">Users can navigate through our website and applications using keyboard shortcuts and tab key navigation, allowing for efficient and intuitive interaction without relying on mouse input.
                                                    </p>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="candidate-title">
                                        <h2 className="mb-0" style={{ fontSize: "22px" }}>Captioning and Transcripts:</h2>
                                        <div>

                                            <ul className="ml-5">
                                                <li>

                                                    <p className="mb-2">
                                                        We provide captions and transcripts for multimedia content, such as videos and audio recordings, to ensure that users with hearing impairments can access the information presented.

                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="mb-2">
                                                    Captions and transcripts are accurately synchronized with the content and include descriptions of relevant sounds and non-verbal cues, enhancing comprehension for users who rely on visual or text-based alternatives.

                                                    </p>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="candidate-title">
                                        <h2 className="mb-0" style={{ fontSize: "22px" }}>Color and Contrast Considerations:</h2>
                                        <div>

                                            <ul className="ml-5">
                                                <li>

                                                    <p className="mb-2">
                                                    We carefully consider color contrast ratios and color combinations to ensure readability and visibility for users with low vision or color blindness.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="mb-2">
                                                    Our design choices prioritize legibility and clarity, avoiding reliance on color alone to convey important information or distinguish between elements.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="candidate-title">
                                        <h2 className="mb-0" style={{ fontSize: "22px" }}>Accessible Forms and Controls:</h2>
                                        <div>

                                            <ul className="ml-5">
                                                <li>

                                                    <p className="mb-2">
                                                    We design forms and interactive controls with accessibility features, such as proper labeling, focus indicators, and error messaging, to assist users with disabilities in completing tasks and inputting information.

                                                    </p>

                                                </li>
                                                <li>
                                                    <p className="mb-2">
                                                    Users can easily navigate and interact with form fields, buttons, dropdown menus, and other interface elements using assistive technologies or keyboard input.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="candidate-title">
                                        <h2 className="mb-0" style={{ fontSize: "22px" }}>Feedback and Support:</h2>
                                        <div>

                                            <ul className="ml-5">
                                                <li>

                                                    <p className="mb-2">
                                                    We welcome feedback from users regarding accessibility issues or barriers encountered while using our platform.
                                                    </p>

                                                </li>
                                                <li>
                                                    <p className="mb-2">
                                                    Our Accessibility Center provides resources, assistance, and support for users who require accommodations or have specific accessibility needs, ensuring that everyone can access and utilize our services effectively.


                                                    </p>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div className="candidate-title">

                                        <p className="mb-0">
                                        By prioritizing accessibility in design, development, and user experience, we strive to create an inclusive and welcoming environment where all users can fully participate and benefit from our platform. If you encounter any accessibility barriers or have suggestions for improving accessibility on Nova US Jobs, please don't hesitate to reach out to our Accessibility Center for assistance.
                                        </p>
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

export default AccessibilityCenter;
