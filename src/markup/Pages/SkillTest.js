import React, { useState } from 'react';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import Profilesidebar from './../Element/Profilesidebar';

const cardData = [
    { title: 'HTML', text: '  Your paragraph text Your paragraph text Your paragraph text Your paragraph text Your paragraph text Your paragraph text Your paragraph text' },
       { title: 'CSS', text: '  Your paragraph text Your paragraph text Your paragraph text Your paragraph text Your paragraph text Your paragraph text Your paragraph text' },
       { title: 'JAVASCRIPT', text: '  Your paragraph text Your paragraph text Your paragraph text Your paragraph text Your paragraph text Your paragraph text Your paragraph text' },
       { title: 'REACTJS', text: '  Your paragraph text Your paragraph text Your paragraph text Your paragraph text Your paragraph text Your paragraph text Your paragraph text' },
       { title: 'NODEJS', text: '  Your paragraph text Your paragraph text Your paragraph text Your paragraph text Your paragraph text Your paragraph text Your paragraph text' },
       { title: 'VUEJS', text: '  Your paragraph text Your paragraph text Your paragraph text Your paragraph text Your paragraph text Your paragraph text Your paragraph text' },
       { title: 'NEXTJS', text: '  Your paragraph text Your paragraph text Your paragraph text Your paragraph text Your paragraph text Your paragraph text Your paragraph text' },
       { title: 'MONGODB', text: '  Your paragraph text Your paragraph text Your paragraph text Your paragraph text Your paragraph text Your paragraph text Your paragraph text' },
  
];

function SkillTest() {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleViewDetails = (card) => {
        setSelectedCard(card);
        // Open modal here or perform any other action
    };

    return (
        <>
            <Header2 />
            <div className="page-content bg-white">
                <div className="content-block">
                    <div className="section-full bg-white browse-job p-t50 p-b20">
                        <div className="container">
                            <div className="row">
                                <Profilesidebar />
                                <div className="col-xl-9 col-lg-8 m-b30">
                                    <div className="job-bx job-profile">
                                        <div className='row'>
                                            {cardData.map((card, index) => (
                                                <div key={index} className='col-lg-6 col-sm-12 col-md-6 col-12 mt-4'>
                                                    <div className="card" style={{ background: '#e1e7ff' , boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                                                        <div className="card-body text-center" style={{ transition: 'box-shadow 0.3s' }}>
                                                            <h5 className="card-title">{card.title}</h5>
                                                            <p className="card-text">{card.text}</p>
                                                            <div className='d-flex justify-content-center align-items-center'>
                                                            <button  className="btn site-button">ReTake Test</button>
                                                                <button className="btn site-button ml-2" onClick={() => handleViewDetails(card)}>View Details</button>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            
            {selectedCard && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-content text-center" style={{ width: '25%', margin: 'auto', marginTop: '100px', background: '#fff', padding: '20px' }}>
                        <h5 className='mb-2'>{selectedCard.title}</h5>
                        <p>{selectedCard.text}</p>
                        <button className="btn site-button" onClick={() => setSelectedCard(null)}>Close</button>
                    </div>
                    </div>
            )}
        </>
    )
}

export default SkillTest;
