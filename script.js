function updateClock() {
    const now = new Date();

    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate rotation angles
    const hourRotation = 30 * hours + 0.5 * minutes; // 360° / 12 = 30° per hour
    const minuteRotation = 6 * minutes + 0.1 * seconds; // 360° / 60 = 6° per minute
    const secondRotation = 6 * seconds; // 360° / 60 = 6° per second

    // Apply rotation
    document.getElementById("hour").style.transform = `rotate(${hourRotation}deg)`;
    document.getElementById("minute").style.transform = `rotate(${minuteRotation}deg)`;
    document.getElementById("second").style.transform = `rotate(${secondRotation}deg)`;
}

// Update every second
setInterval(updateClock, 1000);

// Initialize clock
updateClock();
