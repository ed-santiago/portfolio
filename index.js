//HEADER NAVBAR
const hamburgerIcon = document.querySelector("nav button");
const nav = document.querySelector("nav ul");
const overlay = document.querySelector("#overlay");
const mediaQuery = window.matchMedia("(max-width: 640px)");
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
  if (mediaQuery.matches) {
    li.addEventListener("click", () => {
      nav.style.display = "none";
      overlay.classList.remove("overlay");
      hamburgerIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    })
  }
})

//SKILLS SECTION
/* const descriptionNodeList = document.querySelectorAll("#skills_container dl");
descriptionNodeList[2].style.display = "block";
const descriptions = Array.from(descriptionNodeList);

const skillsNodeList = document.querySelectorAll("#skills img");
const skills = Array.from(skillsNodeList);
skills.forEach((skill, index) => {
  skill.addEventListener("click", () => {
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
  skill.addEventListener("mousedown", () => {
    skill.style.backgroundColor = "var(--WHITE)";
    skill.style.boxShadow = "0 1px 2px var(--NAVYBLUE), 0 2px 5px black";
  })
}) */

//CONTACT FORM SUBMISSION
const contactForm = document.querySelector("#contact_container form");
contactForm.addEventListener("submit", (e) => submitForm(e));
const successMessage = document.querySelector("#alert");
const loader = `<div id="loader"></div>`;
const alertDiv = document.querySelector("#alert");

function submitForm(e) {
  e.preventDefault();
  successMessage.style.display = "block";
  alertMessage("Sending message...", loader);
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
    .then((data) => {
      if (data.success === "false") {
        errorAlert();
        setTimeout(() => successMessage.style.display = "none", 8000);
        contactForm.reset();
      } else {
        alertMessage("Success!", "Thank you for reaching out! I'll get back to you ASAP.")
        setTimeout(() => successMessage.style.display = "none", 8000);
        contactForm.reset();
      }
    })
    .catch(() => {
      errorAlert();
      setTimeout(() => successMessage.style.display = "none", 8000);
      contactForm.reset();
    });
}

const closeSuccessMessage = document.querySelector("#close_button");
closeSuccessMessage.addEventListener("click", () => successMessage.style.display = "none");

const titleInfo = document.querySelector("#title_info");
const messageEl = document.querySelector("#alert_message");

function alertMessage(info, message) {
  titleInfo.textContent = info;
  messageEl.innerHTML = message;

  if (mediaQuery.matches) {
    alertDiv.style.backgroundColor = "var(--LIGHTBLUE)";
    alertDiv.style.color = "var(--NAVYBLUE)";
  }
}

function errorAlert() {
  titleInfo.textContent = "Error!";
  messageEl.innerHTML = "Unable to send your message, please try again. Or, just send me an email.";

  alertDiv.style.backgroundColor = "#DC0000";
  alertDiv.style.color = "var(--WHITE)";
}