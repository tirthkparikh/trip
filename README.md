# Travco - Travel Agency Website

A modern, responsive travel agency website built with React and Tailwind CSS, inspired by Travco.com.

## Features

- 🎨 Modern, beautiful UI design
- 📱 Fully responsive layout
- 🚀 Built with React 19 and Vite
- 🎯 Tailwind CSS for styling
- ✨ Smooth animations and transitions
- 🔍 Search functionality for destinations
- 📧 Contact form
- 💬 Customer testimonials section
- 🌍 Featured destinations showcase

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Hero.jsx            # Hero section with search
│   ├── FeaturedDestinations.jsx  # Destination cards
│   ├── Services.jsx        # Services grid
│   ├── Testimonials.jsx    # Customer reviews
│   ├── Contact.jsx         # Contact form and info
│   └── Footer.jsx          # Footer with links
├── App.jsx                 # Main app component
├── App.css                 # Global styles
├── index.css               # Tailwind imports
└── main.jsx                # Entry point
```

## Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

## Customization

You can easily customize:
- Colors in `tailwind.config.js`
- Destination data in `FeaturedDestinations.jsx`
- Services in `Services.jsx`
- Testimonials in `Testimonials.jsx`

## License

MIT
