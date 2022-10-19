import React, { useState } from "react";
import { Canvas } from "react-three-fiber";
import "./App.css";
import Scene from "./components/canvas/Scene";
import OptionsMenu from "./components/OptionsMenu";
import { NewMaterialOpt } from "./models/scene.interface";

function App() {
  const [activeOption, setActiveOption] = useState("legs");
  const [newMaterialOpt, setNewMaterialOpt] = useState<NewMaterialOpt>({
    newMTL: null,
  });

  return (
    <div className="App">
      <OptionsMenu
        activeOption={activeOption}
        setActiveOption={setActiveOption}
      />
      <Canvas id="rtfCanvas">
        <Scene newMaterialOpt={newMaterialOpt} />
      </Canvas>
    </div>
  );
}

export default App;
