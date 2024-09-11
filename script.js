document.addEventListener('DOMContentLoaded', function() {
    const dot = document.querySelector('.dot');
    const gradient = document.querySelector('.gradient');
    const centerText = document.querySelector('.center-text');

    const inhaleDuration = 6000;  // Inhale time in milliseconds
    const hold1Duration = 6000;  // Hold 1 time in milliseconds
    const exhaleDuration = 6000; // Exhale time in milliseconds
    const hold2Duration = 6000;  // Hold 2 time in milliseconds

    // Adjusted fade duration based on 15% of the phase duration
    const fadeDurationInhale = inhaleDuration * 0.15;
    const fadeDurationHold1 = hold1Duration * 0.15;
    const fadeDurationExhale = exhaleDuration * 0.15;
    const fadeDurationHold2 = hold2Duration * 0.15;

    function fadeInText(text, fadeDuration) {
        centerText.textContent = text;
        centerText.style.transition = `opacity ${fadeDuration}ms ease-in-out`; // Smoother transition
        centerText.style.opacity = '1';  // Fade in
    }

    function fadeOutText(fadeDuration) {
        centerText.style.transition = `opacity ${fadeDuration}ms ease-in-out`; // Smoother transition
        centerText.style.opacity = '0';  // Fade out
    }

    function runInhale() {
        fadeInText("Inhale", fadeDurationInhale);
        dot.style.transition = `top ${inhaleDuration}ms linear`;
        gradient.style.transition = `height ${inhaleDuration}ms linear`;

        // Move dot from bottom-left to top-left and gradient rises
        dot.style.top = '0';
        dot.style.left = '0'; // Ensure it's aligned with the left
        gradient.style.height = '100%';

        // Fade out the text during the last 15% of the inhale phase
        setTimeout(() => fadeOutText(fadeDurationInhale), inhaleDuration * 0.85);

        // Start Hold 1 after Inhale completes
        setTimeout(runHold1, inhaleDuration);
    }

    function runHold1() {
        fadeInText("Hold", fadeDurationHold1);
        dot.style.transition = `left ${hold1Duration}ms linear`;

        // Dot moves from top-left to top-right, gradient stays at full height
        dot.style.left = '100%';
        gradient.style.height = '100%'; // Gradient stays full

        // Fade out the text during the last 15% of the hold phase
        setTimeout(() => fadeOutText(fadeDurationHold1), hold1Duration * 0.85);

        // Start Exhale after Hold 1 completes
        setTimeout(runExhale, hold1Duration);
    }

    function runExhale() {
        fadeInText("Exhale", fadeDurationExhale);
        dot.style.transition = `top ${exhaleDuration}ms linear`;
        gradient.style.transition = `height ${exhaleDuration}ms linear`;

        // Dot moves from top-right to bottom-right and gradient falls
        dot.style.top = '100%';
        gradient.style.height = '0';

        // Fade out the text during the last 15% of the exhale phase
        setTimeout(() => fadeOutText(fadeDurationExhale), exhaleDuration * 0.85);

        // Start Hold 2 after Exhale completes
        setTimeout(runHold2, exhaleDuration);
    }

    function runHold2() {
        fadeInText("Hold", fadeDurationHold2);
        dot.style.transition = `left ${hold2Duration}ms linear`;

        // Dot moves from bottom-right to bottom-left, gradient stays empty
        dot.style.left = '0';
        gradient.style.height = '0'; // Gradient stays empty

        // Fade out the text during the last 15% of the hold phase
        setTimeout(() => fadeOutText(fadeDurationHold2), hold2Duration * 0.85);

        // Start the entire sequence again after Hold 2 completes
        setTimeout(runInhale, hold2Duration);
    }

    // Start the first animation cycle
    runInhale();
});
