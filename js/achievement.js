const categoryDropdown = document.getElementById("categoryDropdown");
const achievementDivs = document.querySelectorAll(".achievements > div");

categoryDropdown.addEventListener("change", (event) => {
  const selectedCategory = event.target.value;

  achievementDivs.forEach((achievementDiv) => {
    if (selectedCategory === "all" || achievementDiv.id === selectedCategory) {
      achievementDiv.style.display = "block";
    } else {
      achievementDiv.style.display = "none";
    }
  });
});
