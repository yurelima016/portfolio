const birthDate = new Date('2004-11-16');
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
const monthDifference = today.getMonth() - birthDate.getMonth();
if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())){
    age--;
}
document.getElementById('age-display').textContent = age;

const skillTitleEl = document.querySelector('[data-skill-title]');
const skillLogoContainerEl = document.querySelector('[data-skill-logo-container]');
const skillBarEls = document.querySelectorAll('.skills__bar');
const starEls = document.querySelectorAll('.skills__display-stars .star'); 

let animationTimerId = null;

const skillLogos = {
    'html': '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML-LOGO" />',
    'css': '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS-logo" />',
    'javascript': '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JAVASCRIPT-LOGO" />',
    'php': '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP-LOGO" />',
    'python': '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="PYTHON-LOGO" />',
    'git': '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="GIT-LOGO" />',
    'bootstrap': '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="BOOTSTRAP-LOGO" />',
    'figma': '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="FIGMA-LOGO" />',
    'github': '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GIT-HUBLOGO" />'
};

const skillRatings = {
    'html': 5,
    'css': 5,
    'javascript': 4,
    'php': 4,
    'python': 4,
    'git': 3,
    'bootstrap': 4,
    'figma': 3,
    'github': 4
};

let currentSkillIndex = 0;
const animationTime = 7000; 
const pauseTime = 7000;      

/**
 * @param {number} rating - O número de estrelas (0-5) a preencher
 */
function updateStars(rating) {
    starEls.forEach((star, index) => { 
        if (index < rating) {
            star.classList.add('filled');
        } else {
            star.classList.remove('filled');
        }
    });
}


function resetSkills() {
    skillBarEls.forEach(bar => {
        bar.classList.remove('active');
    });
    currentSkillIndex = 0;
    
    animationTimerId = setTimeout(showNextSkill, 1000); 
}


function showNextSkill() {
    if (currentSkillIndex < skillBarEls.length) {

        const activeSkillBar = skillBarEls[currentSkillIndex];
        
        const skillKey = activeSkillBar.dataset.skill; 
        const skillDisplayName = activeSkillBar.textContent.trim();

        skillTitleEl.textContent = skillDisplayName;
        skillLogoContainerEl.innerHTML = skillLogos[skillKey] || '';
        const rating = skillRatings[skillKey] || 0;
        updateStars(rating);

        activeSkillBar.classList.add('active');
        currentSkillIndex++;
        
        animationTimerId = setTimeout(showNextSkill, animationTime);

    } else {
        animationTimerId = setTimeout(resetSkills, pauseTime);
    }
}

/**
 * @param {number} clickedIndex - O índice da skill que foi clicada
 */
function jumpToSkill(clickedIndex) {
    clearTimeout(animationTimerId);

    skillBarEls.forEach(bar => {
        bar.classList.remove('active');
    });

    currentSkillIndex = clickedIndex;
    showNextSkill();
}


skillBarEls.forEach((bar, index) => {
    bar.addEventListener('click', () => {
        jumpToSkill(index);
    });
});

showNextSkill();

// Dark or Light Mode 

const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Icons SVGs
const sunIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg>
`;

const moonIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
</svg>
`;

/**
 * @param {string} theme - 'light' ou 'dark'
 */
function setTheme(theme) {
    body.setAttribute('data-theme', theme);
    if (theme === 'light') {
        themeBtn.innerHTML = moonIcon;
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeBtn.innerHTML = sunIcon;
        localStorage.setItem('theme', 'dark');
    }
}

themeBtn.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'light') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
});

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (savedTheme === 'light') {
        setTheme('light');
    } else if (savedTheme === 'dark') {
        setTheme('dark');
    } else if (prefersLight) {
        setTheme('light');
    } else {
        setTheme('dark'); // Default
    }
}

initializeTheme();