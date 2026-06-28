# Christan Toreres - Personal Portfolio

A modern, responsive, single-page personal portfolio application built to showcase my expertise as an AI & Machine Learning Engineer and Full-Stack Developer.

## 🚀 Live Demo

**[View Live Portfolio Here](https://christan-blue.vercel.app/)**

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## ✨ Key Features

- **Single Page Architecture**: Smooth scrolling between sections (`Hero`, `About`, `Tech Stack`, `Projects`, `Contact`) using native CSS behavior and sticky navigation.
- **Dynamic Scroll Animations**: Custom lightweight `FadeIn` wrapper utilizing the Intersection Observer API to smoothly reveal content as it enters the viewport (no heavy external libraries like Framer Motion).
- **Interactive Project Showcase**:
  - Grid layout that defaults to 3 featured projects to conserve vertical space.
  - "See Other Projects" toggle functionality.
  - Interactive "video on hover" overlay effect for each project card.
- **Custom Design System**: A meticulously crafted cohesive dark/slate color palette mapping (`#DEE1DD`, `#C4CDC1`, `#99AEAD`, `#6D9197`, `#658B6F`, `#2F575D`, `#28363D`) implemented via Tailwind config.
- **Accessible Contact Section**: Prominent, highly scannable email and social links (LinkedIn, GitHub) with a direct Resume download integration.

## 💻 Getting Started

First, ensure you have Node.js installed, then clone the repository and install dependencies:

```bash
# Clone the repo
git clone https://github.com/ctoreres/my-profile.git

# Navigate into the project
cd my-profile

# Install dependencies
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```text
├── public/                 # Static assets (Resume PDF, project videos, etc.)
├── src/
│   ├── app/                # Next.js App Router root (page.tsx, layout.tsx, global.css)
│   ├── components/
│   │   ├── layout/         # Reusable layout wrappers (Navbar.tsx)
│   │   ├── sections/       # Primary page sections (TechStack.tsx, Projects.tsx, Contact.tsx)
│   │   └── ui/             # Reusable UI components (ProjectCard.tsx, FadeIn.tsx)
│   └── lib/                # Utility functions and hooks (if any)
└── tailwind.config.ts      # Tailwind CSS configuration and custom color tokens
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
