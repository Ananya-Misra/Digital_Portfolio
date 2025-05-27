import React, { useRef } from "react";
import { useGLTF, useAnimations, Float, Environment } from "@react-three/drei";

export const JavaLogo = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/java.glb");
  const { actions } = useAnimations(animations, group);

  return (
    <group scale={0.5} {...props}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1}/>
      <pointLight position={[0, 3, 0]} intensity={0.8} />
      <Environment preset="city" />
      <Float ref={group} floatIntensity={4.5}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, -0.1, 0]}>
            <group name="Root">
              <group name="Cube">
                <mesh
                  name="Cube_0"
                  geometry={nodes.Cube_0.geometry}
                  material={materials.Material}
                />
              </group>
              <group
                name="Plane"
                position={[0.787, 0, 0]}
                rotation={[Math.PI / 2, 0, 0]}
              >
                <mesh
                  name="Plane_0"
                  geometry={nodes.Plane_0.geometry}
                  material={materials.Material}
                />
              </group>
              <group
                name="Plane001"
                position={[0, 0, 1.518]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1.218}
              >
                <mesh
                  name="Plane001_0"
                  geometry={nodes.Plane001_0.geometry}
                  material={materials["Material.002"]}
                  morphTargetDictionary={nodes.Plane001_0.morphTargetDictionary}
                  morphTargetInfluences={nodes.Plane001_0.morphTargetInfluences}
                />
              </group>
              <group
                name="Torus001"
                position={[-0.138, -0.061, -0.771]}
                rotation={[-0.14, -0.02, 0.097]}
                scale={[0.467, 0.432, 0.432]}
              >
                <mesh
                  name="Torus001_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Torus001_0.geometry}
                  material={materials.Material}
                />
              </group>
              <group
                name="Torus000"
                position={[0.095, -0.029, -0.88]}
                rotation={[-0.134, -0.046, 0.098]}
                scale={[0.454, 0.419, 0.303]}
              >
                <mesh
                  name="Torus000_0"
                  geometry={nodes.Torus000_0.geometry}
                  material={materials.Material}
                />
              </group>
            </group>
          </group>
        </group>
      </Float>
    </group>
  );
};

useGLTF.preload("/models/java.glb");

export default JavaLogo;
