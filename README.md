# 🌍 TERRA — Global Country & Climate Explorer

A interactive 3D globe-based web application that lets users explore countries, compare climate data, and analyze global statistics through an immersive dark-themed interface.

---

## 📌 Project Overview

TERRA is a web application where users can spin a 3D globe, click on any country marker to instantly view detailed country information and live weather data, and compare multiple countries side by side. The app is built with vanilla JavaScript, Three.js for 3D rendering, and pulls data from two free public APIs.

I came up with this idea because I wanted to build something that felt genuinely different from a standard list-based data app. A 3D globe makes the data exploration feel spatial and intuitive — you can literally spin the world and land on a country.

---

## 🔗 APIs Used

| API | Purpose | Auth Required |
|---|---|---|
| [REST Countries](https://restcountries.com) | Country data — name, population, area, region, capital, languages, currencies | ❌ No key needed |
| [wttr.in](https://wttr.in) | Live weather data by city name | ❌ No key needed |
| [7timer.info](https://www.7timer.info/) | Live weather data by city name | ❌ No key needed |
**How they connect:**
REST Countries provides the capital city name → that city name is passed directly to wttr.in to fetch live weather. Clean two-step API chain.

---

## ✨ Planned Features

### Core Features (Milestones 2 & 3)
- **3D Interactive Globe** — Drag to rotate, scroll to zoom, click markers to select countries
- **Country Info Card** — Pops up on click with population, area, region, timezone, languages, currency
- **Live Weather Block** — Shows real-time temperature, humidity, wind speed for the country's capital
- **Search** — Search countries by name, capital, or region using `Array.filter()`
- **Filter Panel** — Filter by region, subregion, and minimum population using chained `Array.filter()`
- **Sort Options** — Sort by name (A-Z / Z-A), population, or area using `Array.sort()`
- **Multi-Country Comparison Panel** — Add up to 5 countries to a side-by-side comparison panel, sortable by any stat using `Array.sort()`

### Bonus Features (if time permits)
- **Debouncing** on the search input to avoid filtering on every keystroke
- **Local Storage** to save favorite countries and dark/light mode preference
- **Loading indicators** (skeleton shimmer) during API calls
- **Marker pulse animation** on the globe for visual polish

---

## 🛠️ Technologies

- **React** — Core stack, vite
- **Three.js (r128)** — 3D globe rendering via WebGL
- **REST Countries API** — Country dataset
- **wttr.in / 7timer.info API** — Weather data
- **Google Fonts** — Typography
- **GitHub Pages** — Deployment (Milestone 4)

---

## ⚙️ How to Run

No build tools or npm required. Just open in a browser.

```bash
# Clone the repository
git clone https://github.com/firewalls/terra-globe.git

# Navigate into the project
cd terra-globe

# Install packages
npm i

# Run project
npm run dev 
```
---

## 📊 HOF Usage Plan

| Operation | Method | Where Used |
|---|---|---|
| Search by name/capital | `Array.filter()` | Search input handler |
| Filter by region | `Array.filter()` | Region dropdown |
| Filter by population | `Array.filter()` | Population dropdown |
| Chained multi-filter | `Array.filter()` (chained) | All filters applied together |
| Sort by name | `Array.sort()` with `localeCompare` | Sort buttons |
| Sort by population/area | `Array.sort()` with numeric comparator | Sort buttons |
| Extract subregion list | `Array.map()` + `Set` | Filter dropdown population |
| Total population stat | `Array.reduce()` | Globe stats display |
| Check if in compare list | `Array.find()` | Compare button toggle |
| Render results | `Array.map()` → DOM elements | Results list render |

---

## 🗓️ Milestones

| Milestone | Description | Deadline |
|---|---|---|
| **M1** | Project setup, idea, README, GitHub repo | 23rd March |
| **M2** | API integration, dynamic data display, responsive layout | 1st April |
| **M3** | Search, filter, sort, compare panel, dark mode | 8th April |
| **M4** | Final cleanup, deployment, updated docs | 10th April |

---
## Progress (day wise)

### Day 1
- **Initialized project**: Created a new Vite + React app using `npm create vite@latest` and selected React.
- **Set up Tailwind CSS**: Installed Tailwind and its dependencies.
- **Customized theme**: Defined custom colors, fonts, and other design tokens in `index.css`  to establish a consistent theme for the app.

---
## 👤 Author

**[Moksh]**
GitHub: [@firewallls](https://github.com/firewallls)
