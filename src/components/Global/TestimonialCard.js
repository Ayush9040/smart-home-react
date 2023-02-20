import React from 'react';

const TestimonialCard = ({
  authorTestimonails,
  authorAvatar,
  authorName,
  authorDesignation,
}) => {
  return (
      <div className="sm-tcard">
        <p className="sm-tcard__desc">{authorTestimonails}</p>
        <div className="sm-tcard__author d-flex">
          <div className="sm-tcard__author-avatar me-2">
            <img src={authorAvatar} alt="" />
          </div>
          <div>
            <p className="sm-tcard__author-name">{authorName}</p>
            <p className="sm-tcard__author-designantion">{authorDesignation}</p>
          </div>

        </div>
      </div>
    
  );
};

export default TestimonialCard;
