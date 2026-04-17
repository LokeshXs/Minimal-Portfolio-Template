# CLAUDE.md — Portfolio Project Context

This file provides comprehensive context for AI assistants working on this codebase.

---

## Project Overview

Personal portfolio/resume website for Lokesh Singh. Built with Next.js App Router, featuring animated sections, GitHub integration, dark/light mode, and a contact form.

**Key pages:** Home (landing), About, Projects, Blogs, Contact

---

## Tech Stack

| Library | Version | Purpose |
|---|---|---|
| Next.js | 15.5.2 | Framework (App Router, Turbopack) |
| React | 19.1.0 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Styling (PostCSS-based, no config file) |
| `motion/react` | 12.23.12 | Animations (Framer Motion v12 successor) |
| `class-variance-authority` | 0.7.1 | Component variant management (CVA) |
| `tailwind-merge` + `clsx` | — | Safe class merging via `cn()` |
| shadcn/ui | — | Headless UI components (style: new-york, color: zinc) |
| Radix UI | — | Primitives: tooltip, label, slot |
| React Hook Form | 7.62.0 | Form state management |
| Zod | 4.1.9 | Schema validation |
| `@octokit/rest` | 22.0.0 | GitHub API client (REST + GraphQL) |
| Embla Carousel | 8.6.0 | Carousel (with autoplay plugin) |
| Sonner | 2.0.7 | Toast notifications |
| next-themes | 0.4.6 | Dark/light theme switching |
| Tabler Icons React | 3.34.1 | Primary icon set |
| Lucide React | 0.542.0 | Secondary icon set |
| date-fns | 4.1.0 | Date formatting |
| Axios | 1.13.1 | HTTP client |

---

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (ThemeProvider, fonts)
│   ├── page.tsx                  # Home page (all landing sections)
│   ├── globals.css               # Tailwind v4 config + CSS design tokens
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── blogs/page.tsx
│   └── contact/page.tsx
│
├── components/
│   ├── ui/                       # shadcn/ui primitives (Button, Input, Textarea, Form, Tooltip, Carousel, Sonner)
│   │   └── MobileNavToggleButton.tsx
│   ├── landing/                  # Home page sections (one file per section)
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── GithubSection.tsx     # Async, uses Suspense
│   │   ├── BlogsSection.tsx
│   │   ├── TestimonialSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── common/                   # Reusable across pages
│   │   ├── ProjectCard.tsx
│   │   ├── TechStackBadge.tsx
│   │   ├── AnimatedSubHeading.tsx
│   │   ├── GithubData.tsx        # Async server component
│   │   ├── GithubRepos.tsx
│   │   └── GithubContributionsGrid.tsx
│   ├── form/
│   │   └── contactForm.tsx       # RHF + Zod form
│   ├── about/
│   │   └── TimelineBlock.tsx
│   ├── NavBar.tsx                # Desktop sticky nav (motion-animated)
│   ├── MobileNavBar.tsx
│   ├── MobileNavPanel.tsx        # Full-screen mobile nav overlay
│   ├── Container.tsx             # Max-width layout wrapper
│   └── ThemeProvider.tsx         # next-themes wrapper
│
├── context/
│   └── MobileNavContextProvider.tsx   # isOpen state for mobile nav
│
├── actions/
│   └── github.ts                 # Server actions: fetchContributions(), fetchRepoData()
│
└── lib/
    ├── data.ts                   # ALL static content (see Data Layer section)
    └── utils.ts                  # cn(), getGithubMonthsAndContributions(), fetchTopLanguages()
```

**Public assets:**
- `public/me.jpg` — profile photo
- `public/Lokesh_resume.pdf` — downloadable resume
- `public/icons/` — tech stack SVG icons
- `public/projects/` — project preview images
- `public/experience/` — company logos
- `public/testimonial/` — avatar images
- `public/about/` — about page gallery images

---

## Styling System

### Tailwind CSS v4

This project uses **Tailwind CSS v4** which is configured entirely via CSS (no `tailwind.config.ts`). All design tokens are CSS custom properties defined in `src/app/globals.css`.

```css
/* Example token usage */
bg-background       /* var(--background) */
text-foreground     /* var(--foreground) */
bg-muted            /* var(--muted) */
text-muted-foreground
border-border
bg-accent
bg-card
```

### Color Tokens (Light / Dark)

| Token | Light | Dark |
|---|---|---|
| `--background` | `oklch(1 0 0)` (white) | `rgb(9, 9, 11)` |
| `--foreground` | `#262626` | `oklch(0.985 0 0)` |
| `--muted` | `#f5f5f5` | `#27272a` |
| `--muted-foreground` | `#71717a` | `oklch(0.705 0.015 286.067)` |
| `--accent` | `#d4d4d4` | `#404040` |
| `--card` | `oklch(1 0 0)` | `oklch(0.21 0.006 285.885)` |
| `--border` | `oklch(0.92 0.004 286.32)` | `oklch(1 0 0 / 10%)` |
| `--primary` | `oklch(0.985 0 0)` | `oklch(0.985 0 0)` |

### Typography

- **Font:** Rubik (Google Font), weights 400/500/600/700/800/900
- Applied via `font-family: var(--font-rubik)` on `body`
- Heading pattern: `text-2xl md:text-4xl font-semibold tracking-tight`
- Body: `text-base`, secondary: `text-sm text-muted-foreground`
- Truncation: `line-clamp-3`, `line-clamp-5`

### Custom Shadow Token

```css
--shadow-custom: 0 1px 1px rgba(0,0,0,0.05), 0px 4px 6px rgba(34,42,53,0.04),
                 0px 24px 68px rgba(47,48,55,0.05), 0px 2px 3px rgba(0,0,0,0.04);
/* Dark mode variant uses white-channel shadows */
```

Use as: `shadow-[var(--shadow-custom)]`

### Key Utility

```ts
// src/lib/utils.ts
import { cn } from "@/lib/utils"
// Always use cn() for conditional/merged Tailwind classes
cn("base-class", condition && "conditional-class", className)
```

---

## Component Patterns

### Variants with CVA

```tsx
import { cva, type VariantProps } from "class-variance-authority"

const componentVariants = cva("base-classes", {
  variants: {
    variant: { default: "...", outline: "..." },
    size: { sm: "...", default: "...", lg: "..." },
  },
  defaultVariants: { variant: "default", size: "default" },
})
```

See `src/components/ui/button.tsx` for reference implementation.

### asChild Pattern

Components that accept `asChild` use Radix's `Slot` to forward props to the child element:

```tsx
import { Slot } from "@radix-ui/react-slot"
const Comp = asChild ? Slot : "button"
```

### Container Layout

```tsx
// src/components/Container.tsx
// Max width wrapper for all page content
<Container className="optional-extra">
  {children}
</Container>
// Applies: max-w-5xl w-full mx-auto bg-white dark:bg-neutral-900 px-6 md:px-10 pt-24 max-md:pt-14
```

### Group Hover Animations

Named groups for scoped hover effects:

```tsx
<div className="group/badge">
  <span className="opacity-0 group-hover/badge:opacity-100 transition-opacity" />
</div>
```

---

## Animation System

**Import from `"motion/react"`** (not `"framer-motion"`):

```tsx
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "motion/react"
```

### Common Patterns

**Blur-in on scroll (word-by-word):**
```tsx
<motion.span
  initial={{ opacity: 0, filter: "blur(10px)" }}
  whileInView={{ opacity: 1, filter: "blur(0px)" }}
  transition={{ duration: 0.5, delay: 0.1 + idx / 10 }}
  viewport={{ once: true }}
/>
```

**Staggered list items:**
```tsx
transition={{ duration: 0.4, delay: (idx + 1) * 0.1 }}
// or: delay: 0.2 + idx / 50
```

**Shared layout animation (NavBar hover underlay):**
```tsx
<motion.span layoutId="hovered-span" className="absolute inset-0 bg-muted rounded" />
```

**Scroll-triggered NavBar:**
```tsx
const { scrollY } = useScroll()
useMotionValueEvent(scrollY, "change", (latest) => {
  setScrolled(latest > 10)
})
```

**Exit animations:**
```tsx
<AnimatePresence>
  {isOpen && <motion.div exit={{ opacity: 0, y: -20 }} />}
</AnimatePresence>
```

**Ping indicator (current role):**
```tsx
<span className="relative flex h-2 w-2">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
</span>
```

---

## Data Layer

### Static Content — `src/lib/data.ts`

**Edit this file to update all portfolio content.** Key exports:

| Export | Type | Description |
|---|---|---|
| `NAME` | `string` | "Lokesh Singh 👋" |
| `DESCRIPTION` | `string` | Hero section bio |
| `NAV_LINKS` | `array` | `{ label, href }[]` |
| `PROJECTS` | `array` | `{ title, description, image, tech[], href }[]` |
| `EXPERIENCE` | `array` | `{ company, logo, role, period, current, bullets[], tech[] }[]` |
| `BLOGS` | `array` | `{ title, description, date, href }[]` |
| `ACHIVEMENTSTIMELINE` | `array` | `{ year, achievements[] }[]` |
| `TESTIMONIALS` | `array` | `{ name, role, avatar, text }[]` |
| `SOCIALS` | `array` | `{ label, href, icon }[]` (X, GitHub, LinkedIn) |
| `ABOUT_IMAGES` | `array` | Gallery image paths for About page |
| `GITHUB_USERNAME` | `string` | GitHub username for API calls |
| `GITHUB_SHOWCASE_REPOS` | `string[]` | Repo names to display in GitHub section |

### GitHub Server Actions — `src/actions/github.ts`

```ts
// Fetches contribution calendar via GraphQL
fetchContributions(): Promise<ContributionData>

// Fetches repo metadata + languages via Octokit REST
fetchRepoData(repoNames: string[]): Promise<RepoData[]>
```

Requires `GITHUB_ACCESS_TOKEN` environment variable.

### Async Sections with Suspense

```tsx
// Pattern used in GithubSection.tsx
<Suspense fallback={<GithubSkeleton />}>
  <GithubData />   {/* async server component */}
</Suspense>
```

---

## Environment Variables

| Variable | Required | Purpose |
|---|---|---|
| `GITHUB_ACCESS_TOKEN` | Yes (for GitHub section) | GitHub API authentication |

Create a `.env.local` file at the project root. Without this token, the GitHub section shows a "Missing Credentials" fallback message.

---

## Responsive Design

| Breakpoint | Tailwind prefix | Usage |
|---|---|---|
| ≥768px (desktop) | `md:` | Desktop layout, larger typography |
| <768px (mobile/tablet) | `max-md:` | Mobile layout adjustments |
| <640px (small mobile) | `max-sm:` | Extra small adjustments |

**Navigation:**
- Desktop NavBar: `max-md:hidden`
- Mobile NavBar: `md:hidden`

**Common grid patterns:**
```tsx
className="grid grid-cols-1 md:grid-cols-2 gap-4"
className="columns-3 max-md:columns-2"   // masonry layout
```

---

## Forms

Pattern: **React Hook Form + Zod resolver** (see `src/components/form/contactForm.tsx`)

```tsx
const schema = z.object({
  name: z.string().min(4),
  email: z.string().email(),
  message: z.string().min(10),
})

const form = useForm<z.infer<typeof schema>>({
  resolver: zodResolver(schema),
})
```

Toast notifications via Sonner:
```tsx
import { toast } from "sonner"
toast.success("Message sent!")
toast.error("Something went wrong")
```

---

## Icons

Prefer **Tabler Icons** for UI elements:
```tsx
import { IconMoon, IconSun, IconDownload, IconArrowUpRight } from "@tabler/icons-react"
```

Use **Lucide** as fallback only:
```tsx
import { ChevronRight } from "lucide-react"
```

Tech stack icons are SVGs in `public/icons/` referenced via `<Image>` component.

---

## Images

Always use Next.js `<Image>` component:
```tsx
import Image from "next/image"

// Fixed dimensions
<Image src="/me.jpg" width={48} height={48} alt="..." />

// Fill parent container
<div className="relative h-48 w-full">
  <Image src={src} fill className="object-cover" alt="..." />
</div>
```

---

## Key Conventions

- **Server components by default.** Add `"use client"` only when using hooks, event handlers, or browser APIs.
- **Path alias:** `@/` → `src/` (configured in `tsconfig.json`)
- **Class merging:** Always use `cn()` from `@/lib/utils` — never concatenate Tailwind classes with template literals.
- **shadcn/ui config:** Style `new-york`, base color `zinc`, icon library `lucide` — run `npx shadcn@latest add <component>` to add new primitives.
- **No `tailwind.config.ts`:** Tailwind v4 is configured via CSS custom properties in `globals.css`.
- **Prettier:** Tailwind class sorting is enforced via `prettier-plugin-tailwindcss`. Run `prettier --write` before committing.

---

## Common Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build
npm run lint     # ESLint check
npm run format   # Prettier format (if configured as script)
```
