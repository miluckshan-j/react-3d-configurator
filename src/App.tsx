import React, { useState } from "react";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import "./App.css";
import Scene from "./components/canvas/Scene";
import ColorSelector from "./components/ColorSelector";
import OptionsMenu from "./components/OptionsMenu";
import { COLORS } from "./constants/colors";
import { NewMaterialOpt } from "./models/scene.interface";

function App() {
  const [activeOption, setActiveOption] = useState("legs");
  const [newMaterialOpt, setNewMaterialOpt] = useState<NewMaterialOpt>({
    activeOption,
    newMTL: null,
  });

  const selectSwatch = (e: any) => {
    const color = COLORS[parseInt(e.target.dataset.key)];
    let newMTL;
    if (color.texture) {
      const txt = new THREE.TextureLoader().load(color.texture);
      txt.repeat.set(color.size[0], color.size[1]);
      txt.wrapS = THREE.RepeatWrapping;
      txt.wrapT = THREE.RepeatWrapping;
      newMTL = new THREE.MeshPhongMaterial({
        map: txt,
        shininess: color.shininess ? color.shininess : 10,
      });
    } else {
      newMTL = new THREE.MeshPhongMaterial({
        color: parseInt("0x" + color.color),
        shininess: color.shininess ? color.shininess : 10,
      });
    }
    setNewMaterialOpt({
      activeOption,
      newMTL,
    });
  };

  return (
    <div className="App">
      <OptionsMenu
        activeOption={activeOption}
        setActiveOption={setActiveOption}
      />
      <Canvas id="rtfCanvas" style={{ height: "100vh" }}>
        <Scene newMaterialOpt={newMaterialOpt} />
      </Canvas>
      <div className="controls">
        <ColorSelector selectSwatch={selectSwatch} />
      </div>
    </div>
  );
}

export default App;
