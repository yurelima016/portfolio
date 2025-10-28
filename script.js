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