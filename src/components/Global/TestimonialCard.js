import React from 'react';

const TestimonialCard = ({
  authorTestimonails,
  authorAvatar,
  authorName,
  authorDesignation,
}) => {
  return (
      <div className="sh-tcard">
        <p className="sh-tcard_desc">{authorTestimonails}</p>
        <div className="sm-tcard__author d-flex">
          <div className="sh-tcard_author-avatar me-3">
            <img src={authorAvatar} alt="" />
          </div>
          <div>
            <p className="sh-tcard_author-name">{authorName}</p>
            <p className="sh-tcard_author-designantion">{authorDesignation}</p>
          </div>

        </div>
      </div>
    
  );
};

export default TestimonialCard;
