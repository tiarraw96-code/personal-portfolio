/* =========================
   CHATBOT
========================= */

function addChatMessage(messages, author, message) {
    const paragraph = document.createElement("p");
    const strong = document.createElement("strong");

    strong.textContent = `${author}:`;
    paragraph.appendChild(strong);
    paragraph.appendChild(document.createTextNode(` ${message}`));

    messages.appendChild(paragraph);
    messages.scrollTop = messages.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById("chat-input");
    const messages = document.getElementById("chat-messages");

    if (!input || !messages) {
        return;
    }

    const userMessage = input.value.trim();

    if (!userMessage) {
        return;
    }

    addChatMessage(messages, "You", userMessage);

    const response = getBotResponse(userMessage);
    addChatMessage(messages, "Bot", response);

    input.value = "";
    input.focus();
}


/* =========================
   CHATBOT RESPONSES
========================= */

function containsWord(message, words) {
    return words.some((word) => {
        const pattern = new RegExp(`\\b${word}\\b`, "i");
        return pattern.test(message);
    });
}

function getBotResponse(message) {
    const normalizedMessage = String(message).trim().toLowerCase();

    if (containsWord(normalizedMessage, ["hello", "hi", "hey"])) {
        return "Hello! 👋 Thanks for visiting my portfolio. How can I help you?";
    }

    if (
        containsWord(normalizedMessage, ["skill", "skills", "technology", "technologies"])
    ) {
        return "My skills include HTML, CSS, JavaScript, Python, Java, Git, GitHub, PowerShell, Microsoft Entra ID, and Microsoft Graph API.";
    }

    if (containsWord(normalizedMessage, ["project", "projects"])) {
        return "I have worked on security analysis, security evaluation, and Microsoft Entra ID projects. You can view them in the Projects section.";
    }

    if (
        containsWord(normalizedMessage, ["education", "school", "college", "degree"])
    ) {
        return "I am studying Computer Technology at Bowie State University, with a focus on Internet Technologies and Web Services. My expected graduation is Fall 2026.";
    }

    if (
        containsWord(normalizedMessage, ["experience", "work"])
    ) {
        return "My experience includes security implementation, identity and access management, security reporting, documentation, Microsoft Entra ID, Microsoft Graph API, and PowerShell.";
    }

    if (
        containsWord(normalizedMessage, ["github", "code"])
    ) {
        return "You can find my project documentation and source code through the GitHub links in the Projects section.";
    }

    if (
        containsWord(normalizedMessage, ["resume", "cv"])
    ) {
        return "You can view or download my resume in the Resume section.";
    }

    if (
        containsWord(normalizedMessage, ["contact", "email", "reach"])
    ) {
        return "You can contact me using the contact form in the Contact section.";
    }

    if (containsWord(normalizedMessage, ["golf"])) {
        return "Golf is one of my interests outside of technology! ⛳";
    }

    return "I'm not sure about that yet. Try asking me about my skills, projects, education, experience, GitHub, resume, or contact information.";
}


/* =========================
   PAGE FUNCTIONS
========================= */

document.addEventListener("DOMContentLoaded", function () {
    /* CHATBOT */
    const chatButton = document.getElementById("chat-send");
    const chatInput = document.getElementById("chat-input");
    const chatForm = document.getElementById("chat-form");

    if (chatForm) {
        chatForm.addEventListener("submit", function (event) {
            event.preventDefault();
            sendMessage();
        });
    }

    if (chatButton && !chatForm) {
        chatButton.addEventListener("click", sendMessage);
    }

    if (chatInput && !chatForm) {
        chatInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                sendMessage();
            }
        });
    }

    /* QR CODE */
    const qrContainer = document.getElementById("qrcode");

    if (qrContainer) {
        if (typeof QRCode === "undefined") {
            qrContainer.textContent = "QR code unavailable.";
        } else {
            qrContainer.replaceChildren();
            new QRCode(qrContainer, {
                text: "https://tiarraw96-code.github.io/personal-portfolio/",
                width: 180,
                height: 180
            });
        }
    }

    /* CONTACT FORM */
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (formStatus) {
                formStatus.textContent = "Thank you for your message! I received your message.";
                formStatus.style.display = "block";
            } else {
                alert("Thank you for your message! I received your message.");
            }

            contactForm.reset();
        });
    }
});
