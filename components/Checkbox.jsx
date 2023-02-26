import React, { useState } from "react";

const Checkbox = ({ checked, onChange }) => {
  return (
    <label className="inline-flex items-center border border-black border-1 p-[2px] bg-white">
      <input
        type="checkbox"
        className="form-checkbox h-0 w-0 opacity-0 absolute "
        checked={checked}
        onChange={onChange}
      />
      <span className="relative">
        <span
          className={`block bg-[#00F5F5] w-4 h-4  transform transition duration-150 ease-in-out ${
            checked ? "scale-100" : "scale-0"
          }`}
        ></span>
      </span>
    </label>
  );
};

export default Checkbox;
