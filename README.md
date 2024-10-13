# Digital Flip Clock
![17287950518993409643625383082323](https://github.com/user-attachments/assets/11d4fde0-81b9-4c37-bf2f-6e26af94aa99)


This project is a simple digital flip clock built using HTML, CSS, and JavaScript. The clock displays the current time in hours, minutes, and seconds, updating every second. It features a smooth flip animation that mimics the behavior of a traditional flip clock.

## Features

- **Flip Animation**: Smooth flip animations for hours, minutes, and seconds.
- **Responsive Design**: Fits any screen size.
- **Custom Font**: Utilizes the "Madimi One" font for a modern, stylish look.
- **Time Transition**: The clock smoothly transitions from one second to the next.
- **Automatic Hour, Minute, and Second Updates**: Time updates dynamically without requiring page refreshes.

## How to Use

1. Clone or download this repository.
2. Open the `index.html` file in your browser.
3. Watch the real-time digital clock with flip animations for hours, minutes, and seconds.

## Files

- `index.html`: The main HTML structure of the flip clock.
- `style.css`: The CSS file for the clock's styling, including animations and layout.
- `script.js`: The JavaScript file that manages the clock's time updates and animations.

## Technologies Used

- **HTML**: Provides the structure of the clock and containers for the time.
- **CSS**: Styles the clock with custom animations for the flipping effect.
- **JavaScript**: Handles the time logic and updates the displayed time every second.

## How it Works

- **Flip Animation**: A CSS animation is applied to the numbers that simulates the effect of flipping down to show the next value.
- **Time Update**: JavaScript is used to get the current time and update the DOM elements for hours, minutes, and seconds dynamically.

## Animation Details

The flip effect is achieved using CSS `@keyframes` for the smooth transition between numbers. The time values are updated every second, and the clock flips to the next number.

```css
@keyframes swipe {
    50%, to {
        transform: translateY(-100px);
    }
}









