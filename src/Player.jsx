import { useGLTF, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  BallCollider,
  RigidBody,
  RoundCuboidCollider,
} from "@react-three/rapier";
import React, { useRef } from "react";

function Player() {
  const board = useGLTF("./board.glb");
  const body = useRef();

  const [subscribeKeys, getKeys] = useKeyboardControls();

  useFrame((state, delta) => {

    // console.log("y",body.current.rotation().y, "w",body.current.rotation().w)

    const currentRotation = body.current.rotation()
    const quart = new THREE.Quaternion(currentRotation.x, currentRotation.y, currentRotation.z, currentRotation.w);

    const rotation = new THREE.Euler();
    rotation.setFromQuaternion(quart)

    console.log(Math.sin(rotation.y))

    const { leftEdge, rightEdge } = getKeys();

    const torque = { x: 0, y: 0, z: 0 };
    const torqueStrength = 0.015 * delta;

    if (leftEdge) {
      torque.z -= torqueStrength * Math.cos(rotation.y);
      torque.x -= torqueStrength * Math.sin(rotation.y);
    }
    if (rightEdge) {
      torque.z += torqueStrength;
    }

    body.current.applyTorqueImpulse(torque);
  });

  return (
    <>
      <RigidBody  ref={body} colliders={false} position={[0, 1, 0]} friction={0}>
        <primitive object={board.scene} scale={0.1} />
        <RoundCuboidCollider
          position={[0, 0.12, 0]}
          args={[0.1, 0.02, 0.8, 0.1]}
        />
      </RigidBody>
    </>
  );
}

export default Player;
