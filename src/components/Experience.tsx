import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  return (
    <div className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-gray-400">My professional journey and academic background</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="w-6 h-6 text-blue-400 mr-3" />
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>
            
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-700 p-6 rounded-lg"
              >
                <h4 className="text-xl font-semibold">Web Developer</h4>
                <p className="text-blue-400">Coneixement India Pvt. Ltd</p>
                <p className="text-gray-400">June 2024 – Present</p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Collaborated on UI/UX design in Figma</li>
                  <li>• Improved UI functionality using JavaScript and React.js</li>
                  <li>• Managed content on WordPress</li>
                  <li>• Implemented data scraping solutions</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-700 p-6 rounded-lg"
              >
                <h4 className="text-xl font-semibold">Full-Stack Developer Intern</h4>
                <p className="text-blue-400">Paarsh Infotech Pvt. Ltd</p>
                <p className="text-gray-400">Feb 2024 – May 2024</p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Developed Finanza financial advisory app</li>
                  <li>• Worked with HTML, CSS, PHP, JavaScript</li>
                  <li>• Conducted manual testing</li>
                  <li>• Created automation scripts</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-6 h-6 text-blue-400 mr-3" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-700 p-6 rounded-lg"
              >
                <h4 className="text-xl font-semibold">Master of Computer Applications (MCA)</h4>
                <p className="text-blue-400">Sinhgad Institute of Management</p>
                <p className="text-gray-400">2022-2024</p>
                <p className="mt-2">CGPA: 8.09 | Aggregate: 74.21%</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-700 p-6 rounded-lg"
              >
                <h4 className="text-xl font-semibold">Bachelor of Computer Science (B.Sc.)</h4>
                <p className="text-blue-400">ACS College Navapur</p>
                <p className="text-gray-400">2019-2022</p>
                <p className="mt-2">Aggregate: 86.85%</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;