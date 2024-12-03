import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { actinides } from './PeriodicTable';

const Actinoids = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Create a scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Create a grid of 3D objects
        const elementSize = 2; // Size of each element
        actinides.forEach((actinide, index) => {
            const x = (index % 15) * elementSize;
            const y = Math.floor(index / 15) * elementSize;
            const geometry = new THREE.BoxGeometry(elementSize, elementSize, 0.1);
            const material = new THREE.MeshBasicMaterial({ color: 0x44aa88, wireframe: true });
            const element = new THREE.Mesh(geometry, material);

            element.position.set(x, y, 0);
            scene.add(element);
        });

        // Position the camera
        camera.position.z = 50;

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();

        // Clean up on unmount
        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div className="text-white mt-6">
            <h2 className="text-lg font-bold mb-2 p-5 text-center">Actinoids</h2>
            <div ref={mountRef}></div>
        </div>
    );
};

export default Actinoids;
