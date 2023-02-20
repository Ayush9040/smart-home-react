import React from "react";
import Accordion from 'react-bootstrap/Accordion';


const accordionData = [
  {
    question:"Chamber reached do he nothing be?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
  },
  {
    question:"At by pleasure of children be?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
  },
  {
    question:"Amounted repeated as believed in confined?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
  },
  {
    question:"In am do giving to afford parish settle easily garret?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
  }, {
    question:"Accordion Item #1",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
  }
]
const SmartAccordion = () => {
    return(
        <Accordion className='sh-faq_accordian' defaultActiveKey={0} flush>
      {
        accordionData.map((data,index)=>{
          return(
            <Accordion.Item eventKey={index} key={index}>
            <Accordion.Header className="sh-faq_accordian-question">{data.question}</Accordion.Header>
            <Accordion.Body>
            {
              data.answer
            }
            </Accordion.Body>
          </Accordion.Item>
          )
        })
      }
      </Accordion>
    )
}
export default SmartAccordion;