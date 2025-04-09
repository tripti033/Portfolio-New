"use client";

import { forwardRef, MutableRefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";
import { Mesh } from "three";

const SimpleGlobe = forwardRef<Mesh>((props, ref) => {
    const gridTexture = new THREE.TextureLoader().load("/grid.svg");
    gridTexture.wrapS = THREE.RepeatWrapping;
    gridTexture.wrapT = THREE.RepeatWrapping;
    gridTexture.repeat.set(2, 1);

    useFrame(() => {
        if (ref && (ref as MutableRefObject<Mesh>).current) {
            (ref as MutableRefObject<Mesh>).current.rotation.y += 0.001;
        }
    });

    return (
        <Sphere ref={ref} args={[1, 64, 64]}>
            <meshPhongMaterial
                map={gridTexture}
                transparent
                opacity={0.9}
                color="#161A31"
                emissive="#161A31"
                emissiveIntensity={0.2}
            />
        </Sphere>
    );
});

SimpleGlobe.displayName = "SimpleGlobe";

export default SimpleGlobe; 