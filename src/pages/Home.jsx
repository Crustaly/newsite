import { motion } from 'framer-motion'
import { ArrowRight, Gamepad2, Accessibility } from 'lucide-react'

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 geometric-pattern opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl font-gamer font-bold text-gamer-navy leading-tight"
              >
                I'm Crystal Yang, a{' '}
                <span className="text-gamer-hot-pink">gaming + accessibility</span> enthusiast.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                I'm a freshman at UPenn M&T (Wharton + CS). Currently, I'm building{' '}
                <span className="font-semibold text-gamer-navy">Audemy</span>, a gaming platform for blind gamers, 
                and <span className="font-semibold text-gamer-navy">Buzzle</span>, the world's first audio-only gaming console for blind users. 
                I'm on a mission to make gaming more accessible for everyone.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="gamer-button flex items-center justify-center space-x-2">
                  <span>View My Projects</span>
                  <ArrowRight size={20} />
                </button>
                <button className="bg-transparent border-2 border-gamer-navy text-gamer-navy px-6 py-3 rounded-lg font-gamer font-semibold hover:bg-gamer-navy hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Read My Story</span>
                  <Gamepad2 size={20} />
                </button>
              </motion.div>

              
            </motion.div>

            {/* Headshot */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-100 h-100 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-gamer-pink to-gamer-hot-pink p-2 animate-glow">
                  <div className="w-full h-full rounded-full bg-white p-2">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src="/images/crystal yang .jpeg"
                        alt="Crystal Yang - Gaming and Accessibility Enthusiast"
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center rounded-full" style={{display: 'none'}}>
                        <div className="text-center p-8">
                          <Accessibility size={80} className="text-gamer-navy mx-auto mb-4" />
                          <p className="text-gamer-navy font-gamer font-semibold">Crystal Yang</p>
                          <p className="text-sm text-gray-600 mt-2">Headshot</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gamer-hot-pink rounded-full opacity-80"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gamer-navy rounded-full opacity-80"
                />
              </div>
            </motion.div>
          </div>
        </div>

       
      </section>
    </div>
  )
}

export default Home 