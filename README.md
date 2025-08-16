# Hemant Kumar - Full Stack Developer Portfolio

A modern, responsive portfolio website built with React.js, Tailwind CSS, and Framer Motion. Features a clean design with glassmorphism effects, smooth animations, and dark mode support.

## 🚀 Features

- **Modern Design**: Clean, minimal UI with glassmorphism effects
- **Responsive**: Fully responsive design for all screen sizes
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Powered by Framer Motion
- **Interactive Components**: Hover effects, transitions, and micro-interactions
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Inter (Google Fonts)
- **Build Tool**: Create React App

## 📋 Sections

1. **Hero Section** - Introduction with animated typewriter effect
2. **Skills & Tech Stack** - Categorized technology skills with icons
3. **DevOps Tools** - Deployment and infrastructure tools
4. **Projects** - Featured projects with filtering and links
5. **Work Experience** - Professional experience timeline
6. **Contact** - Contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hemantkumar/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🔧 Build for Production

```bash
npm run build
# or
yarn build
```

This builds the app for production to the `build` folder.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Contact.js
│   ├── DevOps.js
│   ├── Experience.js
│   ├── Hero.js
│   ├── Navigation.js
│   ├── Projects.js
│   └── Skills.js
├── data/               # Configuration data
│   └── portfolioData.js
├── hooks/              # Custom React hooks
│   ├── useDarkMode.js
│   └── useTypewriter.js
├── App.js             # Main app component
├── App.css           # Global styles
├── index.js          # App entry point
└── index.css         # Base styles
```

## 🎨 Customization

### Personal Information

Update the `src/data/portfolioData.js` file to customize:

- Personal information (name, title, contact details)
- Skills and technologies
- Projects and descriptions
- Work experience
- Social media links

### Styling

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Change fonts in `src/App.css` and update Google Fonts import
- **Animations**: Customize animations in component files or add new ones in CSS

### Content

All content is centralized in `src/data/portfolioData.js` for easy maintenance:

```javascript
// Example: Adding a new skill
export const skillsData = {
  languages: [
    { name: "Python", icon: FaPython, color: "text-yellow-500" },
    // Add your skill here
  ]
};
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://netlify.com)

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```
3. Deploy: `npm run deploy`

## 🌟 Performance Features

- **Lazy Loading**: Components load on scroll
- **Optimized Images**: Proper image optimization
- **Smooth Scrolling**: CSS scroll-behavior and JavaScript scrollIntoView
- **Responsive Design**: Mobile-first approach
- **SEO Friendly**: Meta tags and semantic HTML

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Hemant Kumar - [hemant@example.com](mailto:hemant@example.com)

Project Link: [https://github.com/hemantkumar/portfolio](https://github.com/hemantkumar/portfolio)

---

⭐ Star this repo if you find it helpful!
# my-portfolio
