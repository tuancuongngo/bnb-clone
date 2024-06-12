import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

const NavBar = () => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    //console.log(e.target.value);
    setInput(e.target.value);
  };

  return (
    <div className="bg-white flex px-4 py-3 w-full fixed top-0 left-0">
      <div className="flex gap-2 w-full max-w-5xl mx-auto">
        <Input
          value={input}
          onChange={handleInput}
          placeholder="Search destinations"
        />
        <Button text="Search" />
      </div>
    </div>
  );
};

export default NavBar;
