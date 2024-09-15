"use client"; 

import { useState } from 'react';

const CustomSelect = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="relative inline-block">
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="block appearance-none w-full bg-gray-100 rounded-lg py-4 px-6 font-semibold pr-8 text-black leading-tight focus:outline-none focus:border-blue-500">
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg fill="#000000" height="20px" width="20px" viewBox="0 0 330 330"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path></g></svg>
      </div>
    </div>
  );
};

export default CustomSelect;