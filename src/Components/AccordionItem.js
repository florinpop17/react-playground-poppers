import React, { useState } from "react";

const AccordionItem = ({ title, text }) => {
    const [isOpen, toggleOpen] = useState(false);

    const toggleOpenState = () => {
        toggleOpen(!isOpen);
    };

    return (
        <div className={`accordion-item ${isOpen && "open"}`}>
            <div className="accordion-header" onClick={toggleOpenState}>
                {title}

                <i className="fas fa-caret-down"></i>
            </div>
            <div className="accordion-body">{text}</div>
        </div>
    );
};

export default AccordionItem;

// TODO:
// Handle click => toggle open state
// Get the information from Accordion to show the title & text
