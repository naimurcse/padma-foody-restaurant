import React from 'react';
import './FAQ.css';
const FAQ = () => {
    return (
        <div className='faq-container'>
            <div className="faq-card">
                <h2>How does <span style={{color:"purple"}}>React</span> work?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facilis dolorum earum ut molestias magni ipsa distinctio error. Consectetur exercitationem, aliquid hic accusantium excepturi culpa debitis magnam voluptates. Autem, ipsam.</p>
            </div>
            <div className="faq-card">
                <h2>How does <span style={{color:"purple"}}>useState</span> work?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facilis dolorum earum ut molestias magni ipsa distinctio error. Consectetur exercitationem, aliquid hic accusantium excepturi culpa debitis magnam voluptates. Autem, ipsam.</p>
            </div>
        </div>
    );
};

export default FAQ;