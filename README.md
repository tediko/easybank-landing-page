# Frontend Mentor - Easybank landing page

![Design preview for the Easybank landing page coding challenge](./design/desktop-preview.jpg)

## Table of contents

- [Overview](#overview)
  - [Intro](#intro)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Features](#features)
  - [Useful resources](#useful-resources)

## Overview

### Intro
Hello! This is my solution to [Easybank landing page - Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). That was a relatively simple challenge but still there was a room to try some new things and learn new approaches. The hardest thing to do was setting these mockups backgrounds and to fit it with design. 


### The challenge

>Your challenge is to build out this landing page and get it looking as close to the design as possible.
>
>You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.
>
>The only JavaScript required is for the mobile navigation toggle. However, you could also try doing this without JS.
>
>Your users should be able to:
>- View the optimal layout for the site depending on their device's screen size
>- See hover states for all interactive elements on the page

### Links

- [LIVE PREVIEW](https://easybank-tediko.netlify.app/) to check my solution.
- [Frontend Mentor](https://www.frontendmentor.io) challenges allow you to improve your skills in a real-life workflow.

## My process

### Built with

 - Webpack
 - SCSS
 - Mobile first
 - Semantic HTML5 markup
 - JavaScript
 - Flexbox
 - Grid
 - Intersection Observer API

### Features

- Added ***touch-enabled*** mobile navigation. It's hard to reach for the hamburger menu on larger phones so I added a menu that is enabled by touchmove feature. Swipe from left to right to open menu on mobiles. 
- Implemented ***Skip to content*** link. Skip links are little internal navigation links that help users move around a page. It is used as an accessibility enhancement that lets keyboard users and screen readers jump from the top of the page to the content without have to go through other elements on the page first.
- Applied ***load events*** to prevent animating content before assets has downloaded. In short it is using JavaScript to listen for a load event, and make use `animation-play-state` to pause our animations until the assets has downloaded. This one I found in [Anna](https://www.frontendmentor.io/solutions/easybank-landing-page-grid-css-animations-js-scss-PC1gxE5Df) solution, so special thanks to her.
- Instead of repeat code for reusable elements i write some ***helper classes*** to reuse them throughout the project. I created classes for headings, paragraphs, buttons, container. This saves time as well as unnecessary code repetition. I will definitely try to improve in this aspect.
- Added ***sticky nav menu*** using `Intersection Observer API`. In short, this API is a native way of detecting if an object has entered the viewport. My observer looking at `.kv` section, and if that section is no longer interacting with viewport it triggers my header to appear.
- I used Sass at-rules `@for` which is a simple ***for loop*** to transition my `header__nav-item`'s while my mobile menu is open.
- Implemented `prefers-reduced-motion` CSS media feature which is used to detect if the user has requested that the system minimize the amount of non-essential motion it uses. Prevent animations in brief.
- `:focus-visible` pseudo class. This selector only indicate focus when it is helpful to the user - such as in cases where the user interacts with the page via a keyboard or some other non-pointing device. It isn't supported by Safari yet, but there is simple [workaround](https://stackoverflow.com/questions/31402576/enable-focus-only-on-keyboard-use-or-tab-press).
- Tried to create more accessible mobile navigation. Used the `aria-expanded` and `aria-controls` attributes.
- To create this project I used webpack. More specifically i used `laravel mix` which is a wrapper for webpack and targets the 80% usecase.

### Useful resources
 
- [LINK - touch-events](https://flaviocopes.com/touch-events/)
- [LINK - skip-to-content link](https://css-tricks.com/how-to-create-a-skip-to-content-link/)
- [LINK - load-events](https://css-tricks.com/making-animations-wait/)
- [DOCS - Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [DOCS - Sass @for](https://sass-lang.com/documentation/at-rules/control/for)
- [LINK - webpack](https://laravel-mix.com/docs/6.0/what-is-mix)