const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector(".list");

form.addEventListener("submit", (e) => {
  input.replace();
  e.preventDefault();
  document.createElement("li");
  const data = document.createTextNode(e);
  list.appendChild(data);
});
