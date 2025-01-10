import React from 'react';
import { useRef, useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';


const AccordionTwo = () => {
    // State to track whether the paragraph is visible
    const [isVisible, setIsVisible] = useState(false);
    
    const handleAccordionClick = () => {
        setIsVisible((prev) => !prev);
    }
    return (
        <div className="content_wrapper">
          <div className="accordion_wrapper">
            <p className="accordion_title">
              HTML{' '}
              <RiArrowDropDownLine className="accordion-icon" onClick={handleAccordionClick} style={{ cursor: "pointer" }}/>
            </p>
            {isVisible && 
                <div className="accordion_content">
                    The HyperText Markup Language or HTML is the
                    standard markup language for documents designed to
                    be displayed in a web browser.
              </div>
            }
            
          </div>
          <div className="accordion_wrapper">
            <div className="accordion_title">
              CSS{' '}
              <RiArrowDropDownLine className="accordion-icon" onClick={handleAccordionClick} style={{ cursor: "pointer" }}/>
            </div>
            {isVisible &&
                <div className="accordion_content">
                    Cascading Style Sheets is a style sheet language
                    used for describing the presentation of a document
                    written in a markup language such as HTML or XML.
              </div>
            }
            
          </div>
          <div className="accordion_wrapper">
            <div className="accordion_title">
              JavaScript{' '}
              <RiArrowDropDownLine className="accordion-icon" onClick={handleAccordionClick} style={{ cursor: "pointer" }}/>
            </div>
            {isVisible &&
                <div className="accordion_content">
                    JavaScript, often abbreviated as JS, is a
                    programming language that is one of the core
                    technologies of the World Wide Web, alongside HTML
                    and CSS.
              </div>
            }
            
          </div>
        </div>
      );
}

export default AccordionTwo;