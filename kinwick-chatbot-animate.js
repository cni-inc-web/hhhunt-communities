function waitForBubbleButton() {
    let bubble = document.querySelector("#chatbase-bubble-button");
    let introBox = document.querySelector("#chatbase-message-bubble");

    if (bubble) {
        console.log("Button found! Starting animation.");
        startPulsing(bubble);
    } else {
        console.log("Waiting for button...");
        setTimeout(waitForBubbleButton, 500); // Keep checking every 500ms
    }
}

function startPulsing(bubble) {
    let pulseCount = 0;
    let maxPulses = 6;
    let growing = true;

    function pulse() {
        if (pulseCount >= maxPulses) {
            bubble.style.setProperty("width", "4vw", "important");
            bubble.style.setProperty("height", "4vw", "important");
            introBox.style.setProperty("bottom", "5vw", "important");
            return;
        }

        bubble.style.setProperty("width", growing ? "4vw" : "3vw", "important");
        bubble.style.setProperty("height", growing ? "4vw" : "3vw", "important");
        introBox.style.setProperty("bottom", growing ? "5vw": "4vw", "important");
        
        growing = !growing;
        if (!growing) pulseCount++;

        setTimeout(pulse, 500);
    }

    pulse();
}

document.addEventListener("DOMContentLoaded", waitForBubbleButton);