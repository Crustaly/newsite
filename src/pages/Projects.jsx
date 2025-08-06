import { motion } from 'framer-motion'
import { ExternalLink, Gamepad2, Code, Users, BookOpen } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 2,
      title: "Audemy Games - Games Library",
      subtitle: "Audio Games for Blind Students",
      description:
        "Used in every U.S. state school for the blind. Boosted math scores by 28% in just one week through screen-free audio games.",
      technologies: ["React", "Voice UX", "Game Design"],
      image: "/images/projects/audemygames.png",
      live: "#",
      icon: Gamepad2,
      color: "from-yellow-400 to-orange-500",
      stats: {
        states: "50",
        impacted: "1 in 5 blind students",
        boost: "+28% math scores",
      },
    },
    {
      id: 3,
      title: "Audemy Games - Gaming Toolkits",
      subtitle: "Accessibility Mods for AAA Titles",
      description:
        "Created 100+ toolkits to make mainstream games accessible (Minecraft, Call of Duty, Roblox). Used by blind players in 136 countries.",
      technologies: ["Modding", "Accessibility APIs", "Unity"],
      image: "/images/projects/-projects.png",
      live: "#",
      icon: Code,
      color: "from-indigo-500 to-blue-600",
      stats: {
        toolkits: "100+",
        countries: "136",
        studios: "60+ ",
      },
    },
    {
      id: 4,
      title: "Audemy Games - Accessibility Studio",
      subtitle: "Testing Network for Inclusive Game Dev",
      description:
        "Connects indie studios with 30+ blind testers and assistive tech experts. Helps ensure real-world accessibility before release.",
      technologies: ["Product Ops", "Research", "Outreach"],
      image: "/images/projects/-projects.png",
      live: "#",
      icon: Users,
      color: "from-green-500 to-emerald-600",
      stats: {
        testers: "30+",
        games: "50+",
        improvements: "100 logged",
      },
    },
    {
      id: 5,
      title: "Audemy Games - Buzzle Gaming Console",
      subtitle: "The First Audio-Only Gaming Console",
      description:
        "World's first fully audio-based gaming console for blind users. Uses braille game pieces and 30 built-in accessible titles.",
      technologies: ["Embedded Audio", "3D Design", "Hardware UX"],
      image: "/images/projects/buzzlehand.png",
      live: "#",
      icon: Gamepad2,
      color: "from-red-400 to-pink-600",
      stats: {
        games: "30 titles",
        users: "16 blind testers",
        launch: "2026",
      },
    },
    {
      id: 6,
      title: "Heard-le",
      subtitle: "Accessible Audio Wordle Game",
      description:
        "Built for a blind friend who couldn't play Wordle. Presented at ACM ICMI in Paris. Fully audio-based gameplay.",
      technologies: ["Web Audio API", "Python", "Voice Interface"],
      image: "/images/projects/heardle-image.png",
      live: "#",
      icon: Code,
      color: "from-purple-500 to-fuchsia-600",
      stats: {
        event: "ACM ICMI Paris",
        users: "100+ testers",
        type: "Audio-only",
      },
    },
    {
      id: 7,
      title: "Tacti-coords",
      subtitle: "Audio-Tactile Coordinate System",
      description:
        "Built a tactile-audio graph system to teach spatial math to blind students. Presented at ACM in Costa Rica.",
      technologies: ["Arduino", "Tactile UX", "Sound Feedback"],
      image: "/images/projects/tacticoords.png",
      live: "#",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      stats: {
        interface: "Tactile + Audio",
        users: "30 students",
        event: "ACM Costa Rica",
      },
    },
    {
      id: 8,
      title: "KatyYouthHacks",
      subtitle: "Hackathon for Social Impact",
      description:
        "Founded and led KatyYouthHacks to tackle accessibility and sustainability. 1,300+ students from 27 countries. $100K+ prizes awarded.",
      technologies: ["Leadership", "Event Design", "Mentorship"],
      image: "/images/projects/katyyouthhacks.png",
      live: "#",
      icon: Users,
      color: "from-orange-500 to-yellow-400",
      stats: {
        participants: "1,300+",
        countries: "37",
        prizes: "$100K+",
      },
    },
    {
      id: 9,
      title: "Audemy Games Research Paper",
      subtitle: "Academic Publishing in Accessibility",
      description:
        "Co-authored and presented research on audio-based accessible game design. Backed by field data and user studies.",
      technologies: ["UX Research", "Academic Writing", "Data Analysis"],
      image: "/images/projects/audemypaper.png",
      live: "#",
      icon: BookOpen,
      color: "from-gray-600 to-slate-700",
      stats: {
        conferences: "ACM x3",
        citations: "15+",
        downloads: "1,200+",
      },
    },
    {
      id: 10,
      title: "alGIRLithm",
      subtitle: "Tech Community for Girls in CS",
      description:
        "Built a support network for girls in competitive programming. 300+ participants from 10+ countries. $12K raised.",
      technologies: ["Community Building", "Mentorship", "Outreach"],
      image: "/images/projects/algirlithm.png",
      live: "#",
      icon: Users,
      color: "from-rose-500 to-red-600",
      stats: {
        participants: "300+",
        countries: "10+",
        funding: "$12K+",
      },
    },
  ]

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
            My <span className="text-gamer-hot-pink">Projects</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Building innovative solutions to make gaming accessible for everyone. 
            Each project focuses on breaking down barriers and creating inclusive experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="gamer-card p-6 group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                    <project.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-gamer font-bold text-gamer-navy group-hover:text-gamer-hot-pink transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">{project.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Project Image */}
              <div className="w-full h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center">
                    <project.icon size={48} className="text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">{project.title} Preview</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {project.description}
              </p>



              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-lg font-gamer font-bold text-gamer-hot-pink">{value}</div>
                    <div className="text-xs text-gray-600 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* Project Link Button */}
              <div className="mt-6">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-gamer-navy text-white rounded-lg font-gamer font-semibold hover:bg-gamer-hot-pink transition-all duration-300 transform hover:scale-105 group/link"
                >
                  <span className="text-lg">Visit {project.title}</span>
                  <ExternalLink size={20} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-gamer font-bold text-gamer-navy mb-4">
            Want to collaborate on accessibility projects?
          </h2>
          <p className="text-gray-700 mb-6">
            I'm always interested in working with developers, designers, and advocates 
            who share the vision of making gaming accessible for everyone.
          </p>
          <button className="gamer-button">
            Get In Touch
          </button>
        </motion.div>
      </div>
      </div>
    </div>
  )
}

export default Projects 