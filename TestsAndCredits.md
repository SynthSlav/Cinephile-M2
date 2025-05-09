# Tests & Credits

This document provides details about the testing strategies employed in this project and acknowledges the various resources and individuals that contributed to its development.

## Table of Contents

- [Testing](#testing)
    - [ESlint Tests](#eslint-tests)
    - [Lighthouse Tests](#lighthouse-tests)
    - [CSS Validator](#css-validator)
- [Credits](#credits)
    - [Libraries & Frameworks](#libraries--frameworks)
    - [APIs](#apis)
    - [Inspiration & Resources](#inspiration--resources)
    - [Contributors](#contributors)

---

## Testing
    This section provides documentation of tests done on CinePhile M2 project.

1.  ### **ESlint Tests:**
    * Layout.jsx ESlint testing showed a motion import not being used error, however the motion is clearly being used on the theme icon toggler in the NavBar. As such the error is purely a warning. Line 6, 30, and 42-50 in Layout.jsx .<br>
    <div style="text-align: center;">
    <img src="/public/layout-eslint.png" style="width:500px height:500px display: block; margin: 0 auto;">
    </div>
    * App.jsx ESlint testing cauhgt an error on (error) (talk about DRY eh ?), the error assumes that (error) is not being used, but the functionality is it serves as a catch(error) in case an error actually occurs. Line 26 in App.jsx . As such the error is purely a warning.<br>
    <div style="text-align: center;">
    <img src="/public/app-eslint.jpg" style="width:500px height:500px display: block; margin: 0 auto;">
    </div>
    * NavLinkStyle.jsx automated ESlint testing produced an error of an useState import not being used. This was an import i previously used/or planned to use but later opted not to. The error was fixed with the removal of the import.<br>
    <div style="text-align: center;">
    <img src="/public/navlinkstyle-eslint.png" style="width:500px height:500px display: block; margin: 0 auto;">
    </div>
    * The other components showed no error when they were automatically tested through the ESlint plugin.<br>
    <div style="text-align: center;">
    <img src="/public/no-error-components.png" style="width:500px height:500px">
    </div>

---

2.  ### **Lighthouse Tests**
    * Lighthouse tests were done on the deployed website on both device options.
        * Desktop Lighthouse test results:
        <div style="text-align: center;">
        <img src="/public/lighthouse-desktop-test.png" style="max-width:600px max-height:600px">
        </div><br<hr>
        * Mobile Lighthouse test results:
        <div style="text-align: center;">
        <img src="/public/lighthouse-mobile-test.png" style="max-width:600px max-height:600px">
        </div><br<hr>
    * Both tests produced great results in terms of performance, accessibility, best practices and SEO. Minor improvements can/will be done to improve the accessibility score by the last deployment and final submission.

---

3. ### **CSS Validator**
    * CSS validator produced no errors or warnings so no changes were needed.
    Double checking for unused classes or commented code might be done to ensure file is clean.
        <div style="text-align: center;">
        <img src="/public/css-validator.png" style="width:500px height:500px display: block; margin: 0 auto;">
        </div><br<hr>

## Credits
    This is a section to provide credit to any and all contributions that were done not by me (or mutually with me).

---

1. ### Libraries & Frameworks
    * [React](https://react.dev/)
    * [React Router](https://reactrouter.com/)
    * [React Bootstrap](https://react-bootstrap.github.io/)
    * [Framer Motion](https://www.framer.com/motion/)
    * [Axios](https://axios-http.com/)
    * [React Icons](https://react-icons.github.io/react-icons/react-icons/)
    * [React Transition Group](https://reactcommunity.org/react-transition-group/)

---

2. ### APIs
    * [OMDb API](https://www.omdbapi.com/)
    * Technically React libraries used can be classed as API's aswell. Many third-party libraries that extend React's functionality. These libraries provide reusable components, functions, and tools that we can use to build our UI

---

3. ### Inspiration & Resources
    * My main inspiration in tackling this project was websites like [IMDb (Internet Movie Database)](https://www.imdb.com/), [Rotten Tomatoes](https://www.rottentomatoes.com/), and not to forget [Letterboxd](https://letterboxd.com/). Although due to my fresh journey into web development this project has a lot of room to grow. A great thank you to the many online tutors that have helped me more or less with creating this project. 
    Including one of my close friends Koche Stamboliev (linkedin profile ommited for privacy.)

---

4. ### Contributors
    * Stack Overflow for the many fixes and inspirations concerning component styles, functionality, deployment and dependency usage.
        * The API calls inspiration was from many online sources and guides on how to do the fetch functionality (including CI materials)
        * The theme toggle functionality in the Layout.
        * The idea to protect the API code due to API Key sweepers that exist solely to use free or unprotected keys that are freely posted in the repos.
    * AI (Gemini/Copilot)
        * Ln 19, 47 in App.jsx (due to not knowing back end to store the watchlist i had to rely on AI for the functionality)
        * Deployment issues that arised when i tried to deploy to GitHub were fixed with AI assistance (blank pages, not updating).
        * Many autocompleted or corrected lines/fixes thanks to Copilot.
        * The scale and difficulty of this project made me lose track of some of the fixes and changes done by (Copilot mainly).
    * Brian Fritz, the creator of OMDB Api. Many thanks to that person for providing a free API Key for many learners like myself to use on their journey.