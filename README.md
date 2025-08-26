# John Rafael L. Jocson - Portfolio

[![Deploy to GitHub Pages](https://github.com/JR-Jocson/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/JR-Jocson/portfolio/actions/workflows/deploy.yml)

> Professional portfolio website built with Astro and Tailwind CSS

## 🚀 Live Demo

[View Live Demo](https://jr-jocson.github.io/portfolio/)

## 🛠️ Local Development

1. Clone the repository
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open [http://localhost:4321](http://localhost:4321) in your browser

## 🚀 Deployment

This project is set up to deploy automatically to GitHub Pages using GitHub Actions. To deploy your own copy:

1. Create a new repository on GitHub named `portfolio` (or your preferred name)
2. Update `astro.config.mjs` with your GitHub username and repository name
3. Push your code to the `main` branch
4. Go to your repository Settings > Pages
5. Under "Build and deployment", select "GitHub Actions"
6. The site will be deployed to `https://<your-username>.github.io/portfolio/`

## 🏗️ Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
