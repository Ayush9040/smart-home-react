import React from 'react';

const TestimonialCard = ({
  authorTestimonails,
  authorAvatar,
  authorName,
  authorDesignation,
}) => {
  return (
      <div className="sh-tcard">
        <p className="sh-tcard__desc">{authorTestimonails}</p>
        <div className="sh-tcard__author d-flex">
          <div className="sh-tcard__author-avatar me-3">
            <img src={authorAvatar} alt="" />
          </div>
          <div>
            <p className="sh-tcard__author-name">{authorName}</p>
            <p className="sh-tcard__author-designantion">{authorDesignation}</p>
          </div>
        </div>
      </div>
    
  );
};

export default TestimonialCard;
