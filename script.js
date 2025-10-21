const skillBars = document.querySelectorAll('#skills-container .skill-bar');
let currentSkillIndex = 0;
const animationTime = 8000;
const pauseTime = 8000;
const totalTimePerSkill = animationTime + pauseTime;

function showNextSkill() {

    skillBars[currentSkillIndex].classList.add('active');

    currentSkillIndex++;

    if (currentSkillIndex >= skillBars.length) {
        currentSkillIndex = 0;
    }

    setTimeout(() => {
        skillBars.forEach(bar => bar.classList.remove('active'));
    }, animationTime);
}

showNextSkill();
setInterval(showNextSkill, totalTimePerSkill);