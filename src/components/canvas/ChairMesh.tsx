import React, { useEffect, useRef } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { NewMaterialOpt } from "../../models/scene.interface";
import * as THREE from "three";

interface ChairMeshProps {
  newMaterialOpt: NewMaterialOpt;
}

const INITIAL_MTL = new THREE.MeshPhongMaterial({
  color: new THREE.Color(0xf1f1f1),
  shininess: 10,
});

const INITIAL_MAP = [
  { childID: "back", mtl: INITIAL_MTL },
  { childID: "base", mtl: INITIAL_MTL },
  { childID: "cushions", mtl: INITIAL_MTL },
  { childID: "legs", mtl: INITIAL_MTL },
  { childID: "supports", mtl: INITIAL_MTL },
];

const initColor = (
  parent: THREE.Group,
  type: string,
  mtl: THREE.MeshPhongMaterial
) => {
  console.log("parent:", parent);
  // TODO: Use Mesh?
  parent.traverse((o: any) => {
    console.log("o: ", o);
    if (o.isMesh && o.name.includes(type)) {
      o.castShadow = true;
      o.receiveShadow = true;
      o.material = mtl;
      o.userData.nameID = type;
    }
  });
};

const ChairMesh = ({ newMaterialOpt }: ChairMeshProps) => {
  const { scene: theModel } = useLoader(GLTFLoader, "assets/chair.gltf");
  const chair = useRef(theModel);

  useEffect(() => {
    if (theModel) {
      for (let object of INITIAL_MAP) {
        initColor(theModel, object.childID, object.mtl);
      }
    }
  }, [theModel]);

  return (
    <primitive
      ref={chair}
      object={theModel}
      scale={[2, 2, 2]}
      rotation={[0, Math.PI, 0]}
      position={[0, -1, 0]}
      receiveShadow
      castShadow
    />
  );
};

export default ChairMesh;
