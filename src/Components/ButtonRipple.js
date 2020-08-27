import React from "react";

const ButtonRipple = ({ children }) => {
    const createCircle = (e) => {
        const circle = document.createElement("span");
        circle.classList.add("circle");
        e.target.appendChild(circle);

        const x = e.clientX;
        const y = e.clientY;

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        circle.style.top = yInside + "px";
        circle.style.left = xInside + "px";

        setTimeout(() => {
            circle.remove();
        }, 3000);
    };

    return (
        <button className="ripple" onClick={createCircle}>
            <span class="children">{children}</span>
        </button>
    );
};

export default ButtonRipple;
