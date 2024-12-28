// Component for 3D floating tech stack icons in a circular ring
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';

// Define tech stack with colors and icons (using SVG paths)
const techStack = [
  { 
    name: 'JAVA', 
    color: '#f89820',
    icon: '🔧'
  },
  { 
    name: 'HTML', 
    color: '#e34c26',
    icon: '🌐'
  },
  { 
    name: 'CSS', 
    color: '#264de4',
    icon: '🎨'
  },
  { 
    name: 'SQL', 
    color: '#00758f',
    icon: '💾'
  },
  { 
    name: 'REACT', 
    color: '#61dbfb',
    icon: '⚛️'
  },
  { 
    name: 'PYTHON', 
    color: '#4B8BBE',
    icon: '🐍'
  },
  { 
    name: 'SELENIUM', 
    color: '#43B02A',
    icon: '🤖'
  },
  { 
    name: 'RPA', 
    color: '#fa4616',
    icon: '⚙️'
  },
];

// Individual tech icon component
const TechIcon = ({ name, color, icon, angle, radius }) => {
  const iconRef = useRef();
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const currentAngle = angle + time * 0.5;
    iconRef.current.position.x = Math.cos(currentAngle) * radius;
    iconRef.current.position.z = Math.sin(currentAngle) * radius;
    iconRef.current.rotation.y = -currentAngle;
  });

  return (
    <group ref={iconRef}>
      {/* Icon card */}
      <mesh>
        <boxGeometry args={[1.2, 1.2, 0.1]} />
        <meshPhongMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
          transparent
          opacity={0.9}
          shininess={100}
        />
      </mesh>
      
      {/* Icon and text */}
      <Html
        transform
        position={[0, 0, 0.06]}
        center
        className="pointer-events-none"
      >
        <div className="flex flex-col items-center justify-center w-24 h-24">
          <span className="text-3xl mb-2">{icon}</span>
          <span className="text-white text-sm font-bold">{name}</span>
        </div>
      </Html>
    </group>
  );
};

// Ring component that holds all icons
const IconRing = () => {
  const ringRef = useRef();
  const radius = 4;

  return (
    <group ref={ringRef}>
      {techStack.map((tech, index) => {
        const angle = (index / techStack.length) * Math.PI * 2;
        return (
          <TechIcon
            key={index}
            {...tech}
            angle={angle}
            radius={radius}
          />
        );
      })}
    </group>
  );
};

// Main scene component
const TechStackScene = () => {
  return (
    <group>
      {/* Enhanced lighting setup */}
      <ambientLight intensity={0.7} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1.5}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={0.5} />

      {/* Icon ring */}
      <IconRing />
    </group>
  );
};

export default TechStackScene;