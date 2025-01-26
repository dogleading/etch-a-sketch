const container = document.querySelector(".container");
const defaultSize = 16;

for (let i = 0; i < defaultSize * defaultSize; i++) {
  const box = document.createElement("div");
  box.classList.add("item");
  box.style.width = `${960 / defaultSize}px`;
  box.style.height = `${960 / defaultSize}px`;
  container.appendChild(box);
}

const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "black";
  });
});

const changeSize = document.querySelector(".change-size");

changeSize.addEventListener("click", () => {
  const newSize = prompt("Enter new size(1-150)");
  if (newSize < 1 || newSize > 150) {
    alert("Please enter a number between 1 and 150");
    return;
  }
  container.innerHTML = "";

  for (let i = 0; i < newSize * newSize; i++) {
    const box = document.createElement("div");
    box.classList.add("item");
    box.style.width = `${960 / newSize}px`;
    box.style.height = `${960 / newSize}px`;
    container.appendChild(box);
  }
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "black";
    });
  });
});
