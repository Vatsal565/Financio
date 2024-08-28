// components/Avatar.tsx
"use client"

import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

interface AvatarProps {
  modelPath: string;
  name: string;
  role: string;
  linkedinUrl: string;
  email: string;
  githubUrl: string;
}

function AvatarModel({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={[5, 5, 5]} position={[0, -2, 0]} />;
}

const Avatar: React.FC<AvatarProps> = ({ modelPath, name, role, linkedinUrl, email, githubUrl }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-48 h-96 m-5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Canvas camera={{ position: [0, 7, 10] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
        <Suspense fallback={null}>
          <AvatarModel modelPath={modelPath} />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div
        className={`absolute bottom-3 left-1/2 transform -translate-x-1/2 p-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-lg border border-gray-300 transition-all duration-300 ${
          hovered ? 'w-72 opacity-100' : 'w-0 opacity-0'
        }`}
      >
        <div className="text-xl font-bold mb-1">{name}</div>
        <div className="text-md mb-2 italic">{role}</div>
        <div className="flex justify-center items-center space-x-2 mb-2">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-black transition-all">
            <FaGithub size={24} />
          </a>
          <a href={`mailto:${email}`} className="text-white hover:text-cyan-500 transition-all">
            <FaEnvelope size={24} />
          </a>
        </div>
        <div className="text-sm mt-2">
          <p className="text-sm">Feel free to connect with me!</p>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
