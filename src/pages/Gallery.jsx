import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Camera, Users, Trophy, Gamepad2 } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentCategory, setCurrentCategory] = useState('All')

  const categories = ['All', 'Events', 'Gaming', 'Awards', 'Team']

  const galleryItems = [
    {
      id: 1,
      title: 'Buzzle Console Prototype',
      category: 'Gaming',
      description: 'First working prototype of the Buzzle audio-only gaming console',
      image: '/assets/buzzle-prototype.jpg',
      icon: Gamepad2,
      date: 'December 2024'
    },
    {
      id: 2,
      title: 'Student Innovator Award Ceremony',
      category: 'Awards',
      description: 'Receiving the Student Innovator Award for accessibility work',
      image: '/assets/award-ceremony.jpg',
      icon: Trophy,
      date: 'October 2024'
    },
    {
      id: 3,
      title: 'Audemy Platform Launch',
      category: 'Events',
      description: 'Launch event for the Audemy gaming platform',
      image: '/assets/audemy-launch.jpg',
      icon: Users,
      date: 'November 2024'
    },
    {
      id: 4,
      title: 'Accessibility Testing Session',
      category: 'Gaming',
      description: 'Testing Audemy with blind gamers',
      image: '/assets/testing-session.jpg',
      icon: Gamepad2,
      date: 'September 2024'
    },
    {
      id: 5,
      title: 'Tech Conference Presentation',
      category: 'Events',
      description: 'Presenting on gaming accessibility at TechCrunch Disrupt',
      image: '/assets/tech-conference.jpg',
      icon: Users,
      date: 'August 2024'
    },
    {
      id: 6,
      title: 'Team Building Workshop',
      category: 'Team',
      description: 'Working with the development team on accessibility features',
      image: '/assets/team-workshop.jpg',
      icon: Users,
      date: 'July 2024'
    },
    {
      id: 7,
      title: 'Buzzle User Testing',
      category: 'Gaming',
      description: 'User testing session with blind gamers',
      image: '/assets/user-testing.jpg',
      icon: Gamepad2,
      date: 'June 2024'
    },
    {
      id: 8,
      title: 'Accessibility Hackathon',
      category: 'Events',
      description: 'Winning team at the Accessibility Hackathon',
      image: '/assets/hackathon.jpg',
      icon: Trophy,
      date: 'May 2024'
    },
    {
      id: 9,
      title: 'Gaming Industry Meetup',
      category: 'Events',
      description: 'Networking with gaming industry leaders',
      image: '/assets/industry-meetup.jpg',
      icon: Users,
      date: 'April 2024'
    },
    {
      id: 10,
      title: 'Audemy Beta Testing',
      category: 'Gaming',
      description: 'Beta testing session with early users',
      image: '/assets/beta-testing.jpg',
      icon: Gamepad2,
      date: 'March 2024'
    },
    {
      id: 11,
      title: 'Accessibility Award',
      category: 'Awards',
      description: 'Receiving the Accessibility Innovation Award',
      image: '/assets/accessibility-award.jpg',
      icon: Trophy,
      date: 'February 2024'
    },
    {
      id: 12,
      title: 'Development Team',
      category: 'Team',
      description: 'The amazing team behind Audemy and Buzzle',
      image: '/assets/development-team.jpg',
      icon: Users,
      date: 'January 2024'
    }
  ]

  const filteredItems = currentCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === currentCategory)

  const openModal = (item) => {
    setSelectedImage(item)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setSelectedImage(filteredItems[nextIndex])
  }

  const prevImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id)
    const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1
    setSelectedImage(filteredItems[prevIndex])
  }

  return (
    <div className="pt-16 min-h-screen bg-gamer-light-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-gamer font-bold text-gamer-navy mb-6">
            Photo <span className="text-gamer-hot-pink">Gallery</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Behind the scenes of my journey in gaming accessibility, from development milestones 
            to award ceremonies and team collaborations.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setCurrentCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                currentCategory === category
                  ? 'bg-gamer-navy text-white shadow-lg'
                  : 'bg-white text-gamer-navy border-2 border-gamer-navy hover:bg-gamer-navy hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="gamer-card overflow-hidden group cursor-pointer"
              onClick={() => openModal(item)}
            >
              {/* Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <item.icon size={48} className="text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">{item.title}</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <Camera size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    item.category === 'Events' ? 'bg-blue-100 text-blue-800' :
                    item.category === 'Gaming' ? 'bg-green-100 text-green-800' :
                    item.category === 'Awards' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
                <h3 className="font-gamer font-bold text-gamer-navy mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Camera size={64} className="text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-gamer font-bold text-gamer-navy mb-2">No photos found</h3>
            <p className="text-gray-600">Try selecting a different category.</p>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <div>
                  <h3 className="text-xl font-gamer font-bold text-gamer-navy">{selectedImage.title}</h3>
                  <p className="text-sm text-gray-600">{selectedImage.date}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gamer-navy transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Image */}
              <div className="relative h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <selectedImage.icon size={80} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">{selectedImage.title}</p>
                </div>
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <ChevronLeft size={24} className="text-gamer-navy" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <ChevronRight size={24} className="text-gamer-navy" />
                </button>
              </div>

              {/* Modal Footer */}
              <div className="p-4">
                <p className="text-gray-700">{selectedImage.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    selectedImage.category === 'Events' ? 'bg-blue-100 text-blue-800' :
                    selectedImage.category === 'Gaming' ? 'bg-green-100 text-green-800' :
                    selectedImage.category === 'Awards' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {selectedImage.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {filteredItems.findIndex(item => item.id === selectedImage.id) + 1} of {filteredItems.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery 