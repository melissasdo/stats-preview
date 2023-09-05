# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![Desktop version](https://snipboard.io/DlLuBQ.jpg)
![Mobile version](https://snipboard.io/8JoYqu.jpg)

### Links

- Solution URL: [Git repository](https://github.com/mmercurydevs/stats-preview)
- Live Site URL: [Live URL](https://stats-preview-o1xl.onrender.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Bootstrap

### What I learned

I was really proud of figuring out how to get the user's screen size and use it as a parameter to change the layout.

```js
if (req.headers["user-agent"].includes("Mobile")) {
  screenSize = "small";
} else if (req.headers["user-agent"].includes("Tablet")) {
  screenSize = "medium";
} else {
  screenSize = "large";
}
```

### Useful resources

- [Removing class using jquery](https://stackoverflow.com/questions/28570852/removeclass-addclass-when-page-load) - This resource helped me because I'd forgotten how to use jQuery for this

## Author

- Frontend Mentor - [@melissasdo](https://www.frontendmentor.io/profile/melissasdo)
- GitHub - [@melissasdo](https://github.com/melissasdo)
