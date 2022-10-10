import React, { useState } from "react";
import { Canvas } from "react-three-fiber";
import "./App.css";
import Scene from "./components/canvas/Scene";
import { NewMaterialOpt } from "./models/scene.interface";

function App() {
  const [newMaterialOpt, setNewMaterialOpt] = useState<NewMaterialOpt>({
    newMTL: null,
  });

  return (
    <div className="App">
      <Canvas id="rtfCanvas">
        <Scene newMaterialOpt={newMaterialOpt} />
      </Canvas>
    </div>
  );
}

export default App;
