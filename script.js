const nameInput = document.getElementById("nameInput");
const titleInput = document.getElementById("titleInput");
const bioInput = document.getElementById("bioInput");
const skillsInput = document.getElementById("skillsInput");

const cardName = document.getElementById("cardName");
const cardTitle = document.getElementById("cardTitle");
const cardBio = document.getElementById("cardBio");
const cardSkills = document.getElementById("cardSkills");

const locationInput = document.getElementById("locationInput");
const emailInput = document.getElementById("emailInput");
const experienceInput = document.getElementById("experienceInput");

const cardLocation = document.getElementById("cardLocation");
const cardEmail = document.getElementById("cardEmail");
const cardExperience = document.getElementById("cardExperience");

const githubInput = document.getElementById("githubInput");
const linkedinInput = document.getElementById("linkedinInput");

const cardGithub = document.getElementById("cardGithub");
const cardLinkedin = document.getElementById("cardLinkedin");

function updateCard() {
    cardName.textContent = nameInput.value || "Your Name";
    cardTitle.textContent = titleInput.value || "Your Title";
    cardBio.textContent = bioInput.value || "Your bio will appear here...";
    cardLocation.textContent = locationInput.value ? "📍 " + locationInput.value : "";
    cardEmail.textContent = emailInput.value ? "📧 " + emailInput.value : "";
    cardExperience.textContent = experienceInput.value ? "💼 " + experienceInput.value : "";
    cardGithub.textContent = githubInput.value ? "🐙 GitHub: " + githubInput.value : "";
    cardLinkedin.textContent = linkedinInput.value ? "💼 LinkedIn: " + linkedinInput.value : "";

    // Skills
    cardSkills.innerHTML = "";
    let skills = skillsInput.value.split(",");

    skills.forEach(skill => {
        if (skill.trim() !== "") {
            let span = document.createElement("span");
            span.textContent = skill.trim();
            cardSkills.appendChild(span);
        }
    });
}

// Event listeners
nameInput.addEventListener("input", updateCard);
titleInput.addEventListener("input", updateCard);
bioInput.addEventListener("input", updateCard);
skillsInput.addEventListener("input", updateCard);
emailInput.addEventListener("input", updateCard);
locationInput.addEventListener("input", updateCard);
experienceInput.addEventListener("input", updateCard);
githubInput.addEventListener("input", updateCard);
linkedinInput.addEventListener("input", updateCard);

const themeSelect = document.getElementById("themeSelect");

themeSelect.addEventListener("change", changeTheme);

function changeTheme() {
    let theme = themeSelect.value;

    if (theme === "dark") {
        document.documentElement.style.setProperty("--bg-color", "#0b1f3b");
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--card-color", "#0b1f3b");
        document.documentElement.style.setProperty("--accent-color", "#4da3ff");
    }

    else if (theme === "light") {
        document.documentElement.style.setProperty("--bg-color", "#ffffff");
        document.documentElement.style.setProperty("--text-color", "#111111");
        document.documentElement.style.setProperty("--card-color", "#f9f9f9");
        document.documentElement.style.setProperty("--accent-color", "#7c3aed");
    }

    else if (theme === "pastel") {
        document.documentElement.style.setProperty("--bg-color", "#fff1f5");
        document.documentElement.style.setProperty("--text-color", "#3b0764");
        document.documentElement.style.setProperty("--card-color", "#ffffff");
        document.documentElement.style.setProperty("--accent-color", "#ec4899");
    }
    else if (theme === "sunset") {
    document.documentElement.style.setProperty("--bg-color", "#ff7e5f");
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--card-color", "#feb47b");
    document.documentElement.style.setProperty("--accent-color", "#ff3e3e");
    }

    else if (theme === "forest") {
    document.documentElement.style.setProperty("--bg-color", "#1b4332");
    document.documentElement.style.setProperty("--text-color", "#d8f3dc");
    document.documentElement.style.setProperty("--card-color", "#2d6a4f");
    document.documentElement.style.setProperty("--accent-color", "#74c69d");
    }

    else if (theme === "midnight") {
    document.documentElement.style.setProperty("--bg-color", "#0f172a");
    document.documentElement.style.setProperty("--text-color", "#e2e8f0");
    document.documentElement.style.setProperty("--card-color", "#1e293b");
    document.documentElement.style.setProperty("--accent-color", "#38bdf8");
    }
}

const bgPicker = document.getElementById("bgColorPicker");
const accentPicker = document.getElementById("accentColorPicker");

bgPicker.addEventListener("input", () => {
    document.documentElement.style.setProperty("--bg-color", bgPicker.value);
});

accentPicker.addEventListener("input", () => {
    document.documentElement.style.setProperty("--accent-color", accentPicker.value);
});

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", () => {

    // clear inputs
    nameInput.value = "";
    titleInput.value = "";
    locationInput.value = "";
    emailInput.value = "";
    bioInput.value = "";
    skillsInput.value = "";
    githubInput.value = "";
    linkedinInput.value = "";
    experienceInput.value = "";

    // reset theme select
    themeSelect.value = "dark";

    // reset color pickers
    bgPicker.value = "#0b1f3b";
    accentPicker.value = "#4da3ff";

    // reset card content
    updateCard();
    changeTheme();
});

function saveData() {
    const data = {
        name: nameInput.value,
        title: titleInput.value,
        bio: bioInput.value,
        skills: skillsInput.value,
        location: locationInput.value,
        email: emailInput.value,
        experience: experienceInput.value,
        theme: themeSelect.value,
        bgColor: bgPicker.value,
        accentColor: accentPicker.value
    };

    localStorage.setItem("portfolioCardData", JSON.stringify(data));
}

function loadData() {
    const saved = JSON.parse(localStorage.getItem("portfolioCardData"));

    if (!saved) return;

    nameInput.value = saved.name || "";
    titleInput.value = saved.title || "";
    bioInput.value = saved.bio || "";
    skillsInput.value = saved.skills || "";
    locationInput.value = saved.location || "";
    emailInput.value = saved.email || "";
    experienceInput.value = saved.experience || "";

    themeSelect.value = saved.theme || "dark";
    bgPicker.value = saved.bgColor || "#0b1f3b";
    accentPicker.value = saved.accentColor || "#4da3ff";

    changeTheme();
    updateCard();
}

document.querySelectorAll("input, textarea, select").forEach(el => {
    el.addEventListener("input", () => {
        updateCard();
        saveData();
    });

    el.addEventListener("change", () => {
        updateCard();
        saveData();
    });
});

const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", () => {
    const card = document.getElementById("card");

    html2canvas(card).then(canvas => {
        const link = document.createElement("a");
        link.download = "portfolio-card.png";
        link.href = canvas.toDataURL();
        link.click();
    });
});

if (!nameInput.value) {
    alert("Please enter your name before downloading");
    return;
}

loadData();
updateCard();
