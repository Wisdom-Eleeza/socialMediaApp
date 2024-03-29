//================ SIDEBAR =====================
const menuItems = document.querySelectorAll(".menu-item");

//MESSAGES
const messagesNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message"); //this is a class of messages selected
const messageSearch = document.querySelector("#message-search");

//THEME CUSTOMIZATION
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
var root = document.querySelector(":root");

//FONT SIZE CUSTOMIZATION
const fontSize = document.querySelectorAll(".choose-size span");

//COLOR PALLETE
const colorPalette = document.querySelectorAll(".choose-color span");

//BACKGROUND COLOR
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

/**
 so at the moment it is only the HOME that is active,
 so we want the others to be active when they are clicked
 */

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItems(); //calling the remove function whenever one is clicked
    item.classList.add("active");

    //showing notification-popup if user click on the notification button
    if (item.id != "notifications") {
      document.querySelector(".notification-popup").style.display = "none";
    } else {
      document.querySelector(".notification-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

//remove active class from all menu-items when one is clicked
const changeActiveItems = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

//================ END OF SIDEBAR =====================

//================ MESSAGES SEARCH ==========================
//searches chats
const searchMessage = () => {
  const val = document.getElementById("message-search").value.toLowerCase(); // Get the value from the search input field
  const messages = document.querySelectorAll(".message"); // Get all the message elements
  
  messages.forEach((message) => {
    const name = message.querySelector("h5").textContent.toLowerCase(); // Get the name of the message sender
    
    if (name.includes(val)) {
      message.style.display = "flex"; // Show the message if the name matches the search value
    } else {
      message.style.display = "none"; // Hide the message if the name does not match the search value
    }
  });
};

//search chat: adding an event (keyup is an eventlistener just like click event)
messageSearch.addEventListener("keyup", searchMessage);

// //highlight messages card when messages menu item button is clicked
messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector(".notification-count").style.display =
    "none"; // the notification to disappear after clicking
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

//================ THEME/DISPLAY CUSTOMIZATION (MODAL) ==========================
//opens theme modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};
//open function
theme.addEventListener("click", openThemeModal);

//closing modal when we click outside the modal
const closeThemeModal = (event) => {
  if (event.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  } else {
  }
};
//close modal
themeModal.addEventListener("click", closeThemeModal);

//================ FONTS ==========================

//remove active class from spans or font size selectors
const removeSizeSelector = () => {
  fontSize.forEach((size) => {
    size.classList.remove("active");
  });
};
/* we used "rem" for all our font sizes,
that is why we're able to change all our font sizes at once
just by changing that of our html element */
fontSize.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;

    size.classList.toggle("active"); //toggling on the font size changing
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("--sticky-top-left", "-12rem");
      root.style.setProperty("--sticky-top-right", "-35rem");
    }
    //change font size of the root html element
    document.querySelector("html").style.fontSize = fontSize;
  });
});

//Remove active class from colors
const changeActiveColorClass = () => {
  colorPalette.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};
//CHANGE PRIMARY COLORS
colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primaryHue;
    //Remove active class from colors
    changeActiveColorClass();
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }

    color.classList.add("active");

    root.style.setProperty("--color-primary-hue", primaryHue);
  });
});

//=========theme BACKGROUND Values============

//changes background color function

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

//change background colors
Bg1.addEventListener("click", () => {
  //add active class
  Bg1.classList.add("active");
  //remove active class from the others
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");
  //remove customized changes from local storage
  window.location.reload();
});

Bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  //add active class
  Bg2.classList.add("active");
  //remove active class from the others
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  changeBG();
});

Bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  //add active class
  Bg3.classList.add("active");
  //remove active class from the others
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");
  changeBG();
});
