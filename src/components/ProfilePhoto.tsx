// Component for displaying the profile photo and basic information
import React from 'react';
import { motion } from 'framer-motion';

const ProfilePhoto = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-48 h-48 mx-auto mb-8"
    >
      {/* Profile image with border and shadow effects */}
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=400"
        alt="Jinesh Singatkar"
        className="w-full h-full rounded-full object-cover border-4 border-blue-400 shadow-lg"
      />
      {/* Decorative circle animation */}
      <motion.div
        animate={{ 
          rotate: 360,
          borderColor: ['#60A5FA', '#3B82F6', '#2563EB', '#60A5FA']
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-2 rounded-full border-2 border-blue-400 border-dashed"
      />
    </motion.div>
  );
};

export default ProfilePhoto;