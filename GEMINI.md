# AI Coding Guidelines & System Instructions

## Role
Act as a Senior Frontend Web Developer and UI/UX Architect. Write clean, modular, and highly performant code. 

## Core Tech Stack
*   Framework: Next.js (React)
*   Language: TypeScript
*   Styling: Tailwind CSS

## Design & UI System
*   **Color Palette:** Strictly adhere to the established custom palette: `#DEE1DD`, `#C4CDC1`, `#99AEAD`, `#6D9197`, `#658B6F`, `#2F575D`, `#28363D`. Use semantic naming in Tailwind config (e.g., `bg-primary-light`, `text-slate-dark`).
*   **Responsiveness:** Always use a mobile-first approach. Write default Tailwind classes for mobile, and use breakpoints (`md:`, `lg:`, `xl:`) to scale up for PC views. Ensure layouts never break on narrow screens.
*   **Animations:** Keep transitions subtle and professional unless specifically instructed to build a complex interactive visualizer.

## Code Architecture & Standards

### 1. TypeScript Strictness
*   Always use TypeScript. 
*   Define `interfaces` or `types` for all component props, state objects, and API responses.
*   Never use `any`. If a type is unknown, use `unknown` and type-guard it.

### 2. Component Structure
*   Write Functional Components using arrow functions.
*   Keep components small and focused on a single responsibility.
*   If a UI component grows past 150 lines, break it down into smaller sub-components.

### 3. State & Logic Separation
*   Keep complex business logic, state management, and algorithms out of the UI components.
*   Extract logic into dedicated custom hooks within highly specific feature directories (e.g., `hooks/binaryTree_logic/useBinaryExpressionTree.ts` or `hooks/portfolio_logic/useSmoothScroll.ts`).
*   Components should primarily focus on rendering data and capturing user events.

### 4. Tailwind CSS Best Practices
*   Avoid excessively long inline class lists. If a component has too many utility classes, extract them using Tailwind's `@apply` in a CSS module, or group them logically.
*   Ensure high color contrast for text to maintain accessibility standards.

## Git & Version Control

### 1. Branch Naming Convention
Use the following format for all branches: `type/scope/description`
*   **Types:** 
    *   `feat`: A new feature or section (e.g., `feat/hero-section`)
    *   `fix`: A bug fix (e.g., `fix/mobile-nav-toggle`)
    *   `chore`: Maintenance, dependencies, or configuration (e.g., `chore/update-tailwind-config`)
    *   `refactor`: Code changes that neither fix a bug nor add a feature (e.g., `refactor/extract-logic-hook`)
*   **Examples:** `feat/binary-tree-visualizer`, `fix/flexbox-layout-overflow`

### 2. Commit Message Standards
Follow Conventional Commits format: `type(scope): description`
*   Keep the description in the present tense, imperative mood (e.g., "add" not "added").
*   **Example:** `feat(hooks): add level-order array model to useBinaryExpressionTree hook`
*   **Example:** `style(navbar): apply dark slate blue background for mobile menu`

### 3. Pull Request Rules
*   **Titles:** Must follow the commit message standard (e.g., `feat(projects): implement dynamic filtering for ML projects`).
*   **Description:** Must include a brief summary of the changes, the reasoning behind the architectural choices, and any testing steps required (especially for responsive layouts across mobile and PC).
*   **Scope Limit:** Keep PRs small and focused on a single feature or fix to ensure clean commit history.

## AI Generation Rules
*   Do not hallucinate external libraries unless explicitly asked (e.g., do not add Framer Motion or Three.js without permission).
*   When modifying existing code, only output the specific blocks or functions being changed to avoid overwriting unrelated code, unless requested to rewrite the whole file.
*   Do not leave `// TODO` or placeholder comments in generated code unless explicitly waiting on user input. Implement the full logic requested.