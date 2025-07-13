# Sarah & James Wedding Website

## Overview

This is a static wedding website for Sarah and James' wedding scheduled for August 15, 2025, at Rose Garden Estate, California. The site is built using vanilla HTML, CSS, and JavaScript with a focus on elegant design and smooth user experience. It features a responsive design with sections for their story, wedding details, gallery, and RSVP functionality.

## System Architecture

### Frontend Architecture
- **Pure HTML/CSS/JavaScript**: Simple static website architecture without frameworks
- **Responsive Design**: Mobile-first approach with CSS media queries
- **Single Page Application (SPA)**: All content on one page with smooth scrolling navigation
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced with JS interactions

### Design Philosophy
- **Elegant Typography**: Uses Google Fonts (Dancing Script, Playfair Display, Source Sans Pro)
- **Warm Color Palette**: Browns, golds, and creams (#6b4e3d, #d4a574, #f4e4bc)
- **Smooth Animations**: Intersection Observer API for scroll-based animations
- **Accessibility**: Semantic HTML structure and proper navigation

## Key Components

### Navigation System
- **Fixed Header**: Transparent navigation bar with logo and menu items
- **Mobile Navigation**: Hamburger menu with toggle functionality
- **Smooth Scrolling**: JavaScript-powered navigation between sections

### Content Sections
- **Hero Section**: Large banner with couple names and wedding date
- **Our Story**: Personal narrative section
- **Details**: Wedding ceremony and reception information
- **Gallery**: Photo showcase
- **RSVP**: Response form for guests

### Interactive Features
- **Mobile Menu Toggle**: Responsive hamburger menu
- **Scroll Animations**: Fade-in effects triggered by viewport intersection
- **Smooth Navigation**: Animated scrolling between sections

## Data Flow

### Client-Side Interactions
1. **Navigation**: User clicks menu items → JavaScript handles smooth scrolling
2. **Mobile Menu**: User clicks toggle → JavaScript adds/removes active classes
3. **Scroll Animations**: User scrolls → Intersection Observer triggers fade-in animations
4. **Form Submission**: RSVP form (implementation pending)

### No Backend Required
- Static content delivery
- No server-side processing currently implemented
- Future RSVP functionality may require backend integration

## External Dependencies

### CDN Resources
- **Google Fonts**: Typography enhancement
  - Dancing Script (400, 600, 700 weights)
  - Playfair Display (300, 400, 600 weights)
  - Source Sans Pro (300, 400, 600 weights)
- **Font Awesome**: Icon library (6.0.0)

### Browser APIs
- **Intersection Observer**: Scroll-based animations
- **Smooth Scrolling**: Native browser smooth scrolling support

## Deployment Strategy

### Static Hosting
- **Platform**: Suitable for any static hosting service (Netlify, Vercel, GitHub Pages)
- **Build Process**: No build process required - direct file serving
- **Assets**: All assets are either inline or externally linked (CDN)

### Performance Considerations
- **Optimized Images**: Placeholder for optimized wedding photos
- **Minimal JavaScript**: Lightweight vanilla JS implementation
- **CSS Optimization**: Efficient selectors and minimal redundancy

### Future Enhancements
- **Backend Integration**: RSVP form processing
- **Content Management**: Dynamic content updates
- **Analytics**: Wedding-specific tracking

## Changelog

```
Changelog:
- July 03, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```

### Development Notes
- The website uses a mobile-first responsive design approach
- JavaScript is used progressively - core functionality works without it
- The color scheme and typography create an elegant, romantic atmosphere
- All external dependencies are loaded via CDN for reliability
- The structure is prepared for easy addition of backend functionality for RSVP processing