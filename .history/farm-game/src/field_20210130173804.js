"use strict";

export default class Field {
  constructor(carroutCount, bugCount) {
    this.carroutCount = carroutCount;
    this.bugCount = bugCount;
    this.field = document.querySelector(".game__field");
    this.fieldRect = field.getBoundingClientRect();
    this.field.addEventListener("click", this.onClick);
  }
  init() {
    field.innerHTML = "";
    // 벌레와 당근을 생성한뒤 필드에 추가해준다
    this.addItem("carrot", CARROT_COUNT, "img/carrot.png");
    this.addItem("bug", BUG_COUNT, "img/bug.png");
  }

  _addItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = this.fieldRect.width - CARROT_SIZE;
    const y2 = this.fieldRect.height - CARROT_SIZE;
    for (let i = 0; i < count; i++) {
      const item = document.createElement("img");
      item.setAttribute("class", className);
      item.setAttribute("src", imgPath);
      item.style.position = "absolute";
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      this.field.appendChild(item);
    }
  }

  onClick(e) {
    const target = e.target;
    if (target.matches(".carrot")) {
      // 당근!!
      target.remove();

      playSound(carrotSound);
    } else if (target.matches(".bug")) {
      // 벌레!!
    }
  }
}