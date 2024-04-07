//HEADER NAVBAR

const hamburgerIcon = document.querySelector("nav button");
const nav = document.querySelector("nav ul");
const overlay = document.querySelector("#overlay");
hamburgerIcon.addEventListener("click", () => {
  if (nav.style.display === "block") {
    nav.style.display = "none";
    overlay.classList.remove("overlay");
    hamburgerIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    nav.style.display = "block";
    overlay.classList.add("overlay");
    hamburgerIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
})

//SKILLS SECTION


const skillsNodeList = document.querySelectorAll("#skills_container img");
const skills = Array.from(skillsNodeList);
skills.forEach(skill => {
  skill.addEventListener("click", skillClicked)
})

function skillClicked(e) {
  e.target.style.backgroundColor = "white";

  const filter = skills.filter(element => element !== e.target);
  filter.forEach(skill => skill.style.backgroundColor = "var(--LIGHTBLUE)");
}


/* const skillsNodeList = document.querySelectorAll("#skills_container figure");
const skills = Array.from(skillsNodeList);
console.log(skills)

const query = window.matchMedia("(max-width: 640px)");
if (query.matches) {
  const filterSkills = skills.filter((element, index) => index !== 2);
  filterSkills.map(skill => skill.style.display = "none")
} */