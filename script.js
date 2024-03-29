let darkMode = false;

function changeDarkMode() {
  if (darkMode) {
    darkMode = false;
    document.documentElement.style.setProperty("--text-color", "black");
    document.documentElement.style.setProperty("--background-color", "#f2f2f2");
    document.getElementById("dark-light-mode").innerHTML = "Mode sombre";
  } else {
    darkMode = true;
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--background-color", "black");
    document.getElementById("dark-light-mode").innerHTML = "Mode clair";
  }
}
