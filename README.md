_Noroff Semester Project_

# HOTDOG SHELTER | _Pet Adoption Website_

## Description:

Welcome to Hot Dog Shelter, a website where you can find your new companion! This repository is a **multi-page web** application built with **Vite** & **Tailwind**. It features various routes for authentication, user profiles, post listings, and more using the Noroff **API**. The project is built using modern JavaScript practices and deployed to Netlify.

# Table of Contents

- [Prerequisites](#prerequisites)

- [Installation](#installation)

- [Project Scripts](#project-scripts)

- [Deployment](#deployment)

- [Dependencies](#dependencies)

- [Ackowledgements](#acknowledgements)

## Prerequisites :

Before you begin, ensure you have the following installed on your system:

- **Node.js**: v20.11.1 or higher

- **npm**: v10.9.0 or higher

- **git**: v2.43.0 or higher

## Installation :

### Cloning the repo:

```bash
git clone https://github.com/aggicreative555/hot-dog-shelter.git
```

### Installing dependencies:

This project uses several dependencies for development and testing. Here is the list of all dependencies used:

- **Vite**: Code compiler
- **Eslint**: Code linting
- **Prettier**: Code formatting
- **Tailwind**: Styling

**1. Run the following commands to install all dependencies:**

```bash
npm install
```

**2. After installation, ensure all dependencies are installed properly:**

```bash
npm list
```

## Project Scripts :

### Terminal commands:

**1. Run the developement server:**

```bash
npm run dev
```

**2. Build for production:**

```bash
npm run build
```

**3. Preview:**

```bash
npm run preview
```

**4. Run linting checks:**

```bash
npm run lint
```

**5. Run fix eslint errors:**

```bash
npm run lint:fix
```

**6. Run with prettier**

```bash
npm run format
```

**7. Check prettier formatting**

```bash
npm run format:check
```


## Deployment:
This project can be deployed on platforms like [Netlify](https://app.netlify.com). When deploying to Netlify, ensure you have the following configurations:

- **1. Build project**: 
```bash 
npm run build
```
- **2. Deploy via Netlify**: 
    - Go to Netlify and log in.

    - Click "New site from Git" and connect your GitHub repo.

    - Set the build command: npm run build

    - Set the publish directory: dist/

    - Click Deploy.


## Dependencies List:

- **Frontend & Styling:**
    - Vite – Fast frontend tooling
    - Tailwind CSS – Utility-first CSS framework
    - PostCSS - Tailwind pre-processor
    - Autoprefixer – Adds vendor prefixes

- **Development Tools:**
    - ESLint – Linting for cleaner code
    - Prettier – Automatic code formatting
    - dotenv – Environment variable management

### License:

This project uses an **ISC** license.

### Acknowledgements:

This project is a part of my _Noroff University of Technology_ education.
