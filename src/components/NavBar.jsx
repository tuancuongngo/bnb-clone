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
    <div className="container flex mx-auto">
      <Input
        value={input}
        onChange={handleInput}
        placeholder="Search destinations"
      />
      <Button />
    </div>
  );
};

export default NavBar;
