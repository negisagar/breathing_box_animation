document.addEventListener('DOMContentLoaded', function() {
    const dot = document.querySelector('.dot');
    const gradient = document.querySelector('.gradient');
    const centerText = document.querySelector('.center-text');
    const countdown = document.getElementById('countdown');
    
    let animationTimeouts = [];
    
    const inhaleDuration = 6000;
    const hold1Duration = 6000;
    const exhaleDuration = 6000;
    const hold2Duration = 6000;

    const fadeDurationInhale = inhaleDuration * 0.15;
    const fadeDurationHold1 = hold1Duration * 0.15;
    const fadeDurationExhale = exhaleDuration * 0.15;
    const fadeDurationHold2 = hold2Duration * 0.15;

    function fadeInText(text, fadeDuration) {
        centerText.textContent = text;
        centerText.style.transition = `opacity ${fadeDuration}ms ease-in-out`;
        centerText.style.opacity = '1';
    }

    function fadeOutText(fadeDuration) {
        centerText.style.transition = `opacity ${fadeDuration}ms ease-in-out`;
        centerText.style.opacity = '0';
    }

    function runInhale() {
        fadeInText("Inhale", fadeDurationInhale);
        dot.style.transition = `top ${inhaleDuration}ms linear`;
        gradient.style.transition = `height ${inhaleDuration}ms linear`;
        dot.style.top = '0';
        dot.style.left = '0';
        gradient.style.height = '100%';
        animationTimeouts.push(setTimeout(() => fadeOutText(fadeDurationInhale), inhaleDuration * 0.85));
        animationTimeouts.push(setTimeout(runHold1, inhaleDuration));
    }

    function runHold1() {
        fadeInText("Hold", fadeDurationHold1);
        dot.style.transition = `left ${hold1Duration}ms linear`;
        dot.style.left = '100%';
        animationTimeouts.push(setTimeout(() => fadeOutText(fadeDurationHold1), hold1Duration * 0.85));
        animationTimeouts.push(setTimeout(runExhale, hold1Duration));
    }

    function runExhale() {
        fadeInText("Exhale", fadeDurationExhale);
        dot.style.transition = `top ${exhaleDuration}ms linear`;
        gradient.style.transition = `height ${exhaleDuration}ms linear`;
        dot.style.top = '100%';
        gradient.style.height = '0';
        animationTimeouts.push(setTimeout(() => fadeOutText(fadeDurationExhale), exhaleDuration * 0.85));
        animationTimeouts.push(setTimeout(runHold2, exhaleDuration));
    }

    function runHold2() {
        fadeInText("Hold", fadeDurationHold2);
        dot.style.transition = `left ${hold2Duration}ms linear`;
        dot.style.left = '0';
        animationTimeouts.push(setTimeout(() => fadeOutText(fadeDurationHold2), hold2Duration * 0.85));
        animationTimeouts.push(setTimeout(runInhale, hold2Duration));
    }

    function countdownTimer(callback) {
        countdown.style.display = 'block';
        let counter = 3;
        countdown.textContent = counter;

        const interval = setInterval(() => {
            counter--;
            countdown.textContent = counter;

            if (counter === 0) {
                clearInterval(interval);
                countdown.style.display = 'none';
                callback();
            }
        }, 1000);
    }

    // Initial countdown when the page loads
    countdownTimer(runInhale);
});
