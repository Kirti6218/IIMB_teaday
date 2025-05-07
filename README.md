# 🍵 Tea Day

A modern, elegant cafe and beverage website built with **React**, **TypeScript**, **Tailwind CSS**, and deployed via **GitHub Pages** using **GitHub Actions**.

---

## 🔗 Live Demo

🌐 [https://kirti6218.github.io/teaDay](https://kirti6218.github.io/teaDay)

---

## 🛠 Tech Stack

### 🔧 Core Stack
- **React** – UI framework
- **TypeScript** – Static typing for safer JS
- **Vite** – Super-fast bundler and dev server
- **React Router DOM** – Single-page routing

### 💅 UI & Styling
- **Tailwind CSS** – Utility-first CSS framework
- **shadcn/ui** – Accessible component primitives
- **Lucide React** – Icon system
- **Sonner** & **Custom Toaster** – Toast notifications

### 🔄 Data & State
- **TanStack React Query** – Data fetching & caching

### 🚀 Build & Deploy
- **GitHub Actions** – CI/CD pipeline for auto-deploy
- **GitHub Pages** – Free static hosting
- **vite.config.ts** with `base: "/teaDay/"` for Pages support

---

## 📦 Getting Started

### 1. Clone this repo

```bash
git clone https://github.com/Kirti6218/teaDay.git
cd teaDay
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

---

## 📤 Deployment

This site is automatically deployed via **GitHub Actions** on each push to the `main` branch.

### 🛠 To Deploy Manually (if needed):

```bash
npm run build
git add .
git commit -m "Your message"
git push origin main
```

GitHub Actions will publish to the `gh-pages` branch and host at:

📍 https://kirti6218.github.io/teaDay/

---

## 📁 Project Structure

```
teaDay/
├── public/                 # Static files (favicon, 404.html, images)
├── src/
│   ├── components/         # Reusable components (Navbar, Footer, etc.)
│   ├── pages/              # Route-based pages (Index, About, Menu)
│   ├── App.tsx             # Route layout
│   └── main.tsx            # ReactDOM entry point
├── .github/workflows/      # GitHub Actions deploy config
├── vite.config.ts          # Vite + base path for GitHub Pages
├── tailwind.config.ts      # Tailwind CSS config
├── postcss.config.js       # PostCSS setup
└── package.json
```

---

## 💬 Feedback

If you'd like to contribute, open an issue or fork and create a pull request. This is a great template for any cafe, food truck, or beverage website!

---

## 🧡 Credits

Made with ☕ by [Kirti6218](https://github.com/Kirti6218)