import React, { useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
// import "./AccordionWithIcon.css";


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


  const Acc = () => {

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
      if(selected == i){
        return setSelected(null);
      }
    }


    return (
      <div className="sh-accordian">
        <div className="sh-accordian__container">
          {accordionData.map((item, i) => (
              <div className="sh-accordian__item">
                <div className="sh-accordian__question" onClick={() => toggle(i)}>
                  <h2>{item.question}</h2>
                  <span>+</span>
                </div>
                <div className="sh-accordian__answer">{item.answer}</div>
              </div>
          ))}
        </div>
      </div>
    )
  }


// const AccordionWithIcon = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <Accordion>

//      {
//         accordionData.map((data,index)=>{
//           return(
//             <Card eventKey={index} key={index}>
//                     <Card.Header>
//                     <Accordion.Toggle
//                         as={Button}
//                         variant="link"
//                         eventKey="0"
//                         onClick={toggleAccordion}
//                     >
//                         <FontAwesomeIcon
//                         icon={isOpen ? faMinus : faPlus}
//                         //   className="accordion-icon"
//                         />
//                         {data.question}
//                     </Accordion.Toggle>
//                     </Card.Header>
//                     <Accordion.Collapse eventKey="0">
//                     <Card.Body>{data.answer}</Card.Body>
//                     </Accordion.Collapse>
//                 </Card>
//           )
//         })
//       }

      
//     </Accordion>
//   );
// };

export default Acc;
