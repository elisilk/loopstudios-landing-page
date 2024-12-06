const primaryNavToggle = document.querySelector(
  '[aria-controls="primary-nav"]'
);

primaryNavToggle.addEventListener("click", () => {
  const navOpened = primaryNavToggle.getAttribute("aria-expanded");
  if (navOpened === "false") {
    primaryNavToggle.setAttribute("aria-expanded", "true");
  } else {
    primaryNavToggle.setAttribute("aria-expanded", "false");
  }
});
