import React, { useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

interface CameraControllerProps {
  camera: THREE.Camera;
  gl: THREE.WebGLRenderer;
}

const CameraController = ({ camera, gl }: CameraControllerProps) => {
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

export default CameraController;
