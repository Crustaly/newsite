# Crystal Yang - Personal Website

A bold gamer-style personal website for Crystal Yang, a freshman at UPenn M&T (Wharton + CS) who is building innovative accessibility solutions for gaming.

## 🎮 About

Crystal Yang is a gaming + accessibility enthusiast building Audemy (a gaming platform for blind gamers) and Buzzle (the world's first audio-only gaming console for blind users). This website showcases her journey, projects, and mission to make gaming more accessible for everyone.

## ✨ Features

### 🎨 Design & Theme
- **Bold Gamer Style**: Light pink background with geometric patterns
- **Color Scheme**: Navy blue as main accent, hot pink as secondary accent
- **Typography**: Orbitron font for headings (gamer aesthetic), Inter for body text
- **Responsive Design**: Mobile-first approach with desktop enhancements

### 📱 Layout Components
- **Fixed Navbar**: Navigation to Main, Projects, Press, Gallery, Story
- **Footer**: Social links (LinkedIn, Email, GitHub) with icons
- **Hero Section**: Introduction with animated elements and responsive headshot placement
- **Geometric Patterns**: Subtle SVG/CSS-based repeating patterns

### 🛠 Technical Features
- **React + Vite**: Modern development setup
- **TailwindCSS**: Utility-first styling with custom gamer theme
- **Framer Motion**: Smooth animations and transitions
- **React Router**: Client-side routing
- **Lucide React**: Beautiful icons
- **Responsive Design**: Works perfectly on all devices

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd crystal-yang-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Navigation bar
│   └── Footer.jsx      # Footer with social links
├── pages/              # Page components
│   ├── Home.jsx        # Main page with hero section
│   ├── Projects.jsx    # Projects showcase
│   ├── Press.jsx       # Media coverage
│   ├── Gallery.jsx     # Photo gallery
│   └── Story.jsx       # Personal story/blog
├── App.jsx             # Main app component with routing
├── main.jsx           # React entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎯 Pages Overview

### 🏠 Main Page
- Hero section with Crystal's introduction
- Animated elements and floating particles
- Responsive headshot placement
- Call-to-action buttons
- Statistics showcase

### 📂 Projects Page
- Grid layout showcasing Audemy, Buzzle, and other projects
- Project cards with descriptions, technologies, and stats
- Links to GitHub and live demos
- Collaboration call-to-action

### 📰 Press Page
- List of media coverage and interviews
- Categorized articles (Feature, Interview, Award, Local)
- Publication logos and read times
- Media contact information

### 📸 Gallery Page
- Responsive image gallery with categories
- Modal view with navigation
- Filter by category (Events, Gaming, Awards, Team)
- Image placeholders with descriptions

### 📖 Story Page
- Long-form narrative about Crystal's journey
- Gamer blog-style layout
- Sections covering background, motivation, and impact
- Call-to-action for accessibility advocacy

## 🎨 Customization

### Colors
The website uses a custom gamer color palette defined in `tailwind.config.js`:
- `gamer-pink`: #FF69B4
- `gamer-navy`: #1E3A8A
- `gamer-hot-pink`: #FF1493
- `gamer-light-pink`: #FFF0F5

### Fonts
- **Orbitron**: Used for headings and gamer aesthetic
- **Inter**: Used for body text and readability

### Animations
- Framer Motion animations for page transitions
- Hover effects on cards and buttons
- Floating elements and glow effects
- Staggered animations for lists and grids

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Key responsive features:
- Mobile-first navigation with hamburger menu
- Responsive grid layouts
- Adaptive typography
- Touch-friendly interactions

## 🔧 Development

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route to `src/App.jsx`
3. Add navigation link to `src/components/Navbar.jsx`

### Styling
- Use TailwindCSS utility classes
- Custom components defined in `src/index.css`
- Follow the gamer theme with pink/navy colors

### Animations
- Use Framer Motion for page transitions
- Add hover effects with CSS transitions
- Implement staggered animations for lists

## 🚀 Deployment

The website can be deployed to any static hosting service:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions about this website or Crystal's work:
- **Email**: crystal@example.com
- **LinkedIn**: [Crystal Yang](https://linkedin.com/in/crystal-yang)
- **GitHub**: [crystal-yang](https://github.com/crystal-yang)

---

Built with ❤️ for making gaming accessible to everyone. 