// ===============================
// CHATBOT
// ===============================

function sendMessage() {

    const input = document.getElementById("chat-input");
    const messages = document.getElementById("chat-messages");

    const userMessage = input.value.trim();

    if (userMessage === "") {
        return;
    }

    // Display user's message
    messages.innerHTML += `
        <p><strong>You:</strong> ${userMessage}</p>
    `;

    // Get chatbot response
    const response = getBotResponse(userMessage);

    // Display chatbot response
    messages.innerHTML += `
        <p><strong>Bot:</strong> ${response}</p>
    `;

    // Clear input
    input.value = "";

    // Scroll to newest message
    messages.scrollTop = messages.scrollHeight;
}


// ===============================
// CHATBOT RESPONSES
// ===============================

function getBotResponse(message) {

    message = message.toLowerCase();

    if (
        message.includes("hello") ||
        message.includes("hi") ||
        message.includes("hey")
    ) {
        return "Hello! Thanks for visiting my portfolio. How can I help you?";
    }

    if (
        message.includes("skill") ||
        message.includes("skills") ||
        message.includes("technology") ||
        message.includes("technologies")
    ) {
        return "My skills include HTML, CSS, JavaScript, Python, Java, Git, and GitHub.";
    }

    if (
        message.includes("project") ||
        message.includes("projects")
    ) {
        return "I have worked on security analysis, security evaluation, and Microsoft Entra ID projects. You can view them in the Projects section.";
    }

    if (
        message.includes("education") ||
        message.includes("school") ||
        message.includes("college")
    ) {
        return "I am studying Computer Technology at Bowie State University, with a focus on Internet Technologies and Web Services. My expected graduation is Fall 2026.";
    }

    if (
        message.includes("experience") ||
        message.includes("work")
    ) {
        return "My experience includes security implementation, identity and access management, security reporting, documentation, Microsoft Entra ID, Microsoft Graph API, and PowerShell.";
    }

    if (
        message.includes("github") ||
        message.includes("code")
    ) {
        return "You can find my projects and source code through the GitHub links in the Projects section.";
    }

    if (
        message.includes("resume") ||
        message.includes("cv")
    ) {
        return "You can view or download my resume in the Resume section of my portfolio.";
    }

    if (
        message.includes("contact") ||
        message.includes("email") ||
        message.includes("reach")
    ) {
        return "You can contact me using the contact form in the Contact section.";
    }

    return "I'm not sure about that yet. Try asking me about my skills, projects, education, experience, GitHub, resume, or contact information.";
}


// ===============================
// CHATBOT SEND BUTTON
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const chatButton = document.getElementById("chat-send");
    const chatInput = document.getElementById("chat-input");

    if (chatButton) {
        chatButton.addEventListener("click", sendMessage);
    }

    if (chatInput) {
        chatInput.addEventListener("keypress", function (event) {

            if (event.key === "Enter") {
                sendMessage();
            }

        });
    }

});


// ===============================
// QR CODE
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const qrContainer = document.getElementById("qrcode");

    if (qrContainer && typeof QRCode !== "undefined") {

        new QRCode(qrContainer, {
            text: "https://tiarraw96-code.github.io/personal-portfolio/",
            width: 180,
            height: 180
        });

    }

});
