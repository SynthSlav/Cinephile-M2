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
    <img src="/public/layout-eslint.png" style="width:500px height:500px">
    </div>
    * App.jsx ESlint testing cauhgt an error on (error) (talk about DRY eh ?), the error assumes that (error) is not being used, but the functionality is it serves as a catch(error) in case an error actually occurs. Line 26 in App.jsx . As such the error is purely a warning.<br>
    <div style="text-align: center;">
    <img src="/public/app-eslint.jpg" style="width:500px height:500px">
    </div>
    * NavLinkStyle.jsx automated ESlint testing produced an error of an useState import not being used. This was an import i previously used/or planned to use but later opted not to. The error was fixed with the removal of the import.<br>
    <div style="text-align: center;">
    <img src="/public/navlinkstyle-eslint.png" style="width:500px height:500px">
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
        <img src="/public/lighthouse-desktop-test.png" style="width:500px height:500px">
        </div><br<hr>
        * Mobile Lighthouse test results:
        <div style="text-align: center;">
        <img src="/public/lighthouse-mobile-test.png" style="width:500px height:500px">
        </div><br<hr>
    * Both tests produced great results in terms of performance, accessibility, best practices and SEO. Minor improvements can/will be done to improve the accessibility score by the last deployment and final submission.

---

3. ### **CSS Validator**
    * CSS validator produced no errors or warnings so no changes were needed.
    Double checking for unused classes or commented code might be done to ensure file is clean.
        <div style="text-align: center;">
        <img src="/public/css-validator.png" style="width:500px height:500px">
        </div><br<hr>
