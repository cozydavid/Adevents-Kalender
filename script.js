// ==============================
// ADVENTSTÜRCHEN ERSTELLEN
// ==============================

const calendar = document.querySelector("#calendar");

const surprises = [
    "🎄", "🕯️", "☕", "❄️",
    "🎁", "⭐", "🍪", "🧣",
    "📖", "🍵", "🦌", "✨",
    "🎶", "🧸", "🍫", "🌟",
    "💌", "🏠", "🧤", "🌲",
    "🎀", "☃️", "🔔", "❤️"
];

for (let day = 1; day <= 24; day++) {
    const door = document.createElement("button");

    door.className = "door";
    door.type = "button";
    door.setAttribute("aria-label", `Türchen ${day} öffnen`);

    door.innerHTML = `
        <span class="door-number">${day}</span>
        <span class="door-icon">${surprises[day - 1]}</span>
    `;

    door.addEventListener("click", () => {
        if (door.classList.contains("opened")) {
            return;
        }

        door.classList.add("opened");

        door.innerHTML = `
            <span class="door-icon">${surprises[day - 1]}</span>
            <span>Türchen ${day}</span>
            <span>♡</span>
        `;

        alert(
            `🎄 Türchen ${day}\n\n` +
            "Eine kleine Portion Weihnachtszauber für dich! ✨\n\n" +
            "Unsere Überraschungen können wir später ganz individuell gestalten."
        );
    });

    calendar.appendChild(door);
}


// ==============================
// SCHNEEFLOCKEN ERSTELLEN
// ==============================

const snowContainer = document.querySelector(".snow");
const snowSymbols = ["❄", "✧", "·"];

for (let i = 0; i < 30; i++) {
    const snowflake = document.createElement("span");

    snowflake.className = "snowflake";
    snowflake.textContent =
        snowSymbols[Math.floor(Math.random() * snowSymbols.length)];

    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.animationDuration = `${8 + Math.random() * 12}s`;
    snowflake.style.animationDelay = `${Math.random() * -20}s`;
    snowflake.style.fontSize = `${8 + Math.random() * 12}px`;

    snowContainer.appendChild(snowflake);
}

// ==============================
// SCHNEE SAMMELT SICH AUF TÜRCHEN 1
// ==============================

const firstDoor = document.querySelector(".door");

if (firstDoor) {
    const snowPile = document.createElement("div");
    snowPile.className = "snow-pile";
    firstDoor.appendChild(snowPile);

    let snowHeight = 0;

    function snowOnFirstDoor() {
        // Neue Schneeflocke erzeugen
        const flake = document.createElement("span");
        flake.className = "falling-snow";
        flake.textContent = ["❄", "❅", "❆"][
            Math.floor(Math.random() * 3)
        ];

        flake.style.left = `${10 + Math.random() * 80}%`;
        flake.style.fontSize = `${8 + Math.random() * 8}px`;

        firstDoor.appendChild(flake);

        // Schneeflocke nach der Animation entfernen
        flake.addEventListener("animationend", () => {
            flake.remove();
        });

        // Schnee sammelt sich langsam an
        snowHeight = Math.min(snowHeight + 0.8, 35);
        snowPile.style.setProperty("--snow-height", `${snowHeight}%`);
    }

    // Alle 2,5 Sekunden fällt neuer Schnee
    setInterval(snowOnFirstDoor, 2500);
}