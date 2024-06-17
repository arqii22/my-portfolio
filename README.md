# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



# Portfolio Website

This is a React-based portfolio website to showcase projects, provide a downloadable resume, and enable contact through a form.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Overview](#project-overview)
- [Styling](#styling)
- [Navigation](#navigation)

## Project Structure

```
my-portfolio/
├── public/
│   ├── index.html
│   └── resume.jpg
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Resume.tsx
│   │   ├── ProjectTwo.tsx
│   │   ├── ContactForm.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── styles/
│       ├── Hero.css
│       ├── Resume.css
│       ├── ProjectTwo.css
│       └── ContactForm.css
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your-username/my-portfolio.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the development server
   ```sh
   npm start
   ```

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run eject`: If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

## Project Overview

This portfolio website includes several sections including: About, Resume, Contact, and Projects.

## Styling

All CSS styles are located in the `styles` folder and imported into their respective components. The styles define the layout, colors, fonts, and other visual aspects of the components.

## Navigation

This project uses `react-router-dom` for client-side routing. Links and routes are set up to navigate between different pages (e.g., home, project details, resume, contact).

To add new pages or components, follow the existing structure and update the routes in your main app component (`App.tsx`).