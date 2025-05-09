# CinePhile a platform for all movie connoisseurs.

A modern, responsive web application for movie enthusiasts, showcasing its key features for discovering, tracking, and enjoying films and shows. Built with React, React Router, React Bootstrap, and Framer Motion, the website aims to provide a seamless and engaging browsing experience for cinephiles.

## Table of Contents
- [Overview](#overview)
- [Wireframes](#wireframes)
- [Colour Scheme](#colour-scheme)
- [Key Features](#key-features)
    - [Existing Features](#existing-features)
    - [Features Left to Implement/Design Changes](#features-left-to-implementdesign-changes)
- [Components](#components)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Future scalability](#future-scalability)
- [Tests & Credits](#tests-credits)


---


## Overview
CinePhile is a responsive and user-friendly web application designed for movie lovers. The project showcases a structured and intuitive interface, providing essential tools for searching movies, viewing details, and managing personal watchlists.

This is a web development project built with a focus on usability, visual appeal, and a passion for cinema.

---

## Wireframes

<br>
<details>
<summary><strong>Home Page Wireframe</strong> (Click to open)</summary>
<img src="/public/home-desktop-wireframe.png">
</details>
<br>

---

<br>
<details>
<summary><strong>Watchlist Page Wireframe</strong> (Click to open)</summary>
<img src="/public/watchlist-desktop-wireframe.png">
</details>
<br>

---

<br>
<details>
<summary><strong>About Page Wireframe</strong> (Click to open)</summary>
<img src="/public/about-desktop-wireframe.png">
</details>
<br>

---

<br>
<details>
<summary><strong>Mobile View Wireframes</strong> (Click to open)</summary>
<img src="/public/mobile-wireframes.png">
</details>
<br>

## Colour Scheme
__These are the following colours used in my project__
<br>
<details>
<summary><strong>Main/Dark Theme Scheme Palette</strong> (Click to open)</summary>
<img src="/public/main-dark-theme.png" style="width:500px height:500px">
</details>
<br>
<details>
<summary><strong>Light Theme Scheme Palette</strong> (Click to open)</summary>
<img src="/public/light-theme.png" style="width:500px height:500px">
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

---

## Deployment

 * The site was deployed to GitHub pages. The steps to deploy are as follows: 
    1. In the CLI run: 
        - npm install gh-pages --save-dev
    2. Add homepage property to package.json: 
        - "homepage": "http://synthslav.github.io/Cinephile-M2"
    3. Add deploy scripts to package.json
        - "scripts": {<br>
    "start": "react-scripts start",<br>
    "build": "react-scripts build",<br>
    "test": "react-scripts test",<br>
    "eject": "react-scripts eject",<br>
    "predeploy": "npm run build",<br>
    "deploy": "gh-pages -d build"<br>
    }
    4. Build the project: 
        - CLI Command: npm run build
    5. Deploy the project:
        - CLI Command: npm run deploy
    6. After these steps go on the GitHub Repo and:
        - Navigate to the "Settings" tab.
        - Click on "Pages" in the left sidebar.
        - Under the "Source" section, change the dropdown to "Deploy from a branch".
        - Select the "gh-pages" branch as the source.
        - Ensure the "(root)" option is selected for the folder.
        - Click "Save".
    7. The live deployement should appear on the repo page in maximum 5-10 minutes (the deployment can potentially take a while).
--- 
    
- The live link for the project repo: [CinePhile M2](https://github.com/SynthSlav/Cinephile-M2.git)
- The live deployed version of the project [CinePhile M2](https://synthslav.github.io/Cinephile-M2)

--- 

## Usage

This section provides a brief guide on how to use the Cinephile-M2 application.

1.  **Find Movies & Shows:**
    * Go to the [Home](#key-features) page.
    * Type the title into the search bar and press Enter.
    * Browse the results.

---

2.  **See Details:**
    * Click on any movie or show card from the search results or your [Watchlist](#key-features).
    * View detailed information, including plot, cast, and ratings.
    * Use the "Back to results" button to return.

---

3.  **Manage Your Watchlist:**
    * **Add to Watchlist:**
        * Perform a search on the [Home](#key-features) page.
        * On the movie cards in the search results, click the "Add to Watchlist" button.

    * **View Watchlist:**
        * Click the "Watchlist" link in the navigation bar.
        * You'll see two tabs: "To Watch" and "Watched".

    * **"To Watch" List:**
        * **Mark as Watched:** On the cards in the "To Watch" list, click the "Mark as Watched" button.
        * **Remove:** On the cards in the "To Watch" list, click the "Remove from Watchlist" button.

    * **"Watched" List:**
        * **Remove:** On the cards in the "Watched" list, click the "Remove from Watchlist" button.

    * **Detailed View:** Both Tab lists have the option for a detailed view upon clicking a card.

---

4.  **Change Theme:**
    * Find the light/dark mode toggle icon in the navigation bar.
    * Click it to switch between color themes.

---

## Future Scalability

The Cinephile-M2 application has been built with scalability in mind, leveraging React and a modular component-based architecture. The following points outline potential areas for future growth and expansion:

* **Backend Integration:** The current version primarily focuses on the front-end experience using data fetched from the OMDB API. Implementing a dedicated backend would enable:
    * **User Accounts:** Persisting user data (watchlists, preferences, ratings) across sessions and devices.
    * **Database Storage:** Storing more extensive movie and user data, potentially allowing for richer features.
    * **Custom APIs:** Building APIs tailored to the application's specific needs, potentially improving performance and data retrieval.

* **Enhanced Search and Filtering:** The existing search functionality can be expanded with advanced filters (genre, release year, rating) and sorting options, allowing users to refine their searches more effectively.

* **Community Features:** Integrating user ratings, reviews, and discussion forums could foster a sense of community around the application and increase user engagement.

* **Recommendation Systems:** Implementing algorithms to suggest movies and TV shows based on user viewing history and preferences could enhance discovery and user satisfaction.

---


## Tests & Credits

For detailed information on tests and credits for this project, please refer to the [TestsAndCredits.md](TestsAndCredits.md) file.
