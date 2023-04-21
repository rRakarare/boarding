import { RigidBody } from "@react-three/rapier";
import React from "react";
import * as THREE from "three";

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const floor1Material = new THREE.MeshStandardMaterial({ color: "limegreen" });

function Map() {
  return (
    <RigidBody type="fixed" friction={0}>
      <mesh
        geometry={boxGeometry}
        material={floor1Material}
        // rotation={[.1,0,0]}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 20]}
        receiveShadow
      />
    </RigidBody>
  );
}

export default Map;
