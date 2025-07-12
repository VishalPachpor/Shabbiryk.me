# Jad Esber Portfolio - Next.js 15

A modern personal portfolio website built with Next.js 15, React, TypeScript, and shadcn/ui.

## Project Structure

This project uses Next.js 15 with the App Router:

```
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── not-found.tsx      # 404 page
│   ├── globals.css        # Global styles
│   ├── publications/      # Publications page
│   ├── investments/       # Investments page
│   ├── shelf/            # Shelf page
│   ├── coffee/           # Coffee page
│   └── contact/          # Contact page
├── components/            # React components
│   ├── Sidebar.tsx       # Navigation sidebar
│   └── ui/               # shadcn/ui components
├── lib/                   # Utility functions
├── hooks/                 # Custom React hooks
└── public/               # Static assets
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Radix UI** - Accessible UI primitives
- **TanStack Query** - Data fetching
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd jadme-portfolio-nextjs
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features

- **Responsive Design** - Works on all device sizes
- **Modern UI** - Clean, professional design
- **Type Safety** - Full TypeScript support
- **Accessibility** - WCAG compliant components
- **Performance** - Optimized with Next.js 15
- **SEO Ready** - Built-in SEO features

## Pages

- **Home** - Main portfolio page with hero section
- **Publications** - Research and writings
- **Investments** - Investment portfolio
- **Shelf** - Reading list and resources
- **Coffee** - Meeting scheduling
- **Contact** - Contact information

## Deployment

This project can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **AWS Amplify**

## Customization

- Update content in `app/page.tsx` and other page files
- Modify styling in `app/globals.css`
- Add new pages in the `app/` directory
- Customize components in the `components/` directory

## License

This project is private and proprietary.
