import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Canvas } from "@react-three/fiber";
import Map from "./Map";
import Lights from "./Lights";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Player from "./Player";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <KeyboardControls map={[
        {name: "leftEdge", keys: ["KeyA"]},
        {name: "rightEdge", keys: ["KeyD"]}
      ]}>
        <Canvas
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [2.5, 4, 6],
          }}
        >
          <Physics debug>
            <Player />
            <Map />
            <Lights />
          </Physics>
          <OrbitControls makeDefault />
        </Canvas>
      </KeyboardControls>
    </>
  );
}

export default App;
