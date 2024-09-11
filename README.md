# Breathing Animation Web App

This project is inspired by: https://github.com/lassebomh/box-breathing

I wanted a simple animation where I could change the time duration of each side but was not able to do it in the original project.

I had less knowledge of HTML and CSS, but with the help of AI, I was able to build this project from scratch.

Initially, I started editing the above user's code with the help of AI: https://github.com/lassebomh/box-breathing, but it was getting more complex as I added more features.

So, I started from scratch and gave specific instructions for each animation phase and compiled the animation again from the ground up.

## Features

- **Inhale**: The dot moves from bottom-left to top-left, and the gradient rises with it.
- **Hold (1)**: The dot moves from top-left to top-right, and the gradient stays at the top.
- **Exhale**: The dot moves from top-right to bottom-right, and the gradient falls.
- **Hold (2)**: The dot moves from bottom-right to bottom-left, and the gradient stays empty.

Each phase is independent, and you can easily control the time duration of each phase.

## How to Adjust Time Durations

To adjust the time duration for each phase, you can modify the values in the `script.js` file:

```javascript
const inhaleDuration = 4000;  // Duration for Inhale (in milliseconds)
const hold1Duration = 2000;   // Duration for Hold 1 (in milliseconds)
const exhaleDuration = 4000;  // Duration for Exhale (in milliseconds)
const hold2Duration = 2000;   // Duration for Hold 2 (in milliseconds)
