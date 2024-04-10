import React from 'react';

import '../../css/Profile.css'
import Header from "./../Layout/Header";
import Footer from '../Layout/Footer';
const ProfilePage = () => {
    return (
        <>
            <Header />

            <div className="page-content bg-white">
                <div className="content-block">
                    <div className="section-full bg-white p-t50 p-b20">
                        <div className="container">
                            <div className='row'>
                                <div className='col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12'>
                                    <div className="profile-summary">
                                        <div className='p-content' >
                                            <div className='profile-card'>
                                                <img src='/static/media/pic1.63e5cf4e.jpg' alt="Profile" className="cover-picture" />
                                                <img src='/static/media/pic1.63e5cf4e.jpg' alt="Profile" roundedCircle className="profile-picture" />
                                            </div>
                                            <div style={{ padding: '10px 30px' }}>
                                                <h2 className='mb-0'>Steve Nouri</h2>
                                                <h6 className='mb-0'>Generative AI Founder | Advisor @ Fortune 500 | 1.6 Million Followers | Keynote Speaker</h6>
                                                <p className='mb-0'>MIT Sloan School of Management</p>
                                                <p className='mb-0'>1,623,846 followers 500+ connections</p>
                                                <p className='mb-0'>Sydney, New South Wales, Australia</p>
                                                <div className="job-time m-t15 m-b10">
                                                    <a className="mr-1" href="#"><span style={{ padding: '5px 15px', borderRadius: '100px' }}>+ Follow</span></a>
                                                    <a className="mr-1" href="#"><span style={{ padding: '5px 15px', borderRadius: '100px' }}>Message</span></a>
                                                    <a className="mr-1" href="#"><span style={{ padding: '5px 15px', borderRadius: '100px' }}>Visit my website</span></a>
                                                    <a className="mr-1" href="#"><span style={{ padding: '5px 15px', borderRadius: '100px' }}>More</span></a>
                                                </div>

                                                <div className="post-bx">
                                                    <div className="job-post-info m-a0">
                                                        <div className="posted-info clearfix">
                                                            <p className="text-black m-r10 mb-0"> Providing services</p>
                                                            <p className="m-tb0 text-primary ">Public Speaking, Social Media Marketing, and Executive Coaching </p>
                                                            <p className='mb-0'> <a href="#">Show details</a></p>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className='mt-4 profile-summary' style={{ padding: '10px 30px' }}>
                                        <div className="candidate-info company-info">
                                            <h4 className='mb-2 mt-4'>Highlights</h4>
                                            <div className="job-list-container" >
                                                <div className='d-flex justify-content-start aligns-item-center '>
                                                    <div>
                                                        <i className="fa fa-user-o" aria-hidden="true"></i>
                                                    </div>
                                                    <div className='ml-2'>
                                                        <h6 className="mb-0 d-flex justify-content-between align-items-center">
                                                            The Biggest Opportunities in AI:</h6>
                                                        <h6 className="mb-0 d-flex justify-content-between align-items-center">The Future of GenAI and Mdivti-Agents
                                                        </h6>
                                                        <p className="mb-0" style={{ color: "#1c2957" }}>
                                                            Steve spoke at this event
                                                        </p>
                                                        <div className="job-time m-t15 m-b10">
                                                            <a className="mr-1" href="#"><span style={{ padding: '5px 15px', borderRadius: '100px' }} >+ Message</span></a>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                                <div className='col-xl-3 col-lg-4 col-md-4 col-sm-12 col-12 '>
                                <div className=' profile-summary' style={{ padding: '10px 30px' }}>
                                        <div className="candidate-info company-info">
                                            
                                            <div className="job-list-container text-center" >
                                            <p className="" style={{ color: "#1c2957", fontSize:'13px', lineHeight:'20px' }}>
                                                          Abc, unlock your full potential with linkedin premium
                                                        </p>
                                                <div className='d-flex justify-content-around aligns-item-center '>
                                                    <div>
                                                        <i className="fa fa-user-o" aria-hidden="true"></i>
                                                    </div>
                                                    <div>
                                                        <i className="fa fa-user-o" aria-hidden="true"></i>
                                                    </div>
                                                    </div>
                                                  
                                                       
                                                        <p className="mb-2 mt-2" style={{ color: "#1c2957",fontSize:'15px', lineHeight:'20px' }}>
                                                           See who's viewed your profile in the last 90 days
                                                        </p>
                                                        <div className="job-time m-t15 m-b10">
                                                            <a className="mr-1" href="#"><span style={{ padding: '5px 15px', borderRadius: '100px' }} >Try for free</span></a>

                                                        </div>
                                                   
                                            </div>
                                        </div>
                                    </div>
                                        <div className='mt-4 profile-summary' style={{ padding: '10px 30px'  }}>
                                        <div className="candidate-info company-info" >
                                            <h6 className='mb-2 mt-2'>Other similar profiles</h6>
                                            <div className="job-list-container mt-2" style={{  borderBottom:'1px solid gray' }}>
                                                <div className='d-flex justify-content-start aligns-item-center '>
                                                    <div>
                                                        <i className="fa fa-user-o" aria-hidden="true"></i>
                                                    </div>
                                                    <div className='ml-2'>
                                                        <h6 className="mb-0 d-flex justify-content-between align-items-center">
                                                            ABC</h6>
                                                       <p className="mb-0" style={{ color: "#1c2957" }}>
                                                          I help people understand and apply AI
                                                        </p>
                                                        <div className="job-time m-t15 m-b10">
                                                            <a className="mr-1" href="#"><span style={{ padding: '5px 15px', borderRadius: '100px' }} >+ Follow</span></a>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="job-list-container mt-2" style={{  borderBottom:'1px solid gray' }}>
                                                <div className='d-flex justify-content-start aligns-item-center '>
                                                    <div>
                                                        <i className="fa fa-user-o" aria-hidden="true"></i>
                                                    </div>
                                                    <div className='ml-2'>
                                                        <h6 className="mb-0 d-flex justify-content-between align-items-center">
                                                            ABC</h6>
                                                       <p className="mb-0" style={{ color: "#1c2957" }}>
                                                          I help people understand and apply AI
                                                        </p>
                                                        <div className="job-time m-t15 m-b10">
                                                            <a className="mr-1" href="#"><span style={{ padding: '5px 15px', borderRadius: '100px' }} >+ Follow</span></a>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="job-list-container mt-2" style={{  borderBottom:'1px solid gray' }}>
                                                <div className='d-flex justify-content-start aligns-item-center '>
                                                    <div>
                                                        <i className="fa fa-user-o" aria-hidden="true"></i>
                                                    </div>
                                                    <div className='ml-2'>
                                                        <h6 className="mb-0 d-flex justify-content-between align-items-center">
                                                            ABC</h6>
                                                       <p className="mb-0" style={{ color: "#1c2957" }}>
                                                          I help people understand and apply AI
                                                        </p>
                                                        <div className="job-time m-t15 m-b10">
                                                            <a className="mr-1" href="#"><span style={{ padding: '5px 15px', borderRadius: '100px' }} >+ Follow</span></a>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="job-list-container mt-2" style={{  borderBottom:'1px solid gray' }}>
                                                <div className='d-flex justify-content-start aligns-item-center '>
                                                    <div>
                                                        <i className="fa fa-user-o" aria-hidden="true"></i>
                                                    </div>
                                                    <div className='ml-2'>
                                                        <h6 className="mb-0 d-flex justify-content-between align-items-center">
                                                            ABC</h6>
                                                       <p className="mb-0" style={{ color: "#1c2957" }}>
                                                          I help people understand and apply AI
                                                        </p>
                                                        <div className="job-time m-t15 m-b10">
                                                            <a className="mr-1" href="#"><span style={{ padding: '5px 15px', borderRadius: '100px' }} >+ Follow</span></a>

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
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProfilePage;
