import { motion } from 'framer-motion'
import { Gamepad2, Accessibility, GraduationCap, Trophy, Users, Heart } from 'lucide-react'

const Story = () => {
  return (
    <div className="pt-16 min-h-screen bg-gamer-light-pink">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-gamer font-bold text-gamer-navy mb-6">
            My <span className="text-gamer-hot-pink">Story</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From gamer to accessibility advocate: How I discovered my passion for making 
            gaming inclusive for everyone.
          </p>
        </motion.div>

        {/* Story Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          {/* Introduction */}
          <div className="gamer-card p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Gamepad2 size={32} className="text-gamer-hot-pink" />
              <h2 className="text-2xl font-gamer font-bold text-gamer-navy">The Beginning</h2>
            </div>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              My journey into gaming accessibility started with a simple realization: gaming is for everyone, 
              but not everyone can access it. As a lifelong gamer, I've experienced the joy, excitement, 
              and community that gaming brings. But I also witnessed friends and family members who couldn't 
              fully participate due to accessibility barriers.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              This realization hit me hard during my senior year of high school when I met Alex, a blind 
              student who shared my passion for gaming but couldn't find games that were truly accessible 
              to him. That conversation changed everything.
            </p>
          </div>

          {/* The Spark */}
          <div className="gamer-card p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Heart size={32} className="text-gamer-hot-pink" />
              <h2 className="text-2xl font-gamer font-bold text-gamer-navy">The Spark</h2>
            </div>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Alex told me about his experiences trying to play games. Most games relied heavily on visual 
              cues, making them impossible for him to enjoy. The few audio-based games that existed were 
              either too simple or poorly designed. "Why can't gaming be as immersive for me as it is for 
              you?" he asked.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              That question haunted me. I started researching accessibility in gaming and was shocked by 
              the statistics: over 285 million people worldwide are visually impaired, yet the gaming 
              industry largely ignored this massive audience. I knew I had to do something.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              I began experimenting with audio-based game mechanics, learning about spatial audio, 
              haptic feedback, and voice recognition. What started as a high school project quickly 
              became an obsession.
            </p>
          </div>

          {/* The Journey */}
          <div className="gamer-card p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap size={32} className="text-gamer-hot-pink" />
              <h2 className="text-2xl font-gamer font-bold text-gamer-navy">The Journey to UPenn</h2>
            </div>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              When I was accepted to the University of Pennsylvania's Jerome Fisher Program in Management 
              and Technology (M&T), I saw it as the perfect opportunity to combine my passion for 
              accessibility with business and computer science. The program's unique blend of Wharton 
              business education and engineering would give me the skills I needed to make real change.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              My first semester was a whirlwind of learning and experimentation. I joined accessibility 
              clubs, attended gaming industry events, and started building prototypes. I met other students 
              who shared my vision, and together we formed a team dedicated to making gaming more inclusive.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              The more I learned, the more I realized that accessibility wasn't just about making games 
              playable for people with disabilities—it was about creating better experiences for everyone. 
              Audio cues, haptic feedback, and voice controls could enhance gaming for all players.
            </p>
          </div>

          {/* Building Audemy */}
          <div className="gamer-card p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Accessibility size={32} className="text-gamer-hot-pink" />
              <h2 className="text-2xl font-gamer font-bold text-gamer-navy">Building Audemy</h2>
            </div>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Audemy started as a simple idea: a gaming platform where every game is designed with 
              accessibility in mind from day one. Instead of retrofitting existing games, we would 
              create a platform that made accessibility the foundation, not an afterthought.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              The development process was challenging but incredibly rewarding. I spent countless hours 
              working with blind gamers, learning about their needs and preferences. Their feedback was 
              invaluable and often surprising. What I thought would work didn't, and what I thought 
              wouldn't work became the foundation of our platform.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Today, Audemy hosts over 50 games, each designed with comprehensive accessibility features. 
              We've built a community of over 500 users who can finally enjoy gaming on equal terms. 
              The platform continues to grow, and every new game makes the gaming world a little more 
              inclusive.
            </p>
          </div>

          {/* Buzzle Console */}
          <div className="gamer-card p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Gamepad2 size={32} className="text-gamer-hot-pink" />
              <h2 className="text-2xl font-gamer font-bold text-gamer-navy">The Buzzle Revolution</h2>
            </div>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              While Audemy was solving the software side of accessibility, I realized we needed to 
              address the hardware as well. Most gaming consoles and controllers are designed with 
              sighted users in mind, making them difficult or impossible for blind gamers to use.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Buzzle was born from this realization. It's the world's first dedicated audio-only gaming 
              console, designed specifically for blind users. The console features spatial audio, 
              voice commands, and haptic feedback, creating an immersive gaming experience that doesn't 
              rely on vision.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Developing Buzzle has been the most challenging and rewarding project of my life. From 
              the initial concept to the working prototype, every step has been a learning experience. 
              The console is now in beta testing with 200+ users, and the feedback has been overwhelmingly 
              positive.
            </p>
          </div>

          {/* Recognition */}
          <div className="gamer-card p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Trophy size={32} className="text-gamer-hot-pink" />
              <h2 className="text-2xl font-gamer font-bold text-gamer-navy">Recognition and Impact</h2>
            </div>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              The gaming industry is starting to take notice. I've been featured in major publications 
              like TechCrunch, Wired, and Forbes. I've won awards for innovation and accessibility, 
              including the Student Innovator Award. But the most meaningful recognition comes from the 
              users themselves.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Hearing from blind gamers who can finally enjoy gaming, from parents who see their children 
              light up when they can play independently, from developers who are inspired to make their 
              games more accessible—these are the moments that make all the hard work worthwhile.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              The impact goes beyond individual users. Major gaming companies are now reaching out to 
              learn about accessibility best practices. The industry is beginning to understand that 
              accessibility isn't just good for users—it's good for business.
            </p>
          </div>

          {/* The Future */}
          <div className="gamer-card p-8 mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Users size={32} className="text-gamer-hot-pink" />
              <h2 className="text-2xl font-gamer font-bold text-gamer-navy">Looking Forward</h2>
            </div>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              My mission is far from complete. While we've made significant progress, there's still so 
              much work to be done. I want to see a future where accessibility is built into every game 
              from the start, where no gamer is left behind due to disability.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              I'm working on expanding Audemy's game library, improving Buzzle's features, and developing 
              new accessibility tools for game developers. I'm also mentoring other students who want to 
              work in accessibility, sharing what I've learned and encouraging them to pursue their own 
              accessibility projects.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              The gaming industry is at a turning point. As technology advances and awareness grows, 
              we have the opportunity to make gaming truly inclusive. I believe that in the next decade, 
              accessibility will be standard practice, not an exception. And I'm committed to being part 
              of that change.
            </p>
          </div>

          {/* Call to Action */}
          <div className="gamer-card p-8 text-center">
            <h2 className="text-2xl font-gamer font-bold text-gamer-navy mb-4">
              Join the Accessibility Revolution
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Whether you're a gamer, developer, or just someone who believes in inclusion, 
              you can help make gaming accessible for everyone. Start by learning about accessibility, 
              supporting accessible games, and advocating for inclusive design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="gamer-button">
                Try Audemy
              </button>
              <button className="bg-transparent border-2 border-gamer-navy text-gamer-navy px-6 py-3 rounded-lg font-gamer font-semibold hover:bg-gamer-navy hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Story 