import React from 'react';
import SmartAccordion from '../Global/Smart_Accordian';
import Acc from '../Global/AccordionWithIcon';

const Faq = () => {
  return (
    <section className='sh-faq'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 d-flex flex-column align-items-center justify-content-center'>
                    <h2 className='sh-faq__heading sh-main-heading'>FAQ's</h2>
                </div>
            </div>
            <div className="row sh-faq__accordian-wrapper">

            <div className="col-12 sh-faq__acc-inner-wrapper d-flex flex-column justify-content-center">
                <SmartAccordion />
            </div>
        </div>
        </div>
    </section>
  )
}

export default Faq