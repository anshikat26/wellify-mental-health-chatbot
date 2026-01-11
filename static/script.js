const chatBox = document.getElementById("chat-box");
const input = document.getElementById("userInput");

/* ===== LOAD SAVED DATA ===== */
window.onload = function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }

    const savedChat = sessionStorage.getItem("chat");
    if (savedChat && chatBox) {
        chatBox.innerHTML = savedChat;
        chatBox.scrollTop = chatBox.scrollHeight;
    }
};

/* ===== SAVE CHAT ===== */
function saveChat() {
    sessionStorage.setItem("chat", chatBox.innerHTML);
}

/* ===== SEND MESSAGE ===== */
function sendMessage() {
    let message = input.value.trim();
    if (message === "") return;

    // User message
    let userDiv = document.createElement("div");
    userDiv.className = "user-msg";
    userDiv.innerText = message;
    chatBox.appendChild(userDiv);
    saveChat();
    chatBox.scrollTop = chatBox.scrollHeight;

    // Bot reply
    let botDiv = document.createElement("div");
    botDiv.className = "bot-msg";

    let msg = message.toLowerCase();
    if (msg.includes("sad")) {
        botDiv.innerText = "I’m really sorry you’re feeling sad. You’re not alone 💙";
    } else if (msg.includes("stress")) {
        botDiv.innerText = "Stress can feel heavy. Let’s take a slow breath 🌿";
    } else if (msg.includes("happy")) {
        botDiv.innerText = "That’s wonderful to hear 🌸";
    } else {
        botDiv.innerText = "Thank you for sharing. I’m listening 🤍";
    }

    setTimeout(() => {
        chatBox.appendChild(botDiv);
        saveChat();
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 400);

    input.value = "";
}

/* ===== ENTER KEY SUPPORT ===== */
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

/* ===== THEME TOGGLE ===== */
function toggleTheme() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}