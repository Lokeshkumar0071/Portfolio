'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default form submission

  const fullName = form.querySelector('input[name="fullname"]').value;
  const email = form.querySelector('input[name="email"]').value;
  const message = form.querySelector('textarea[name="message"]').value;

  const templateParams = {
    fullname: fullName,
    email: email,
    message: message
  };

  emailjs.send("service_p6u6qpr", "template_jb4lsnb", templateParams)
    .then(function(response) {
      alert("Message sent successfully!");
      form.reset();
      formBtn.setAttribute("disabled", "");
    }, function(error) {
      alert("Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    });
});

// Robot fade-out after 5 seconds
setTimeout(() => {
  const robotOverlay = document.getElementById('robot-overlay');
  robotOverlay.style.opacity = '0';

  // Remove after fade animation
  setTimeout(() => {
    robotOverlay.remove();
  }, 1000);
}, 5000);



const textArray = [
 "Hi, I'm Lokesh Kumar.",
  "RPA Developer from Jaipur, India.",
  "UiPath • Power Automate.",
  "Automating what others do manually.",
  "Smart Work > Hard Work.",
  "Let's automate the future!"
];

let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // speed per letter
const typingElement = document.getElementById("typing-text");

function typeText() {
  if (charIndex < textArray[textIndex].length) {
    typingElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(() => {
      typingElement.textContent = "";
      charIndex = 0;
      textIndex = (textIndex + 1) % textArray.length;
      typeText();
    }, 2000); // Pause before changing line
  }
}

// Start the animation
document.addEventListener("DOMContentLoaded", typeText);


// ROBOTIC VOICE WELCOME
// document.addEventListener("DOMContentLoaded", function () {
//   const msg = new SpeechSynthesisUtterance();
//   msg.text = "Hey there, I am Lokesh's virtual assistant. Welcome to his portfolio!";
//   msg.pitch = 0.9;
//   msg.rate = 0.95;

//   // Speak only after voices are loaded
//   const speak = () => {
//     const voices = window.speechSynthesis.getVoices();
//     const preferredVoice = voices.find(v => v.name.includes("Google") || v.name.includes("Microsoft"));
//     if (preferredVoice) {
//       msg.voice = preferredVoice;
//     }
//     window.speechSynthesis.speak(msg);
//   };

//   if (window.speechSynthesis.getVoices().length === 0) {
//     window.speechSynthesis.addEventListener("voiceschanged", speak);
//   } else {
//     speak();
//   }
// });