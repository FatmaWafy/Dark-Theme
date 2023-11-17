let Icon = document.getElementById("icon");

if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "light");
}

let localdata = localStorage.getItem("theme");

if (localdata == "light") {
  Icon.src = "./images/moon.png";
  document.body.classList.remove("dark-theme");
} else if (localdata == "dark") {
  Icon.src = "./images/sun.png";
  document.body.classList.add("dark-theme");
}

Icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    Icon.src = "./images/sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    Icon.src = "./images/moon.png";
    localStorage.setItem("theme", "light");
  }
};
