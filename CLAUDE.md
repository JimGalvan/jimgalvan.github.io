# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio website for Jim Galvan, a QA Automation Engineer and Software Developer. The site is built using modern web technologies and hosted on GitHub Pages.

## Technology Stack

- **Frontend Framework**: Vanilla HTML, CSS, JavaScript
- **CSS Framework**: Tailwind CSS (via CDN)
- **JavaScript Libraries**:
  - Alpine.js for reactive components
  - HTMX for dynamic content loading
  - Typed.js for animated text effects
  - AOS (Animate On Scroll) for scroll animations
  - GLightbox for lightbox functionality
  - GSAP for advanced animations
  - EmailJS for contact form functionality

## Architecture & Structure

### Core Files
- `index.html` - Main landing page with all sections
- `projects.html` - Dynamically loaded projects section
- `header.html` - Reusable header component
- `assets/style.css` - Custom CSS with Tailwind extensions
- `js/main.js` - Main JavaScript functionality
- `js/contact-form.js` - Contact form handling with EmailJS

### Assets Organization
- `assets/icons/` - Technology and social media icons (SVG format)
- `assets/images/` - Profile pictures and project screenshots
- `assets/projects/` - Project-specific images

## Key Features & Components

### Dynamic Content Loading
- Projects section is loaded via HTMX from `projects.html`
- Uses `hx-get="projects.html" hx-trigger="load" hx-target="#projects-section"`

### Interactive Elements
- Alpine.js manages tab switching in projects section (`x-data="{ tab: 'automated' }"`)
- Mobile menu toggle with fallback JavaScript
- Smooth scrolling navigation
- Animated typing effect for professional titles

### Contact Form
- Integrated with EmailJS for form submissions
- Service ID: `service_hx1ppkx`
- Template ID: `template_hug3nlk`
- Public Key: `OrQ-AWyuUO-A99v7V`

### Session Recording Integration
- SessionSpyre client integration for analytics
- Conditional loading based on environment (localhost vs production)

## Development Workflow

### No Build Process
This is a static site with no build tools or package management. All dependencies are loaded via CDN.

### Local Development
- Open `index.html` directly in a browser
- Use a local server (e.g., `python -m http.server` or Live Server extension) for HTMX functionality

### Testing
- Manual testing in browsers
- No automated test suite configured

## Deployment

The site is deployed via GitHub Pages and automatically updates when changes are pushed to the main branch.

## Content Updates

### Adding New Projects
1. Edit `projects.html` to add new project cards
2. Follow existing structure with Alpine.js tab system (`x-show="tab === 'automated'"` or `x-show="tab === 'software'"`)
3. Add project images to `assets/images/` or `assets/projects/`
4. Include appropriate technology icons from `assets/icons/`

### Styling Guidelines
- Primary color scheme: Dark theme with blue/purple gradients
- CSS custom properties defined in `:root` for consistent colors
- Responsive design using Tailwind classes
- Hover effects and transitions for interactive elements

## Important Notes

- No sensitive information should be committed (API keys are public for EmailJS)
- The site uses external CDN dependencies - ensure internet connectivity for full functionality
- Mobile-responsive design with specific breakpoints for different screen sizes
- SessionSpyre tracking is conditionally loaded based on environment