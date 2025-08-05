import { Linkedin, Mail, Github } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/crystal-yang',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:crystal@example.com',
      color: 'hover:text-gamer-hot-pink'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/crystal-yang',
      color: 'hover:text-gray-400'
    }
  ]

  return (
    <footer className="bg-gamer-navy text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 md:mb-0"
          >
            <p className="text-sm font-medium">
              © 2024 Crystal Yang. All rights reserved.
            </p>
          </motion.div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white transition-colors duration-300 ${social.color} flex items-center space-x-2`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={20} />
                <span className="text-sm font-medium">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-center"
        >
         
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 