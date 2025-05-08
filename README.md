# CinePhile a platform for all movie connoisseurs.

A modern, responsive web application for movie enthusiasts, showcasing its key features for discovering, tracking, and enjoying films and shows. Built with React, React Router, React Bootstrap, and Framer Motion, the website aims to provide a seamless and engaging browsing experience for cinephiles.

## Table of Contents
- [Overview](#overview)
- [Wireframe](#wireframe)
- [Color Scheme](#color-scheme)
- [Key Features](#features)
- [Components](#components)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Future scalability](#future-scalability)


---


## Overview
CinePhile is a responsive and user-friendly web application designed for movie lovers. The project showcases a structured and intuitive interface, providing essential tools for searching movies, viewing details, and managing personal watchlists.

The application is built with modern web technologies (React, React Router, React Bootstrap, Framer Motion), to ensure dynamic interactions, appealing aesthetics, and a smooth user experience. It includes key features such as a robust search functionality, detailed movie information display, and a personalized watchlist system to enhance user engagement.

This is a web development project built with a focus on usability, visual appeal, and a passion for cinema.

---

## Wireframe

<br>
<details>
<summary><strong>Home Page Wireframe</strong> (Click to open)</summary>
<img src="assets/media/wireframe.png">
</details>
<br>

---

## Colour Scheme
__These are the following colours used in my project__
<br>
<details>
<summary><strong>Main/Dark Theme Scheme Palette</strong> (Click to open)</summary>
<img src="/public/main-dark-theme.png" style="width:600px height:600px">
</details>
<br>
<details>
<summary><strong>Light Theme Scheme Palette</strong> (Click to open)</summary>
<img src="/public/light-theme.png" style="width:600px height:600px">
</details>



## Key Features

### Existing Features

- __Consistent Layout__
    - Layout comprised of the navbar for router implementation.
    - Future implementations might redesign the navigation and layout components.

- __Intuitive Search Bar__
  - Located on the Home page.
  - Allows users to quickly search for movies and TV shows by title.
  - Provides real-time feedback during the search.
  - Displays search results clearly.

- __Detailed Movie Information__
  - Accessible by clicking on a movie card from the search results or watchlist.
  - Presents comprehensive details such as title, year, type, rating, genre, director, actors, plot, and awards.
  - Includes a prominent movie poster.
  - Offers a "Back to results" button for easy navigation.

- __Personalized Watchlist__
  - Allows users to add movies they want to watch to a dedicated "To Watch" list.
  - Provides a separate "Watched" list to keep track of viewed movies.
  - Can be accessed through a navigation link.
  - Displays the number of movies/shows in each list.

- __Watchlist Management__
  - Users can move movies between the "To Watch" and "Watched" lists.
  - Option to remove movies from either list.
  - Clear visual distinction between movies in each list.

- __Dynamic Theme Switching__
  - Features a toggle in the navigation bar to switch between a light and dark color scheme.
  - Enhances user preference and accessibility.
  - Animated transition for a smooth theme change.

- __Engaging User Interface__
  - Utilizes React Bootstrap for a consistent and responsive layout.
  - Implements Framer Motion for subtle and appealing animations on interactive elements and during transitions.
  - Smooth navigation between different sections of the application using React 
  Router.

---

  ### Features Left to Implement/Design Changes

- User Accounts: Implementing user authentication to persist watchlists and preferences.
- Local Storage: Saving watchlist data and theme preferences locally.
- Advanced Search Filters: Adding options to filter searches by genre, release year, etc.
- Sorting Options: Allowing users to sort movie lists by different criteria.
- User Ratings: Enabling users to rate movies they have watched.
- Enhanced Movie Details: Displaying more in-depth information about movies.
- Community Features: Potential integration of reviews or discussion sections.

---

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Router: For declarative routing in React applications.
- React Bootstrap: A front-end framework providing pre-built components.
- Framer Motion: A library for creating animations and gestures in React.
- Axios: A promise-based HTTP Client for node.js and the browser.
- React Icons: An npm package that makes it easy to include SVG icons in React projects
- React Transition: An animation library designed explicitly for React applications.

---

## Getting Started

1. __Clone the repository:__

    git clone &lt;repository-url&gt; <br>
    cd &lt;repository-name&gt;

2. __Install dependencies:__

    npm install <br> or <br> yarn install

3. __Start the development server:__

    npm run dev

4. __Stop the running local server__

    CTR + C
