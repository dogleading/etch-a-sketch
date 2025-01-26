const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  const box = document.createElement("div");
  box.classList.add("item");
  container.appendChild(box);
}

const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "black";
  });
});
