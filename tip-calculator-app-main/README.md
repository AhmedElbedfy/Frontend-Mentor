# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

## My process

### Built with

- HTML
- CSS
  - Flexbox
  - CSS Grid
  - Media Query
- JavaScript

### What I learned

I didn't know how to remove the up and down arrow from the input type number before

```css
/* for removing the up and down arroe in the input type number */
/* ref --> https://stackoverflow.com/questions/26024771/styling-an-input-type-number */
/* Chrome */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Mozila */
input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
  margin: 0;
}
```

Also I tried to add padding to the input but it didn't work until I added this some border box code

```css
/* refrence --> https://stackoverflow.com/questions/6586302/add-padding-to-html-text-input-field */
padding-right: 5px;
-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
-moz-box-sizing: border-box; /* Firefox, other Gecko */
box-sizing: border-box; /* Opera/IE 8+ */
```

input event listener was new to me I was using onchange especially with React before but this my first time I use input

```js
Element.addEventListener("input", fun());
```

## Author

- Frontend Mentor - [@ahmedelbedfy](https://www.frontendmentor.io/profile/ahmedelbedfy)
- Twitter - [@ahmedelbedfy](https://www.twitter.com/ahmedelbedfy)
- LinkedIn - [Ahmed Khaled](https://www.linkedin.com/in/ahmedelbedfy/)
