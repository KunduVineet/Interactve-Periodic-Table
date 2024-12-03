import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeJSBackground = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x111111); // Background color
    containerRef.current.appendChild(renderer.domElement);

    // Add nucleus (protons and neutrons)
    const nucleusGeometry = new THREE.SphereGeometry(1, 32, 32);
    const nucleusMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    scene.add(nucleus);

    // Add protons and neutrons to the nucleus
    const protonMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red for protons
    const neutronMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff }); // Blue for neutrons

    // Create protons and neutrons in the nucleus
    for (let i = 0; i < 8; i++) {
      const particle = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 16), protonMaterial);
      particle.position.set(Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.5);
      scene.add(particle);
    }
    for (let i = 0; i < 8; i++) {
      const particle = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 16), neutronMaterial);
      particle.position.set(Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.5);
      scene.add(particle);
    }

    // Create electrons and their paths
    const electronMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green for electrons
    const electronSize = 0.2; // Increased size of electrons
    const electronCountFirstShell = 2;
    const electronCountSecondShell = 6;

    // First shell: 2 electrons with orbit path
    const firstOrbitRadius = 1.5;
    const firstOrbitPoints = [];
    for (let i = 0; i < 100; i++) {
      const angle = (i / 100) * Math.PI * 2;
      firstOrbitPoints.push(new THREE.Vector3(
        firstOrbitRadius * Math.cos(angle),
        firstOrbitRadius * Math.sin(angle),
        0
      ));
    }
    const firstOrbitGeometry = new THREE.BufferGeometry().setFromPoints(firstOrbitPoints);
    const firstOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.5, transparent: true });
    const firstOrbit = new THREE.Line(firstOrbitGeometry, firstOrbitMaterial);
    scene.add(firstOrbit);

    // Second shell: 6 electrons with orbit path
    const secondOrbitRadius = 3;
    const secondOrbitPoints = [];
    for (let i = 0; i < 100; i++) {
      const angle = (i / 100) * Math.PI * 2;
      secondOrbitPoints.push(new THREE.Vector3(
        secondOrbitRadius * Math.cos(angle),
        secondOrbitRadius * Math.sin(angle),
        0
      ));
    }
    const secondOrbitGeometry = new THREE.BufferGeometry().setFromPoints(secondOrbitPoints);
    const secondOrbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.5, transparent: true });
    const secondOrbit = new THREE.Line(secondOrbitGeometry, secondOrbitMaterial);
    scene.add(secondOrbit);

    // Create electrons for the first shell
    const electrons = [];
    for (let i = 0; i < electronCountFirstShell; i++) {
      const electron = new THREE.Mesh(new THREE.SphereGeometry(electronSize, 16, 16), electronMaterial);
      const angle = (i * Math.PI * 2) / electronCountFirstShell;
      electron.position.set(
        firstOrbitRadius * Math.cos(angle),
        firstOrbitRadius * Math.sin(angle),
        0
      );
      electrons.push(electron);
      scene.add(electron);
    }

    // Create electrons for the second shell
    for (let i = 0; i < electronCountSecondShell; i++) {
      const electron = new THREE.Mesh(new THREE.SphereGeometry(electronSize, 16, 16), electronMaterial);
      const angle = (i * Math.PI * 2) / electronCountSecondShell;
      electron.position.set(
        secondOrbitRadius * Math.cos(angle),
        secondOrbitRadius * Math.sin(angle),
        0
      );
      electrons.push(electron);
      scene.add(electron);
    }

    // Set up the camera position
    camera.position.z = 10;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate electrons around the nucleus
      electrons.forEach((electron, index) => {
        const orbitRadius = index < electronCountFirstShell ? firstOrbitRadius : secondOrbitRadius;
        const numElectronsInOrbit = index < electronCountFirstShell ? electronCountFirstShell : electronCountSecondShell;
        const angle = (Date.now() * 0.001 + index) * (Math.PI * 2) / numElectronsInOrbit;
        electron.position.x = orbitRadius * Math.cos(angle);
        electron.position.y = orbitRadius * Math.sin(angle);
      });

      // Render the scene
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Place behind other content
      }}
    />
  );
};

export default ThreeJSBackground;
