function showMessageAndImage() {
    const message = document.getElementById("message");
    const photoFrame = document.getElementById("photoFrame");

    message.textContent = "Ты мое сердечко 💖";
    
    // Показываем фото
    photoFrame.style.display = "block";

    setTimeout(() => {
        message.textContent = "Нажми на меня 💖";
    }, 3000);
}
