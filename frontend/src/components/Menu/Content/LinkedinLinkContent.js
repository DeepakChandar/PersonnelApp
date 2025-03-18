import React from 'react';

const LinkedinLinkContent = () => {
  return (
    <div>
      <h2>LinkedIn Profile</h2>
      <p>Connect with me on LinkedIn to learn more about my professional experience and skills.</p>
      <a 
        href="https://www.linkedin.com/in/deepak-chandar" 
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: '1.2rem', color: '#0077b5' }}
      >
        Visit my LinkedIn Profile
      </a>
    </div>
  );
};

export default LinkedinLinkContent;