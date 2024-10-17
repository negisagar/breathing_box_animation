# Breathing Animation Web App

This project is inspired by [this Box Breathing project](https://github.com/lassebomh/box-breathing) by [lassebomh](https://github.com/lassebomh).

I wanted a simple breathing animation where I could easily adjust the time duration for each phase, but I couldn't achieve that in the original project. With limited knowledge of HTML and CSS, I used AI to help me build this project from scratch.

Initially, I began modifying lassebomh's code with the help of AI, but as I started adding more features, the complexity increased. Eventually, I decided to rebuild the animation from the ground up, providing specific instructions for each animation phase.

## Features

- **Inhale**: The dot moves from bottom-left to top-left, and the gradient rises accordingly.
- **Hold (1)**: The dot moves from top-left to top-right, and the gradient remains at the top.
- **Exhale**: The dot moves from top-right to bottom-right, and the gradient falls.
- **Hold (2)**: The dot moves from bottom-right to bottom-left, and the gradient remains empty.

Each phase is independent, and you can easily control the time duration of each phase.

### How to Adjust Time Durations

To adjust the time duration for each phase, you can modify the values in the `script.js` file:

```javascript
const inhaleDuration = 4000;  // Duration for Inhale (in milliseconds)
const hold1Duration = 2000;   // Duration for Hold 1 (in milliseconds)
const exhaleDuration = 4000;  // Duration for Exhale (in milliseconds)
const hold2Duration = 2000;   // Duration for Hold 2 (in milliseconds)
```

### New Feature
I have added a pop-up that lets you control the timing of each phase, as well as a refresh button to reset the animation.

## Demo
----

You can try the live demo here: [Breathing Animation Demo](https://negisagar.github.io/breathing_box_animation/)
