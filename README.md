# BrightCity - Home Services Platform

A modern, responsive home services platform built with Next.js, React, and Tailwind CSS.

## Features

- 🏠 **Hero Section** - Beautiful landing page with search functionality
- 🧹 **Service Categories** - Browse different service categories with icons
- 🔥 **Trending Services** - View popular services with ratings and pricing
- ✨ **Why Choose Us** - Feature highlights with animated cards
- 📊 **Statistics** - Impressive numbers and achievements
- 📱 **Responsive Design** - Works perfectly on all devices

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Components**: Custom UI components with shadcn/ui style
- **State Management**: React hooks
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd home-services-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx            # Main page component
├── components/
│   ├── HomeContent.tsx     # Main home page content
│   └── ui/                 # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── skeleton.tsx
│       └── input.tsx
├── lib/
│   ├── utils.ts            # Utility functions
│   └── hooks/              # Custom React hooks
│       ├── use-categories.ts
│       └── use-services.ts
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Adding New Services

Edit `lib/hooks/use-services.ts` to add more services to the mock data.

### Adding New Categories

Edit `lib/hooks/use-categories.ts` to add more service categories.

### Styling

The project uses Tailwind CSS. You can customize colors, spacing, and other design tokens in `tailwind.config.js`.

## Deployment

The project can be deployed to Vercel, Netlify, or any other platform that supports Next.js.

```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
# brightcity 
# brightcity 
