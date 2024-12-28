// Main hero section component
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Trophy } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ProfilePhoto from './ProfilePhoto';
import TechStackScene from './TechStackScene';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-8 bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Left section with profile photo and text */}
      <div className="lg:w-1/2 text-white z-10 flex flex-col items-center lg:items-start">
        {/* Profile photo */}
        <div className="mb-8 lg:mb-12">
          <ProfilePhoto />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-center lg:text-left">
            Hi, I'm Jinesh Singatkar
          </h1>
          <h2 className="text-2xl lg:text-3xl text-gray-300 mb-6 text-center lg:text-left">
            Quality Assurance Tester & Full Stack Developer
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-xl text-center lg:text-left">
            Passionate about creating robust software solutions and ensuring top-notch quality through comprehensive testing methodologies.
          </p>

          {/* Coding profiles */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <a 
              href="https://leetcode.com/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Code2 size={20} className="text-[#FFA116]" />
              <span>LeetCode</span>
              <span className="bg-[#FFA116] text-black px-2 rounded">200+</span>
            </a>
            <a 
              href="https://www.hackerrank.com/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Trophy size={20} className="text-[#00EA64]" />
              <span>HackerRank</span>
              <span className="bg-[#00EA64] text-black px-2 rounded">5⭐</span>
            </a>
          </div>

          {/* Social links */}
          <div className="flex space-x-4 justify-center lg:justify-start">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-2 hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="p-2 hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" 
               className="p-2 hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right section with 3D tech stack */}
      <div className="lg:w-1/2 h-[400px] lg:h-[600px]">
        <Canvas 
          camera={{ position: [0, 0, 8], fov: 45 }}
          style={{ background: 'transparent' }}
        >
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
          <TechStackScene />
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;