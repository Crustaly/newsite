import { motion } from 'framer-motion'
import { ExternalLink, Calendar, Newspaper, Award } from 'lucide-react'

const Press = () => {
  const pressItems = [
    {
      id: 1,
      title: 'Katy Student Creates Gaming Platform for Blind Players',
      publication: 'Fox News',
      date: 'June 2025',
      url: 'https://www.fox26houston.com/news/katy-student-develops-online-tool-help-blind-students',
      excerpt: 'Crystal Yang, a Katy ISD student, has developed an innovative gaming platform designed to make video games accessible to blind players through audio-based gameplay.',
      category: 'Feature',
      image: '/images/press/crystal yang fox.png'
    },
    {
      id: 2,
      title: 'Hello Houston: Crystal Yang on Gaming Accessibility',
      publication: 'NPR',
      date: 'June 2025',
      url: 'https://www.houstonpublicmedia.org/articles/shows/hello-houston/2025/06/10/523583/hello-houston-june-10-2025/',
      excerpt: 'NPR Houston features Crystal Yang discussing her groundbreaking work in gaming accessibility and her mission to make video games playable for blind gamers.',
      category: 'Interview',
      image: '/images/press/crystal yang npr.png'
    },
    {
      id: 3,
      title: 'The CW News Feature: Crystal Yang\'s Gaming Revolution',
      publication: 'The CW',
      date: 'May 2025',
      url: 'https://www.youtube.com/watch?v=7y_vTaRb6Mc&t=2382s',
      excerpt: 'The CW News highlights Crystal Yang\'s innovative approach to gaming accessibility and her impact on making video games inclusive for blind players.',
      category: 'Feature',
      image: '/images/press/crystal yang cw.png'
    },
    {
      id: 4,
      title: 'Katy ISD Student Creates Audio-Based Game Platform',
      publication: 'Community Impact',
      date: 'June 2024',
      url: 'https://communityimpact.com/houston/katy-north/nonprofit/2024/06/27/katy-isd-student-creates-audio-based-education-games-for-visually-impaired-children/',
      excerpt: 'Community Impact Newspaper covers Crystal Yang\'s development of audio-based educational gaming platform specifically designed for blind gamers.',
      category: 'Local',
      image: '/images/press/communityimpact.png'
    },
    {
      id: 5,
      title: 'PBS Feature: Crystal Yang on AI Audio Games for Blind Students',
      publication: 'PBS',
      date: 'May 2024',
      url: 'https://www.youtube.com/watch?v=-Cd82j8v7Dc&ab',
      excerpt: 'PBS features Crystal Yang discussing her innovative gaming tools and their impact on making video games accessible for blind players.',
      category: 'Feature',
      image: '/images/press/crystal yang pbs.png'
    },
    {
      id: 6,
      title: 'Championing Accessibility in Gaming for Blind and Visually Impaired Students',
      publication: 'Points of Light',
      date: 'April 2024',
      url: 'https://www.pointsoflight.org/awards/championing-accessibility-in-education-for-blind-and-visually-impaired-students/',
      excerpt: 'Crystal Yang receives recognition from Points of Light for her outstanding contributions to gaming accessibility for blind and visually impaired players.',
      category: 'Award',
      image: '/images/press/crystal_yang_pointoflight.png'
    },
    {
      id: 7,
      title: 'Youth Service America: Crystal Yang, Tech Accessibility Pioneer',
      publication: 'Youth Service America',
      date: 'March 2024',
      url: 'https://ysa.org/crystalyang/',
      excerpt: 'Youth Service America profiles Crystal Yang as a young leader making significant impact through innovative gaming accessibility solutions and community service.',
      category: 'Feature',
      image: '/images/press/crystal yang ysa.png'
    },
    {
      id: 8,
      title: 'Using AI and Tech for Educational Accessibility: 5 Tips for Developers',
      publication: 'Tech & Learning',
      date: 'February 2024',
      url: 'https://www.techlearning.com/how-to/using-ai-and-tech-for-accessibility-5-tips-for-educators-and-students',
      excerpt: 'Tech & Learning features Crystal Yang\'s insights on leveraging AI and technology to create more accessible gaming experiences.',
      category: 'Interview',
      image: '/images/press/crystal-yang-audemy.png'
    },
    {
      id: 9,
      title: 'Estudiante de Katy ISD Desarrolla Plataforma de Juegos',
      publication: 'El Venezolano News',
      date: 'January 2024',
      url: 'https://www.elvenezolanohouston.com/estudiante-de-katy-isd-desarrolla-herramienta-online-para-ayudar-a-alumnos-ciegos/',
      excerpt: 'El Venezolano News covers Crystal Yang\'s work in Spanish, highlighting her development of gaming platform to help blind players.',
      category: 'Local',
      image: '/images/press/crystal yang venezolano.png'
    },
    {
      id: 10,
      title: 'Devpost User Story: Crystal Yang\'s Gaming Journey',
      publication: 'Devpost',
      date: 'December 2023',
      url: 'https://info.devpost.com/blog/user-story-crystal',
      excerpt: 'Devpost features Crystal Yang\'s journey as a developer and her innovative approach to creating accessible gaming solutions.',
      category: 'Feature',
      image: '/images/press/crystal yang devpost.png'
    }
  ]

  const categories = ['All', 'Feature', 'Interview', 'Award', 'Local']

  return (
    <div className="pt-16 min-h-screen bg-gamer-light-pink page-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-gamer font-bold text-gamer-navy mb-6">
            Press & <span className="text-gamer-hot-pink">Media</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Featured in leading tech publications and media outlets for my work in 
            gaming accessibility and inclusive technology innovation.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="text-center">
            <div className="text-3xl font-gamer font-bold text-gamer-hot-pink">34</div>
            <div className="text-sm text-gray-600">Media Features</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-gamer font-bold text-gamer-hot-pink">2.5M+</div>
            <div className="text-sm text-gray-600">Total Reach</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-gamer font-bold text-gamer-hot-pink">5</div>
            <div className="text-sm text-gray-600">TV Appearances</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-gamer font-bold text-gamer-hot-pink">15+</div>
            <div className="text-sm text-gray-600">Awards</div>
          </div>
        </motion.div>

        {/* Press Items */}
        <div className="space-y-6">
          {pressItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="gamer-card p-6 group hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.category === 'Feature' ? 'bg-blue-100 text-blue-800' :
                      item.category === 'Interview' ? 'bg-green-100 text-green-800' :
                      item.category === 'Award' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {item.category}
                    </span>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Calendar size={14} />
                      <span className="text-sm">{item.date}</span>
                    </div>
                  </div>
                  
                  {/* Prominent Publication Name */}
                  <div className="mb-4">
                    <div className="inline-flex items-center space-x-2 bg-gamer-navy text-white px-4 py-2 rounded-lg">
                      <Newspaper size={18} />
                      <span className="font-gamer font-bold text-lg">{item.publication}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-gamer font-bold text-gamer-navy group-hover:text-gamer-hot-pink transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center justify-end">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gamer-navy text-white px-4 py-2 rounded-lg font-gamer font-semibold hover:bg-gamer-hot-pink transition-all duration-300 transform hover:scale-105 group/link"
                    >
                      <span className="text-sm font-medium">Read Article</span>
                      <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Article Image */}
                <div className="lg:flex-shrink-0">
                  <div className="w-70 h-59 lg:w-96 lg:h-55 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={`${item.publication} article about Crystal Yang`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center" style={{display: 'none'}}>
                      <div className="text-center">
                        <Newspaper size={48} className="text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500 font-medium">{item.publication}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Media & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-5xl font-gamer font-bold text-gamer-navy mb-4 text-center">
            COMPREHENSIVE <span className="text-gamer-hot-pink">MEDIA PORTFOLIO</span>
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            Featured across 50+ major media outlets, recognized with prestigious awards, 
            published in leading academic journals, and honored with multiple scholarships worldwide.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Media Coverage */}
            <div className="gamer-card p-8">
              <h3 className="text-3xl font-gamer font-bold text-gamer-navy mb-6 flex items-center">
                📰 <span className="ml-3">Additional Media Coverage</span>
               
              </h3>
              <div className="space-y-4 text-lg">
                <a href="https://www.iheart.com/podcast/269-hello-houston-the-commuter-271597362/episode/hello-houston-the-commuter-cut-280206632/" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">🎙️ iHeartRadio - Hello Houston Podcast</a>
                <a href="https://www.devdiscourse.com/article/education/3358683-ai-powered-audio-learning-boosts-accessibility-for-visually-impaired-students" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">🌐 Devdiscourse - AI-Powered Audio Learning</a>
                <a href="https://www.conf42.com/JavaScript_2024_Crystal_Yang_16_socialimpact_programming" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">💻 Conf42 - JavaScript Conference Speaker</a>
                <a href="https://canvasrebel.com/meet-crystal-yang/" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">🎨 Canvas Rebel - Meet Crystal Yang</a>
                <a href="https://flipboardedu.substack.com/p/she-solved-a-friends-problem-now" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">📱 Flipboard EDU - She Solved a Friend's Problem</a>
                <a href="https://medium.com/authority-magazine/social-impact-heroes-why-how-crystal-yang-of-audemy-is-helping-to-change-our-world-59d47f21ac81" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">⭐ Authority Magazine - Social Impact Heroes</a>
                <a href="https://voyagehouston.com/interview/inspiring-conversations-with-crystal-yang-of-audemy" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">🌆 Voyage Houston - Inspiring Conversations</a>
                <a href="https://boldjourney.com/meet-crystal-yang/" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">🚀 Bold Journey - Meet Crystal Yang</a>
                <a href="https://www.instagram.com/c_hubworld/reel/DLkIX7TSlqK/" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">📸 C-HubWorld - Instagram Feature</a>
                <a href="https://disabilitynewsdigest.substack.com/p/the-last-leg-promotes-disability" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">♿ Disability News Digest - The Last Leg</a>
                <a href="https://citizenportal.ai/articles/3296765/Texas/Katy-ISD-honors-Tompkins-High-School-Horizon-String-Quartet-state-champions" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">🏆 CitizenPortal - State Champions Feature</a>
              </div>
            </div>

          

            {/* Awards & Recognition */}
            <div className="gamer-card p-8">
              <h3 className="text-3xl font-gamer font-bold text-gamer-navy mb-6 flex items-center">
                🏆 <span className="ml-3">Awards & Recognition</span>
             
              </h3>
              <div className="space-y-4 text-lg">
                <a href="https://www.intel.com/content/www/us/en/corporate/artificial-intelligence/winners2024.html" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">💎 Intel Global AI Festival Winner</a>
                <a href="https://www.pointsoflight.org/awards/championing-accessibility-in-education-for-blind-and-visually-impaired-students/" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">🇺🇸 George H. W. Bush Points of Light Award</a>
                <a href="https://devpost.com/software/buzzle" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">🏆 Amazon Breaking Barriers Winner</a>
                <a href="https://en.wikipedia.org/wiki/Yellow_Rose_of_Texas_Award" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">🌹 The Yellow Rose of Texas Award</a>
                <a href="https://www.txgcp.org/standupforstem" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">🔬 Stand Up for STEM</a>
                <a href="https://www.aspirations.org/news/award-programs/ncwit-announces-2025-national-aic-high-school-award-recipients" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">👩‍💻 NCWIT National Honoree</a>
                <a href="https://www.aspirations.org/award-programs/2023-aic-impact-awards" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">💻 NCWIT Computing Award</a>
                <a href="https://www.katyisd.org/site/default.aspx?PageType=3&DomainID=4&ModuleInstanceID=100&ViewID=6446EE88-D30C-497E-9316-3F8874B3E108&RenderLoc=0&FlexDataID=16628&PageID=1" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">🎻 TMEA All-State Violist</a>
              </div>
            </div>
  {/* Speaking Engagements */}
  <div className="gamer-card p-8">
              <h3 className="text-3xl font-gamer font-bold text-gamer-navy mb-6 flex items-center">
                🎤 <span className="ml-3">Speaking Engagements</span>
              
              </h3>
              <div className="space-y-4 text-lg">
                <a href="https://paragonx.academy/speakers/24speaker-stem" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">🔬 ParagonX - STEM Speaker</a>
                <a href="https://conference.iste.org/2025/program/search/detail_presenter.php?id=118282794" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">🎓 ISTE Conference Speaker</a>
                <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Fp%2FDIUFYWEPqQT%2F&psig=AOvVaw05k3_TJUpPScr1hrGA5b1l&ust=1754497176223000&source=images&cd=vfe&opi=89978449&ved=0CBkQjhxqFwoTCODuobuJ9I4DFQAAAAAdAAAAABAE" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">🤖 National AI Conference</a>
              </div>
            </div>
            {/* Research Publications */}
            <div className="gamer-card p-8">
              <h3 className="text-3xl font-gamer font-bold text-gamer-navy mb-6 flex items-center">
                📚 <span className="ml-3">Research & Publications</span>
              
              </h3>
              <div className="space-y-4 text-lg">
                <a href="https://doi.org/10.48550/arXiv.2504.17117" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">🤖 Audemy + AI for Accessible Education Paper</a>
                <a href="https://dl.acm.org/doi/10.1145/3610661.3617150" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">📄 Audio-Wordle Paper - ACM Publication</a>
                <a href="https://scale.stanford.edu/genai/repository/al-accessible-education-personalized-audio-based-learning-blind-students" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">🎓 Stanford SCALE Feature</a>
                <a href="https://dl.acm.org/doi/10.1145/3686215.3690154" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">📊 Math Tool for Blind Students Paper</a>
                <a href="https://scholar.google.com/citations?user=xaeJeRYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">🔍 Google Scholar Profile</a>
                <a href="https://www.researchgate.net/profile/Crystal-Yang-11" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">📈 Research Gate Profile</a>
              </div>
            </div>

            {/* Scholarships & Academic Recognition */}
            <div className="gamer-card p-8">
              <h3 className="text-3xl font-gamer font-bold text-gamer-navy mb-6 flex items-center">
                🎓 <span className="ml-3">Scholarships & Academic</span>
               
              </h3>
              <div className="space-y-4 text-lg">
                <a href="https://x.com/TompkinsHS/status/1918004820935364812" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">🏆 Top 10 Graduate - Tompkins HS</a>
                <a href="https://www.eset.com/us/about/newsroom/press-releases/eset-north-america-announces-winners-of-the-tenth-annual-women-in-cybersecurity-scholarship/?srsltid=AfmBOooXTXSoNm7Nh21s80bLzL_mCEeLRlnYyFJ9Vgf6iTUJ3FiILoXS" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">🔒 ESET Cybersecurity Scholarship</a>
                <a href="https://katytimes.com/stories/grange-awards-5000-scholarships-to-2-katy-isd-seniors,110507" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">💰 Grange Scholarship</a>
                <a href="https://www.tacobellfoundation.org/live-mas-scholarship-recipients/" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">🌮 Live Mas Scholarship</a>
                <a href="https://scdaily.com/zh-CN/post/79973" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">🏆 CPC Scholarship</a>
                <a href="https://electricityplans.com/college-scholarship/" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">⚡ Energize Your Education Scholarship</a>
              </div>
            </div>

            {/* Organization Initiatives */}
            <div className="gamer-card p-8">
              <h3 className="text-3xl font-gamer font-bold text-gamer-navy mb-6 flex items-center">
                🚀 <span className="ml-3">Organization Initiatives</span>
               
              </h3>
              <div className="space-y-4 text-lg">
                <a href="https://www.youtube.com/@applelooeducationalvideosf1743/videos" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">📺 Audemy YouTube Channel</a>
                <a href="https://www.instagram.com/audemyapp/" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">📱 Audemy Instagram</a>
                <a href="https://github.com/Crustaly/audemywebsite" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">💻 Audemy GitHub</a>
                <a href="https://katyyouthhacks-2024.devpost.com/" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">🏆 KatyYouthHacks 2024</a>
                <a href="https://katyyouthhacks-2023.devpost.com/" target="_blank" rel="noopener noreferrer" className="block text-gamer-navy hover:text-gamer-hot-pink transition-colors font-medium">🏆 KatyYouthHacks 2023</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-gamer font-bold text-gamer-navy mb-4">
            Interested in featuring my work?
          </h2>
          <p className="text-gray-700 mb-6">
            I'm always open to discussing accessibility in gaming, inclusive technology, 
            and my journey as a young innovator in the tech space.
          </p>
          <a href="mailto:crystal@audemy.org" className="gamer-button inline-block">
            Contact for Media
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Press 