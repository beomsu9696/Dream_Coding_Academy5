const form = document.querySelector("form");
const list = document.querySelector(".list");

form.addEventListener("submit", (e) => {
  list.appendChild(li);
  e.preventDefault();
});
