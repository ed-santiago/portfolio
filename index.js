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

    const filterSkills = skills.filter(element => element !== skill);
    filterSkills.forEach(skill => skill.style.backgroundColor = "var(--LIGHTBLUE)");

    const findDescription = descriptions.find((element, index2) => index === index2);
    findDescription.style.display = "block";
    const filterDescription = descriptions.filter(element => element !== findDescription);
    filterDescription.map(element => element.style.display = "none");
  })
})

//CONTACT FORM SUBMISSION
const contactForm = document.querySelector("#form_container form");
contactForm.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  fetch("https://formsubmit.co/ajax/edmond.santiago7@gmail.com", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify()
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

/* {
  firstName: `${e.target["firstName"].value}`,
  lastName: `${e.target["lastName"].value}`,
  email: `${e.target["email"].value}`,
  phoneNumber: `${e.target["phone"].value}`,
} */