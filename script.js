const birthDate = new Date('2004-11-16');
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
const monthDifference = today.getMonth() - birthDate.getMonth();
if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())){
    age--;
}
document.getElementById('age').textContent = age;

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