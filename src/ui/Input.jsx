import * as React from "react";

const Input = (props) => {
  return (
    <input
      type="text"
      className="flex h-10 w-full rounded-md border px-3 py-2 text-sm bg-blue-50 text-gray-950"
      {...props}
    />
  );
};

export default Input;
