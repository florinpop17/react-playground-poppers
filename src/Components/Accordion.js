import React from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ data }) =>
    data.length > 0 ? (
        <div className="accordion">
            {data.map((AccordionData) => (
                <AccordionItem {...AccordionData} />
            ))}
        </div>
    ) : null;

export default Accordion;

// TODO:
// Loop over a given array of objects and create Accordion Items
