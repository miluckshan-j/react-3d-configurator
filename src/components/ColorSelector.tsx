import React from "react";
import { COLORS } from "../constants/colors";

interface ColorSelectorProps {
  selectSwatch: React.MouseEventHandler<HTMLDivElement>;
}

const ColorSelector = ({ selectSwatch }: ColorSelectorProps) => {
  return (
    <div className="tray">
      <div className="tray__slide">
        {COLORS.map((color, key) => (
          <div
            key={key}
            className="tray__swatch"
            style={{
              background: color.texture
                ? `url(${color.texture})`
                : `#${color.color}`,
            }}
            data-key={key}
            onClick={selectSwatch}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
