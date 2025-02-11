function waitForBubbleButton() {
    let bubble = document.querySelector("#chatbase-bubble-button");
    let introBox = document.querySelector("#chatbase-message-bubbles");

    if (bubble && introBox) {
        console.log("Button and message bubble found! Starting animation.");
        startPulsing(bubble, introBox);
    } else {
        console.log("Waiting for button and message bubble...");
        setTimeout(waitForBubbleButton, 500); // Keep checking every 500ms
    }
}

function startPulsing(bubble, introBox) {
    let pulseCount = 0;
    let maxPulses = 6;
    let growing = true;

    // Initial opacity set to 0 before any animation starts
    introBox.style.setProperty("opacity", "0", "important");

    function pulse() {
        if (pulseCount >= maxPulses) {
            bubble.style.setProperty("width", "4vw", "important");
            bubble.style.setProperty("height", "4vw", "important");
            introBox.style.setProperty("opacity", "1", "important"); // Final opacity set to 1
            console.log("Pulsing finished, introBox visible.");
            return;
        }

        bubble.style.setProperty("width", growing ? "4vw" : "3vw", "important");
        bubble.style.setProperty("height", growing ? "4vw" : "3vw", "important");

        growing = !growing;
        if (!growing) pulseCount++;

        setTimeout(pulse, 500);
    }

    pulse();
}

document.addEventListener("DOMContentLoaded", waitForBubbleButton);
