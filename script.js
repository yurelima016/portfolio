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

const languageBtn = document.getElementById('language-btn');
const languageBtnText = document.getElementById('language-btn-text');
const translatableElements = document.querySelectorAll('[data-translate]');

const translations = {
    'en': {
        // Navigation
        'nav_home': 'Home',
        'nav_about': 'About Me',
        'nav_skills': 'Skills',
        'nav_contact': 'Contacts',
        // About me
        'about_title': 'About me',
        'about_p1': 'Hi! I’m <span class="about__highlight">Yure Lima</span>, a ',
        'about_p2': '-year-old <span class="about__highlight">front-end</span> developer focused on creating efficient, responsive, and visually consistent interfaces. I hold degrees in <span class="about__highlight">Information Technology Management</span> and <span class="about__highlight">Systems Development</span>, which provide me with a strong foundation in both programming logic and strategic technology vision. I’m constantly improving my skills and keeping up with industry trends to deliver high-performance and high-quality solutions.',
        // Skills
        'skills_hard_title': 'Hard Skills',
        'skills_soft_title': 'Soft Skills',
        'skills_soft_1': 'Communication',
        'skills_soft_2': 'Time Management',
        'skills_soft_3': 'Teamwork',
        'skills_soft_4': 'Adaptability',
        'skills_soft_5': 'Continuous Learning',
        'skills_soft_6': 'Problem-Solving',
        // Contact
        'contact_title': 'Contact me',
        'contact_name_placeholder': 'Name',
        'contact_email_placeholder': 'Email',
        'contact_message_placeholder': 'Message',
        'contact_send_btn': 'Send',
    },
    'pt': {
        // Navigation
        'nav_home': 'Início',
        'nav_about': 'Sobre Mim',
        'nav_skills': 'Habilidades',
        'nav_contact': 'Contatos',
        // About me
        'about_title': 'Sobre mim',
        'about_p1': 'Olá! Eu sou <span class="about__highlight">Yure Lima</span>, um desenvolvedor <span class="about__highlight">front-end</span> de ',
        'about_p2': ' anos focado em criar interfaces eficientes, responsivas e visualmente consistentes. Sou formado em <span class="about__highlight">Gestão da Tecnologia da Informação</span> e <span class="about__highlight">Desenvolvimento de Sistemas</span>, o que me proporciona uma base sólida tanto em lógica de programação quanto em visão estratégica de tecnologia. Estou constantemente aprimorando minhas habilidades e me atualizando com as tendências do setor para entregar soluções de alta performance e qualidade.',
        // Skills
        'skills_hard_title': 'Hard Skills',
        'skills_soft_title': 'Soft Skills',
        'skills_soft_1': 'Comunicação',
        'skills_soft_2': 'Gestão de Tempo',
        'skills_soft_3': 'Trabalho em Equipe',
        'skills_soft_4': 'Adaptabilidade',
        'skills_soft_5': 'Aprendizado Contínuo',
        'skills_soft_6': 'Resolução de Problemas',
        // Contact
        'contact_title': 'Contato',
        'contact_name_placeholder': 'Nome',
        'contact_email_placeholder': 'Email',
        'contact_message_placeholder': 'Mensagem',
        'contact_send_btn': 'Enviar',
    }
};

function setLanguage(lang) {
    localStorage.setItem('lang', lang);

    if (lang === 'pt') {
        languageBtnText.textContent = 'EN';
    } else {
        languageBtnText.textContent = 'PT';
    }

    translatableElements.forEach(el => {
        const key = el.dataset.translate;
        const translation = translations[lang][key];

        if (translation) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation;
            } else {
                el.innerHTML = translation;
            }
        }
    });
}

function toggleLanguage() {
    const currentLang = localStorage.getItem('lang') || 'pt';
    if (currentLang === 'pt') {
        setLanguage('en');
    } else {
        setLanguage('pt');
    }
}

function initializeLanguage() {
    const savedLang = localStorage.getItem('lang');
    const browserLang = navigator.language.split('-')[0];

    if (savedLang) {
        setLanguage(savedLang);
    } else if (browserLang === 'pt') {
        setLanguage('pt');
    } else {
        setLanguage('en'); // Default 
    }
}

languageBtn.addEventListener('click', toggleLanguage);
initializeLanguage();

const contactForm = document.getElementById('contact-form');
const submitButton = document.getElementById('contact-submit-btn');

const FORM_ENDPOINT = 'https://formspree.io/f/mkgpblzk';

contactForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    const currentLang = localStorage.getItem('lang') || 'en'; // Padrão 'en'
    submitButton.disabled = true;

    if (currentLang === 'en'){
        submitButton.textContent = "Sending...";
    }
    else{
        submitButton.textContent = "Enviando...";
    }
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    try{
        const response = await fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok){
            contactForm.reset();
            if (currentLang === 'en'){
                submitButton.textContent = "Sent!";
            }
            else{
                submitButton.textContent = "Enviado!";
            }
        }
        else{

            if (currentLang === 'en'){
                throw new Error('Server error');
            }
            else{
                throw new Error('Erro no servidor');
            }
        }
    }
    catch (error){
        if (currentLang === 'en'){
                submitButton.textContent = 'Error';
            }
        else{
            submitButton.textContent = 'Erro';
        }
    }
    finally{
        setTimeout(() => {
            submitButton.disabled = false;
            if (currentLang === 'en'){
                submitButton.textContent = 'Send';
            }
            else{
                submitButton.textContent = 'Enviar';
            }
        }, 3000);
    }
});