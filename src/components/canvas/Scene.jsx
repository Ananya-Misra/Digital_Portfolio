// components/canvas/SceneCanvas.jsx
import { Suspense, useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Stars = () => {
  const ref = useRef();
  const colorRef = useRef(COLORS[0]);
  const [colorIndex, setColorIndex] = useState(0);
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % COLORS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useFrame((_, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    colorRef.current = COLORS[colorIndex];
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={colorRef.current}
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Earth = () => {
  const earth = useGLTF('./models/planet/scene.gltf');
  return (
    <primitive 
      object={earth.scene} 
      scale={2.5} 
      position={[0, 0, 0]}
      rotation-y={0}
    />
  );
};

export const SceneCanvas = () => {
  return (
    <Canvas
      shadows
      camera={{
        position: [0, 0, 1],
        fov: 45,
        near: 0.1,
        far: 200
      }}
    >
      <Suspense fallback={null}>
        <color attach="background" args={["#020617"]} />
        <Stars />
        <Earth />
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};