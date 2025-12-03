//button clicked
const btn = document.querySelector("button");
btn.addEventListener("click", () => console.log("Button clicked"));

const search = document.querySelector("#search");
if (search) {
  search.addEventListener("input", () => console.log(search.value));
}

let scrollTimeout;
window.addEventListener("scroll", () => {
  if (scrollTimeout) clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    console.log("User scrolling...");
  }, 100);
});

window.addEventListener("load", () => console.log("Page ready"));

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    console.log("Form submitted");
  });
}

btn.addEventListener("click", (event) => {
  console.log(event.type); // click
  console.log(event.target); // element clicked
});

const box = document.querySelector(".box");
if (box) {
  box.addEventListener("mouseover", () => {
    box.style.background = "yellow";
  });
}
