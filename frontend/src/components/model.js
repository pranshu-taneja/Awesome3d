import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


function Model() {
  const gltf = useLoader(GLTFLoader, 'model/glb/shirt.glb');
  const modelRef = useRef();

  useFrame(() => {
    // Animate the model, if desired
    // modelRef.current.rotation.y += 0.01;
  });

  return (
    <>
      <mesh ref={modelRef} scale={[3,3,3]}>
        <primitive object={gltf.scene} />
      </mesh>
    </>
  );
}

export default Model;
