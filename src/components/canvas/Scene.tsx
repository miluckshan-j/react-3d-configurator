import React, { Suspense, useEffect } from "react";
import { NewMaterialOpt } from "../../models/scene.interface";
import * as THREE from "three";
import { useThree } from "react-three-fiber";
import Floor from "./Floor";
import ChairMesh from "./ChairMesh";

interface SceneProps {
  newMaterialOpt: NewMaterialOpt;
}

const Scene = ({ newMaterialOpt }: SceneProps) => {
  const {
    scene,
    camera,
    gl: { domElement, shadowMap },
  } = useThree();

  useEffect(() => {
    const directionalLight = scene.children[1] as THREE.DirectionalLight;
    scene.background = new THREE.Color(0xf1f1f1);
    scene.fog = new THREE.Fog(0xf1f1f1, 20, 100);
    const newCamera = camera as THREE.PerspectiveCamera;
    newCamera.fov = 50;
    directionalLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    shadowMap.enabled = true;
    console.log(scene);
  }, []);

  return (
    <>
      <hemisphereLight
        // skycolor={new THREE.Color(0xffffff)}
        groundColor={new THREE.Color(0xffffff)}
        intensity={0.61}
        position={[0, 50, 0]}
      />
      <directionalLight
        color={new THREE.Color(0xffffff)}
        intensity={0.54}
        position={[-8, 12, 8]}
        castShadow
      />
      <Suspense fallback={null}>
        <ChairMesh newMaterialOpt={newMaterialOpt} />
        <Floor />
      </Suspense>
    </>
  );
};

export default Scene;
