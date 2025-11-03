# 🚀 Modern Portfolio Next.js Template

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)


✨ A clean and modern Next.js portfolio template built with **Next.js** — designed to showcase your projects, skills, and experience with style.

---

## 💼Modern Portfolio

This template is a great starting point for building your **developer portfolio**.  
You can easily showcase:  

- 🌟 **Projects** – Highlight your best work with clean UI sections.  
- 📝 **Blog** – Share knowledge with a built-in blog powered by Next.js & MDX (optional).  
- 📱 **Responsive Design** – Works seamlessly across mobile, tablet, and desktop.  
- 🎨 **Customizable Theme** – Dark/light mode out of the box with `next-themes`.  
- 🚀 **Fast Performance** – Optimized with Turbopack, TailwindCSS, and image optimization.  
- 🔗 **Contact & Social Links** – Make it easy for recruiters/clients to reach you.  

---



## 📊 GitHub Stats

Showcase your **GitHub contributions** and top repositories directly on your portfolio.

This section automatically fetches your GitHub activity, visualizing your open-source footprint beautifully.

### ⚙️ Setup Instructions

1. **Generate a GitHub Token**

   - Go to **Settings → Developer Settings → Personal Access Tokens → Tokens (classic)**  
   - Click **"Generate new token"**, give it a name (e.g., `portfolio-token`)  
   - Check the **`repo`** permission, and then **generate** your token  

2. **Add Token to `.env` File**

   - Create a `.env` file in the root directory of your project  
   - Add the following line:
     ```bash
     GITHUB_ACCESS_TOKEN=your_generated_token_here
     ```
   - This token will be used securely to fetch your contribution and repository data

3. **Add your GitHub username**

   - Open the file:  
     ```bash
     src/lib/data.ts
     ```
   - Replace the placeholder username with your actual GitHub username

4. **Edit Repository Names**

   - In the same file, update the list of repositories you want to showcase under the repos array.

💡 *That’s it! Your live GitHub contributions and repositories will appear automatically on your portfolio.*

---

## 🖼️ Preview

![App Screenshot](https://minimal-portfolio-template-by-lokesh.vercel.app/_next/image?url=%2Fdemoscreenshots%2Fdemo1.png&w=640&q=100)
![App Screenshot](https://minimal-portfolio-template-by-lokesh.vercel.app/_next/image?url=%2Fdemoscreenshots%2Fdemo2.png&w=640&q=100)
![App Screenshot](https://minimal-portfolio-template-by-lokesh.vercel.app/_next/image?url=%2Fdemoscreenshots%2Fdemo3.png&w=640&q=100)
![App Screenshot](https://minimal-portfolio-template-by-lokesh.vercel.app/_next/image?url=%2Fdemoscreenshots%2Fdemo4.png&w=640&q=100)

---

## 📦 Tech Stack

- ⚡ **Next.js 15** – App router, fast builds with Turbopack  
- ⚛️ **React 19** – Latest React features  
- 🎨 **Tailwind CSS 4** – Utility-first styling  
- 🧩 **Zod + React Hook Form** – Schema validation & form handling  
- 🌙 **next-themes** – Dark/light mode support  
- ✨ **Lucide / Tabler Icons** – Beautiful icon sets  
- 🌀 **Motion** – Smooth animations  

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/LokeshXs/Minimal-Portfolio-Template.git
cd Minimal-Portfolio-Template-main
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev

```

Open [https://minimal-portfolio-template-by-lokesh.vercel.app/](https://minimal-portfolio-template-by-lokesh.vercel.app/) with your browser to see the result.

---

✨ *Build, showcase, and share your journey — because your portfolio isn’t just a website, it’s your story.*  
