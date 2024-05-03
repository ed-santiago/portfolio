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

const navLi = document.querySelectorAll("nav ul li");
const liArray = Array.from(navLi);
liArray.forEach(li => {
  li.addEventListener("click", () => {
    nav.style.display = "none";
    overlay.classList.remove("overlay");
    hamburgerIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
})
})

//SKILLS SECTION
const descriptionNodeList = document.querySelectorAll("#skills_container dl");
descriptionNodeList[2].style.display = "block";
const descriptions = Array.from(descriptionNodeList);

const skillsNodeList = document.querySelectorAll("#skills img");
const skills = Array.from(skillsNodeList);
skills.forEach((skill, index) => {
  skill.addEventListener("click", () => {
    console.log(skill)
    skill.style.backgroundColor = "var(--WHITE)";
    skill.style.boxShadow = "0 1px 2px var(--NAVYBLUE), 0 2px 5px black";

    const filterSkills = skills.filter(element => element !== skill);
    filterSkills.forEach(skill => {
      skill.style.backgroundColor = "var(--LIGHTBLUE)";
      skill.style.boxShadow = "0 4px 0 var(--NAVYBLUE), 0 4px 8px black";
    });

    const findDescription = descriptions.find((element, index2) => index === index2);
    findDescription.style.display = "block";
    const filterDescription = descriptions.filter(element => element !== findDescription);
    filterDescription.map(element => element.style.display = "none");
  })
})

//CONTACT FORM SUBMISSION
const contactForm = document.querySelector("#form_container form");
contactForm.addEventListener("submit", submitForm);
const successMessage = document.querySelector("#alert");

function submitForm(e) {
  e.preventDefault();
  fetch("https://formsubmit.co/ajax/edmond.santiago7@gmail.com", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: `${e.target["name"].value}`,
      email: `${e.target["email"].value}`,
      phoneNumber: `${e.target["phone"].value}`,
    })
  })
    .then(response => response.json())
    .then(() => {
      successMessage.style.display = "block";
      contactForm.reset();
    })
    .catch(error => console.log(error));
}

const closeSuccessMessage = document.querySelector("#close_button");
closeSuccessMessage.addEventListener("click", () => successMessage.style.display = "none");