import React, { useState } from 'react';
import {  Form, ListGroup } from 'react-bootstrap';
import { FaPlus, FaTimes } from "react-icons/fa";

const AddSkills = () => {
  const [skills, setSkills] = useState(['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5', 'Skill 6', 'Skill 7', 'Skill 8', 'Skill 9', 'Skill 10']);
  const [newSkill, setNewSkill] = useState('');

  const handleDeleteSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  return (
    <div>
      <div>
        {skills.map((skill, index) => (
          <React.Fragment key={index}>
            <ListGroup.Item
              style={{ backgroundColor: '#e1e7ff', color: '#1c2957', display: 'inline-block', margin: '5px', padding: '5px 15px', borderRadius: '10px' }}>
              <span className='d-flex justify-content-center align-items-center'>{skill} <FaTimes onClick={() => handleDeleteSkill(index)}  style={{  cursor: 'pointer', marginLeft: '5px' }}/></span>
            </ListGroup.Item>
          </React.Fragment>
        ))}
      </div>
      <Form.Group>
        <Form.Control
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Enter new skill"
          style={{ marginTop: '15px' }}
        />
      </Form.Group>
      <button onClick={handleAddSkill} className='site-button d-flex justify-content-center align-items-center'>Add Skill < FaPlus className='ml-2' /></button>
    </div>
  );
};

export default AddSkills;
