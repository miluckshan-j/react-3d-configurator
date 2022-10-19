import React from "react";
import { OPTIONS } from "../constants/options";

interface OptionsMenuProps {
  activeOption: string;
  setActiveOption: React.Dispatch<React.SetStateAction<string>>;
}

const OptionsMenu = ({ activeOption, setActiveOption }: OptionsMenuProps) => {
  return (
    <div className="options">
      {OPTIONS.map(({ name, image }, key) => (
        <div
          className={`option ${activeOption === name ? "--is-active" : ""}`}
          data-option={name}
          onClick={() => setActiveOption(name)}
          key={key}
        >
          <img src={image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default OptionsMenu;
