let themeDots = document.querySelectorAll(".theme-dot");
let stylesheet = document.getElementById("theme-style");

let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

themeDots.forEach((element) => {
  element.addEventListener("click", () => {
    let mode = element.dataset.mode;

    setTheme(mode);
  });
});

function setTheme(mode) {
  switch (mode) {
    case "light":
      stylesheet.href = "default.css";
      console.log(mode);
      break;
    case "blue":
      stylesheet.href = "blue.css";
      break;
    case "purple":
      stylesheet.href = "purple.css";
      break;
    case "green":
      stylesheet.href = "green.css";
      break;
  }

  localStorage.setItem("theme", mode);
}
