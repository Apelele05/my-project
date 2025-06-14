function adjustFormForScreenSize() {
  let inputs = document.querySelectorAll(".form-input");
  if (window.innerWidth < 600) {
    inputs.forEach((input) => input.classList.add("small"));
  } else {
    inputs.forEach((input) => input.classList.remove("small"));
  }
}

window.addEventListener("load", adjustFormForScreenSize);
window.addEventListener("resize", adjustFormForScreenSize);
