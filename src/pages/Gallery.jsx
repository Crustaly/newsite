import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Camera, Users, Trophy, Gamepad2 } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentCategory, setCurrentCategory] = useState('All')

  const categories = ['All', 'Events', 'News', 'Development']

  const galleryItems = [
  
 
    {
      id: 27,
      title: 'National AI Conference',
      category: 'Events',
      description: 'Talking about accessibility in gaming at the National AI Conference',
      image: '/images/gallery/crystal_yang_audemy_720.png',
      icon: Gamepad2,
      date: 'December 2022'
    },
    {
      id: 36,
      title: 'Intel Feature',
      category: 'News',
      description: 'Intel highlighted my work on Audemy Games!',
      image: '/images/gallery/Screenshot 2025-07-24 155925.png',
      icon: Gamepad2,
      date: 'March 2022'
    },
    {
      id: 23,
      title: 'Audemy Game User Testing Session',
      category: 'Development',
      description: 'Behind the scenes with visually impaired students in the Arizona School for the Blind and Visually Impaired.',
      image: '/images/gallery/visuallyImpairedArizonaStudent.png',
      icon: Users,
      date: 'April 2023'
    },
  
    {
      id: 28,
      title: 'Panel Speaker - Gaming in Education',
      category: 'Events',
      description: 'Introducing Audemy Games at ISTE, the largest education technology conference in the world!',
      image: '/images/gallery/image_720.png',
      icon: Gamepad2,
      date: 'November 2022'
    },
    {
      id: 33,
      title: 'Behind the Scenes of Audemy Games Video Shoot',
      category: 'News',
      description: 'BTS of one of our TV appearances!',
      image: '/images/gallery/IMG_0779.jpeg',
      icon: Users,
      date: 'June 2022'
    },
    {
      id: 30,
      title: 'CHI 2025',
      category: 'Events',
      description: 'Presented at CHI 2025 (the most prestigious human computing conference in the world!) Youngest presenter there :)',
      image: '/images/gallery/IMG_0489.jpeg',
      icon: Users,
      date: 'September 2022'
    },
  
 
    {
      id: 26,
      title: 'My First Ever TV Appearance',
      category: 'News',
      description: 'KatyYouthHacks on live TV for CW.',
      image: '/images/gallery/kyh2 (1).jpg',
      icon: Users,
      date: 'January 2023'
    },
    {
      id: 31,
      title: 'NPR Interview',
      category: 'News',
      description: 'Featured on NPR to discuss accessibility in gaming.',
      image: '/images/gallery/IMG_1542.jpeg',
      icon: Users,
      date: 'August 2022'
    },
    {
      id: 29,
      title: 'Guest Speaker for Audemy Games',
      category: 'Events',
      description: 'Talking about accessibility in gaming.',
      image: '/images/gallery/image_720 (1).png',
      icon: Gamepad2,
      date: 'October 2022'
    },
    {
      id: 8,
      title: 'ICMI Conference',
      category: 'Events',
      description: 'International conference on multimodal interaction (my first research conference!) in Paris',
      image: '/images/gallery/icmi.jpg',
      icon: Users,
      date: 'July 2024'
    },

    {
      id: 16,
      title: 'CodeWars Competition',
      category: 'Events',
      description: 'Won 1st out of 200 teams at CodeWars!',
      image: '/images/gallery/codewars.png',
      icon: Users,
      date: 'November 2023'
    },
    
  


    {
      id: 24,
      title: 'Iowa Student Testing',
      category: 'Development',
      description: 'More student testing in the Iowa Library for the Blind.',
      image: '/images/gallery/arizonaStudent.png',
      icon: Users,
      date: 'March 2023'
    },
  
  
   
    {
      id: 37,
      title: 'First Buzzle Prototype',
      category: 'Development',
      description: 'Early prototype of the Buzzle audio gaming console.',
      image: '/images/gallery/first buzzle prototype.png',
      icon: Gamepad2,
      date: 'January 2023'
    },
    {
      id: 5,
      title: 'Audemy Videos',
      category: 'Development',
      description: 'Audemy Games Education Team built videos for blind students to learn, reaching almost 200k students!',
      image: '/images/gallery/audemyvids.png',
      icon: Gamepad2,
      date: 'October 2024'
    },
  
    {
      id: 3,
      title: 'CW News Hackathon Interview',
      category: 'News',
      description: 'My hackathon co-founder and I got to do a live interview about accessibility.',
      image: '/images/gallery/newsstation-crystal_yang.jpeg',
      icon: Users,
      date: 'November 2024'
    },
    {
      id: 32,
      title: 'ISTE Live ',
      category: 'Events',
      description: 'Presenting at an education conference to promote Audemy Educational Games.',
      image: '/images/gallery/IMG_1661.jpeg',
      icon: Users,
      date: 'July 2022'
    },
   
    {
      id: 34,
      title: 'Platform Development',
      category: 'Development',
      description: 'Developing Audemy platform features.',
      image: '/images/gallery/Screenshot 2025-07-24 155951.png',
      icon: Gamepad2,
      date: 'May 2022'
    },
     {
      id: 52,
      title: 'Workshop Session',
      category: 'Development',
      description: 'Sneak peak into one of our 100+ workshops that we do for students!',
      image: '/images/gallery/5b46078e-65e0-42c8-a658-2939c6676a21.jpeg',
      icon: Gamepad2,
      date: 'February 2023'
    },
  
  
    {
      id: 35,
      title: 'Intel User Study Feature',
      category: 'Events',
      description: 'Featured on a new Intel user study.',
      image: '/images/gallery/Screenshot 2025-07-24 155723.png',
      icon: Gamepad2,
      date: 'April 2022'
    },
    {
      id: 35,
      title: 'Fox News Feature',
      category: 'News',
      description: 'Featured on Fox News to share about Accessible Gaming!',
      image: '/images/gallery/crystal yang fox.png',
      icon: Gamepad2,
      date: 'April 2022'
    },
  
   
    
  
  
  
    
    {
      id: 46,
      title: 'Game Team Meeting',
      category: 'Development',
      description: 'A peek inside our weekly meetings with the Audemy Games team.',
      image: '/images/gallery/IMG_1359.jpeg',
      icon: Users,
      date: 'August 2023'
    },
    {
      id: 47,
      title: 'Taco Bell Foundation Event',
      category: 'Events',
      description: 'Taco Bell celebrated our work with a special event!',
      image: '/images/gallery/IMG_1740.jpeg',
      icon: Users,
      date: 'July 2023'
    },
    {
      id: 48,
      title: 'Fox News Feature',
      category: 'Development',
      description: 'Audemy Games featured on Fox News!',
      image: '/images/gallery/IMG_0384.png',
      icon: Gamepad2,
      date: 'June 2023'
    },
    {
      id: 49,
      title: 'Media Feature',
      category: 'News',
      description: 'Behind the scenes of one of our media appearances.',
      image: '/images/gallery/IMG_0782.jpeg',
      icon: Users,
      date: 'May 2023'
    },
    {
      id: 50,
      title: 'Intel Panel',
      category: 'Events',
      description: 'Spoke about Intel and accessibility at a panel.',
      image: '/images/gallery/352b74a5-6d70-4949-82e4-5158b8897de1.jpeg',
      icon: Gamepad2,
      date: 'April 2023'
    },
    {
      id: 51,
      title: 'Intel Global Impact Festival Panel',
      category: 'Development',
      description: 'Spoke about my work on the Intel Global Impact Festival.',
      image: '/images/gallery/4742f63c-e12a-46f4-9b5b-126743e8b50c.jpeg',
      icon: Gamepad2,
      date: 'March 2023'
    },
   
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
      {/* Topographic Map Background */}
      <div className="absolute inset-0 page-background opacity-5"></div>
      
      <div className="relative z-10">
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
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
              I've always loved games. Wordle was my favorite, and I would play with my whole class every day. 
              Growing up as a gamer obsessed with titles like Among Us and Minecraft, I knew firsthand how games 
              could fuel education, creativity, and fun. But when I noticed that my blind friend couldn't join in, 
              I learned that for every 1 million games released, only about ten are fully accessible 
              for blind players — a jaw-dropping gap that inspired my mission to change the industry.
            </p>
          
            <p className="text-lg leading-relaxed text-gray-700 font-gamer font-semibold text-gamer-navy">
              Now, I'm rewriting what's possible in accessible gaming and creating a future where no player is left behind. 
              Take a look at our impact in action in the photo gallery!
            </p>
          
          {/* Story Section */}
         
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
              {/* Image */}
              <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center" style={{display: 'none'}}>
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
                    item.category === 'News' ? 'bg-green-100 text-green-800' :
                    item.category === 'Development' ? 'bg-purple-100 text-purple-800' :
                    item.category === 'Team' ? 'bg-orange-100 text-orange-800' :
                    'bg-gray-100 text-gray-800'
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
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center">
                    <selectedImage.icon size={80} className="text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">{selectedImage.title}</p>
                  </div>
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
                    selectedImage.category === 'News' ? 'bg-green-100 text-green-800' :
                    selectedImage.category === 'Development' ? 'bg-purple-100 text-purple-800' :
                    selectedImage.category === 'Team' ? 'bg-orange-100 text-orange-800' :
                    'bg-gray-100 text-gray-800'
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
    </div>
  )
}

export default Gallery 