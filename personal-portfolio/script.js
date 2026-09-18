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

    let response = getBotResponse(userMessage);

    // Display chatbot response
    messages.innerHTML += `
        <p><strong>Bot:</strong> ${response}</p>
    `;

    input.value = "";

    messages.scrollTop = messages.scrollHeight;
}


function getBotResponse(message) {

    message = message.toLowerCase();

    if (
        message.includes("hello") ||
        message.includes("hi") ||
        message.includes("hey")
    ) {
        return "Hello! Thanks for visiting my portfolio. How can I help you?";
    }

    if (message.includes("skill")) {
        return "My skills include HTML, CSS, JavaScript, Python, Git, and GitHub.";
    }

    if (message.includes("project")) {
        return "You can view my projects in the Projects section of my portfolio.";
    }

    if (message.includes("education")) {
        return "I am currently studying [YOUR DEGREE] at [YOUR SCHOOL].";
    }

    if (message.includes("experience")) {
        return "I have experience with [YOUR EXPERIENCE].";
    }

    if (message.includes("github")) {
        return "You can find my projects on my GitHub profile.";
    }

    if (message.includes("resume")) {
        return "You can view or download my resume in the Resume section.";
    }

    if (message.includes("contact")) {
        return "You can contact me using the contact form on this website.";
    }

    return "I'm not sure about that yet. Try asking me about my skills, projects, education, experience, GitHub, or resume.";
}
new QRCode(document.getElementById("qrcode"), {
    text: "YOUR-PORTFOLIO-URL",
    width: 180,
    height: 180
});