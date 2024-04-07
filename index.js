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
const descriptionNodeList = document.querySelectorAll("#skills dl");
descriptionNodeList[2].style.display = "block";
const descriptions = Array.from(descriptionNodeList);

const skillsNodeList = document.querySelectorAll("#skills_container img");
const skills = Array.from(skillsNodeList);
skills.forEach((skill, index) => {
  skill.addEventListener("click", () => {
    skill.style.backgroundColor = "var(--WHITE)";
    console.log(index);

    const filter = skills.filter(element => element !== skill);
    filter.forEach(skill => skill.style.backgroundColor = "var(--LIGHTBLUE)");

    const idk = descriptions.find((element, index2) => index === index2);
    idk.style.display = "block";
    const idk2  = descriptions.filter(element => element !== idk);
    idk2.map(element => element.style.display = "none");
  })
})

/* function skillClicked(e) {
  e.target.style.backgroundColor = "var(--WHITE)";
  console.log(e.target).index;

  const filter = skills.filter(element => element !== e.target);
  filter.forEach(skill => skill.style.backgroundColor = "var(--LIGHTBLUE)");
} */


/* const skillsNodeList = document.querySelectorAll("#skills_container figure");
const skills = Array.from(skillsNodeList);
console.log(skills)

const query = window.matchMedia("(max-width: 640px)");
if (query.matches) {
  const filterSkills = skills.filter((element, index) => index !== 2);
  filterSkills.map(skill => skill.style.display = "none")
} */