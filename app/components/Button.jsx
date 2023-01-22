import React from "react";

function Button(props) {
  let bg = `bg-[` + props.color + `] `;
  let className =
    bg +
    "shadow-md inline-flex items-center rounded-full border border-[#0d9488]  px-8 py-3 text-white hover:scale-110 focus:outline-none focus:ring active:text-[#0d9488]";
  return (
    <div>
      <a className={className}>
        <span className="text-md font-medium text-black">{props.name} </span>

        <svg
          className="ml-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  );
}

export default Button;
