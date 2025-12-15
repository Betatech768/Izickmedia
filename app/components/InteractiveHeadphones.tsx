"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Headphone } from "./Headphone";

type Props = {};

function InteractiveHeadphones({}: Props) {
  return (
    <div className="w-full min-h-90">
      <Canvas camera={{ fov: 55 }}>
        <Suspense>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Scene() {
  return (
    <group>
      <Environment files={"/Hdr/warehouse-256.hdr"} />
      <mesh>
        <meshStandardMaterial />
        <Headphone />
      </mesh>
    </group>
  );
}

export default InteractiveHeadphones;
