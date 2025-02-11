// Function to inject CSS dynamically
function injectCSS() {
    const style = document.createElement("style");
    style.innerHTML = `
        #chatbase-bubble-button {
            border-radius: 50% !important;
        }
        
        img[src="https://backend.chatbase.co/storage/v1/object/public/chat-icons/7d2b8915-b12a-448e-a97b-8716268b75a8/gzjoC_Mftn15aquSPL8VE.jpg"] {
            width: 100% !important;
            height: 100% !important;
        }

        @media (min-width: 992px) {
            #chatbase-bubble-window {
                margin-bottom: 1vw !important;
            }
            #chatbase-message-bubbles {
                right: 1vw !important;
                bottom: 5vw !important;
            }
            #chatbase-bubble-button {
                width: 4vw !important;
                height: 4vw !important;
            }
        }

        @media (max-width: 991px) {
            #chatbase-bubble-button {
                width: 8vw !important;
                height: 8vw !important;
                min-width: 65px !important;
                min-height: 65px !important;
            }
        }
    `;
    document.head.appendChild(style);
}

// Function to wait for the button to load
function waitForBubbleButton() {
    let bubble = document.querySelector("#chatbase-bubble-button");
    let introBox = document.querySelector("#chatbase-message-bubbles");

    if (bubble && introBox) {
        console.log("Button and message bubble found! Starting animation.");
        startPulsing(bubble, introBox);
    } else {
        console.log("Waiting for button and message bubble...");
        setTimeout(waitForBubbleButton, 500);
    }
}

// Function to start the pulsing animation
function startPulsing(bubble, introBox) {
    let pulseCount = 0;
    let maxPulses = 6;
    let growing = true;

    introBox.style.setProperty("opacity", "0", "important");

    function pulse() {
        if (pulseCount >= maxPulses) {
            bubble.style.setProperty("transform", "scale(1)", "important"); // Reset to original size
            introBox.style.setProperty("opacity", "1", "important");
            return;
        }

        bubble.style.setProperty("transform-origin", "bottom right", "important"); // Anchor at bottom-right
        bubble.style.setProperty("transform", growing ? "scale(1.3)" : "scale(1)", "important");

        growing = !growing;
        if (!growing) pulseCount++;

        setTimeout(pulse, 500);
    }

    pulse();
}

// Run functions when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    injectCSS(); // Inject CSS
    waitForBubbleButton(); // Start button detection
});
