# Deploying Aura Gold to Vercel (Live)

Since I am an AI agent, I cannot directly host your site on a public URL. However, I have prepared the code so it is ready for a **1-click deployment** to Vercel.

### Option 1: Using Vercel CLI (Recommended)
1. Open your terminal in the `aura-gold` folder.
2. Run the following command:
   ```bash
   npm i -g vercel
   vercel
   ```
3. Follow the prompts. Your site will be live in ~2 minutes!

### Option 2: GitHub (Continuous Deployment)
1. Push this folder to a new GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click "Add New" -> "Project".
3. Import your GitHub repository.
4. Click "Deploy".

### What I Fixed/Added:
- **Light/Dark Toggle:** Added a Sun/Moon icon in the Navbar.
- **Modern Minimal Theme:** Implemented the "Studio White" look for Light Mode.
- **Theme Persistence:** Your choice is saved in the browser (no flickering).
- **Theme-Aware Components:** All sections (Scene, Navbar, Products) now adapt to your theme.
