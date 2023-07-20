import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import styled from "styled-components";
import { TextureLoader } from "three";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/scene.gltf");

  const texture = useLoader(TextureLoader, "/textures/PASTEL_PALETTE.jpg");

  gltf.scene.traverse((node) => {
    if (node.isMesh) {
      node.material.map = texture;
    }
  });

  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};

export default function ThreeExample() {
  return (
    <CanvasWrapper>
      <Canvas>
        <Suspense fallback={null}>
          <Model/>
          <OrbitControls />
          <color attach="background" args={["lightblue"]} />
          <Environment preset="sunset"/>
        </Suspense>
      </Canvas>
    </CanvasWrapper>
  );
}

const CanvasWrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  height: 100vh;
  width: 100vw;
`
