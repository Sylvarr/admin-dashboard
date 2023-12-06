const dashboardButton = document.querySelector(".introduction");
const adminButtons = document.querySelectorAll(".admin_buttons");

function toggleAdminButtons() {
  adminButtons.forEach((button) => {
    button.classList.toggle("active");
    button.classList.toggle("blur-in-expand");
  });
}

const mediaQuery = window.matchMedia("(max-width: 899px)");

function updateButtonEventListener(mediaQuery) {
  if (mediaQuery.matches) {
    dashboardButton.addEventListener("click", toggleAdminButtons);
  } else {
    dashboardButton.removeEventListener("click", toggleAdminButtons);
  }
}

updateButtonEventListener(mediaQuery);

mediaQuery.addEventListener("change", () =>
  updateButtonEventListener(mediaQuery)
);
